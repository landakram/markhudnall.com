Title: Understanding Nix
Date: 2021-01-27
Draft: false

Nix is package management from the future. But like [other transmissions from our future selves](https://everything2.com/title/Starseed+Transmissions), it's tough to understand what Nix really is, why it matters, and what you can do with it. 

I started using Nix and I'm not looking back. Let me tell you how I think about Nix and why it's worth learning.

***Caveat lector:*** Nix is difficult to get started with on macOS. For more thoughts on this and other pain points, see [Challenges](#challenges). I encourage perseverance (and perhaps a stiff drink) as you explore this brain-changing technology.

## What is Nix?

Nix is a package manager like [Homebrew](https://brew.sh/) or [pacman](https://wiki.archlinux.org/index.php/Pacman). We can install ripgrep with Nix to get a feel for it:

```sh
$ nix-env --install --attr nixpkgs.ripgrep
installing 'ripgrep-12.1.1'
building '/nix/store/0l147binjrsqsq9bnh1zn2xnfnmxv2lf-user-environment.drv'...
created 708 symlinks in user environment
```

ripgrep is now installed:

```sh
$ rg --version
ripgrep 12.1.1
-SIMD -AVX (compiled)
+SIMD +AVX (runtime)
```

Where did Nix install it?

```sh
$ which rg
/Users/mark/.nix-profile/bin/rg

$ readlink $(which rg)
/nix/store/43m8p9f7zbjnf959rhx5mzls5c28y2gk-ripgrep-12.1.1/bin/rg
```

With Nix, package names (`43m8p9f7zbjnf959rhx5mzls5c28y2gk-ripgrep-12.1.1`) are constructed by hashing a package's source files with the names of all its dependencies. A human-readable name is then appended to this hash. This means that if the source of a package or any of its dependencies change, the name of the package changes too.

Packages reside in the **Nix store**, which is just the directory `/nix/store`. Nix requires that all package dependencies also be in the Nix store. In this way, the Nix store forms a graph where nodes are packages and edges are dependency relationships.[^1]

Nix also has an **expression language**, which is used to define packages. With Nix, these package definitions are called derivations. The syntax is somewhat alienating for newcomers, so let's look at an example to familiarize ourselves. Here is the derivation for ripgrep, which is [available on](https://github.com/NixOS/nixpkgs/blob/master/pkgs/tools/text/ripgrep/default.nix) **nixpkgs**, Nix's primary package repository:

```nix
{ stdenv
, fetchFromGitHub
, rustPlatform
, asciidoctor
, installShellFiles
, Security
, withPCRE2 ? true
, pcre2 ? null
}:

rustPlatform.buildRustPackage rec {
  pname = "ripgrep";
  version = "12.1.1";

  src = fetchFromGitHub {
    owner = "BurntSushi";
    repo = pname;
    rev = version;
    sha256 = "1hqps7l5qrjh9f914r5i6kmcz6f1yb951nv4lby0cjnp5l253kps";
  };

  cargoSha256 = "03wf9r2csi6jpa7v5sw5lpxkrk4wfzwmzx7k3991q3bdjzcwnnwp";
  cargoBuildFlags = stdenv.lib.optional withPCRE2 "--features pcre2";

  nativeBuildInputs = [ asciidoctor installShellFiles ];
  buildInputs = (stdenv.lib.optional withPCRE2 pcre2)
  ++ (stdenv.lib.optional stdenv.isDarwin Security);
  // ...
  meta = with stdenv.lib; {
    description = "A utility that combines the usability of The Silver Searcher with the raw speed of grep";
    homepage = "https://github.com/BurntSushi/ripgrep";
    license = with licenses; [ unlicense /* or */ mit ];
    maintainers = with maintainers; [ tailhook globin ma27 zowoq ];
  };
}
```

We are looking at an anonymous function that takes a single argument, an attribute set. An attribute set is like a hashmap where keys are strings. The attribute set used as input argument has been destructured as part of the function definition and contains the keys `stdenv`, `fetchFromGitHub`, `rustPlatform`, `asciidoctor`, etc. The function calls `rustPlatform.buildRustPackage` to define the package, passing in another attribute set that specifies the configuration necessary to build ripgrep. In particular, it specifies that the ripgrep source (the `src` key) should be fetched from GitHub. Many of the details are hidden inside the function `buildRustPackage`, which ultimately specifies that `src` should be built using [`cargo build`](https://github.com/NixOS/nixpkgs/blob/master/pkgs/build-support/rust/default.nix#L186).

Note that the above function only has access to its input arguments. These input arguments are either utilities functions and namespaces (like `stdenv`, `fetchFromGitHub`, and `rustPlatform`) or other packages (like `asciidoctor` and `Security`[^2]), both defined using the Nix expression language.

If your package relies on other packages as build or runtime dependencies, you'll declare these dependencies using the Nix expression language, as ripgrep does above with `nativeBuildInputs` and `buildInputs`. Nix computes the full path to those dependencies (something like `/nix/store/<a-hash>-your-dependency`) and makes them available through `$PATH` or other environment variables when it actually builds your package. Nix makes sure those dependencies are built before it builds your package.

So when ripgrep is built by Nix, it is actually built using Nix-packaged `rustc` and `cargo` 
(`/nix/store/189i8cpfdr758nplhviw59qcp539q4l2-rustc-1.49.0/bin/rustc` and `/nix/store/d6bynqj12ak4dqqgk1wvw3pwrxym9xw3-cargo-1.49.0/bin/cargo` respectively at the time of writing).[^3]

## The big idea

To recap: Nix names packages by hashing their source files along with the names of all their dependencies. Thus, updating a package's source or any of its dependencies changes this hash, resulting in a new package with a new name. Nix puts packages and their dependencies in the Nix store, so it has a global view of all packages. Since changes to packages always result in a new name, the Nix store is append-only. 

The implications of this are staggering:

* Multiple versions of the same package can peacefully coexist on the same system, since they are guaranteed to have different names. 
* Once a package is built (for a given platform), it has a globally unique name and can thus be globally cached. In fact, Nix does this automatically, so most packages are actually just downloaded from [cache.nixos.org](http://cache.nixos.org/) rather than built from source on your computer.
* Rollbacks to previous versions are trivial: just change symlinks back to what they were before. Nix tools like `nix-env --rollback` make this easy to do.

### A motivating example: Homebrew and openssl

To better understand this paradigm shift, consider [this issue](https://github.com/rbenv/ruby-build/issues/1353) regarding Homebrew, openssl, and rbenv or [this similar one](https://github.com/pyenv/pyenv/issues/1686) for pyenv. Or consider the dreaded [`dyld: Library not loaded`](https://stackoverflow.com/questions/59006602/dyld-library-not-loaded-usr-local-opt-openssl-lib-libssl-1-0-0-dylib) issues when upgrading macOS. I have encountered these issues myself, resulting in hours of frustration. Multiply this by the # of engineers in your org and you have real productivity loss, especially if your org keeps dependencies up-to-date or mandates regular OS updates (which it should).

Now these problems can be solved by hand. In the first case, openssl v1.0.x was end-of-lifed, so Homebrew dropped the formula that lets you build it. Unfortunately, old ruby versions rely on this old version of openssl, so it must be manually installed and the ruby build retried with `--with-openssl-dir=/path/to/openssl-v1.0.x`[^4]. In the second case, openssl is dynamically linked at runtime, but its [dylib](https://softwareengineering.stackexchange.com/questions/66305/what-is-a-dylib) has disappeared during an OS upgrade. The path to the nonexistent dylib needs to be changed [with `install_name_tool`](https://stackoverflow.com/a/29809480/826650) on the binary that uses it.

But here be dragons. The [highly upvoted and accepted answer](https://stackoverflow.com/a/59184347/826650) for the dylib issue has you re-link the old, end-of-lifed version of openssl. Another answer has you install openssl using [some random formula](https://stackoverflow.com/a/59462770/826650). These are **bad ideas** for something like openssl. Yet, I have done these things myself because, like most developers, I just want to get on with the task at hand.

### So what's the underlying problem?

Rich Hickey sums it up well in his excellent talk, [Spec-ulation](https://www.youtube.com/watch?v=oyLBGkS5ICk). The situation is something like this:

* Software has dependencies
* Dependencies are referenced by name
* Names are resolved by the "environment"
* The environment changes out from under you, breaking name resolution

Unsurprisingly, this pattern --- let's call it "naming stuff" --- pervades software design:

* Functions call other functions. Import statements set up the environment where function names can be resolved. 
* Import statements reference other namespaces. Package declarations (`package.json`, etc.) set up the environment where namespaces can be resolved. 
* Package declarations reference other packages by artifact name or URL. Package registries or DNS set up the environment where artifacts can be resolved.
* Shells reference commands by name. `$PATH` sets up the environment where commands can be resolved to paths in the filesystem.
* Filesystem paths are names too. [inodes](https://en.wikipedia.org/wiki/Inode) set up the environment where paths can be resolved to block locations on disk.

The problem is that associations between names and their [referents](https://en.wikipedia.org/wiki/Referent) are mutable. Names, while convenient for human beings, hide changes in the environment. The nature of the relationship between names and their referents is a [longstanding philosophical question](https://en.wikipedia.org/wiki/Ship_of_Theseus). Applied to programming, we might ask:

If I make a breaking change to a function, is it still the same function? 

If I have openssl v1.0.2 and openssl v1.1.1, which one is "openssl"?

[SemVer](https://semver.org/) is supposed to resolve this dilemma by separating breaking and non-breaking changes into major and minor/patch versions. But since there is no formal relationship between artifact names and namespaces, SemVer doesn't really fix the underlying issue. This becomes clear in "transitive dependency hell", when Package A depends on B and C, where B depends on D v1.0 and C depends on D v2.0. What are we importing when we write `import D`?

Nix solves this problem for packages by making every name correspond one-to-one with a referent[^5]. If a package's source or dependencies change, it is a different thing with a different name. There can be no question about which version the name "openssl" refers to, because Nix makes the name "openssl" impossible (or at least, makes it have only a single referent in the context of a given package that depends on it).

In essence, Nix makes the package environment append-only. New names can be added, but existing associations between names and their referents are immutable. 

So to answer the age-old philosophical question, "ship of Theseus" is a symlink to `/nix/store/j2pic1a5ijcpbs494vdhdbafn7y50ppr-ship-of-theseus` that is updated to `/nix/store/rmqbimj5mqnshfr3rgffk8h0flx7k911-ship-of-theseus` when the first plank of wood is replaced.

## Challenges

I ran into both practical and conceptual difficulties with Nix. Ultimately, my opinion is that Nix is hard to install and use for newcomers but that its problems can be overcome through education  and automation.

Here is a non-exhaustive list of head-scratchers I've encountered in my Nix journey to date.

### Installing on macOS Catalina and later

Nix is difficult to install on macOS. The primary issue is Catalina's root filesystem is read-only, so `/nix` cannot be created like a regular directory. Nix assumes that it has write access to `/nix` and derivations [use absolute paths](https://nixos.org/guides/nix-pills/install-on-your-running-system.html#idm140737320754336) when referring to other objects in the Nix store. The workaround, which has been automated [by the Nix installer](https://nixos.org/manual/nix/stable/#sect-macos-installation), is to create a separate volume for the Nix store and mount it at `/nix`. 

But the installer did not work for me; the Nix installer creates a volume that relies on the T2 chip's encryption at rest rather than FileVault, and my laptop does not have a T2 chip. This issue is [documented here](https://github.com/NixOS/nix/pull/3692). As suggested [by the docs](https://nixos.org/manual/nix/stable/#sect-macos-installation-encrypted-volume), the fix is to manually create a Filevault-encrypted volume. The installer does not do this automatically because of race conditions between services that use Nix on startup and mounting + decrypting the volume, which causes some applications to fail on startup. 

Thankfully, an [open PR](https://github.com/NixOS/nix/pull/4289) is set to fix this race condition and automate creating the Filevault-encrypted volume during installation. I used the preview installer in the open PR's description to get up and running.

#### nix-darwin

The next challenge was understanding and installing [nix-darwin](https://github.com/LnL7/nix-darwin). nix-darwin's README describes it as:

> Nix modules for darwin, `/etc/nixos/configuration.nix` for macOS.

Huh? Basically, nix-darwin gives you a way codify configuration for a macOS computer using the Nix expression language. Configuration ranges from networking and users to installed applications and CLI tools. This is the same role that NixOS plays for Linux, but less tightly integrated in nix-darwin due to macOS's more restrictive platform. With NixOS, I would configure my system by editing a file located at `/etc/nixos/configuration.nix`. With nix-darwin, the analogous file defaults to `~/.nixpkgs/darwin-configuration.nix`.

For example, to define a user, I can write:

```nix
users.users.mark = {
  name = "mark";
  home = "/Users/mark";
  shell = pkgs.zsh;
};
```

And I can install system-wide packages using:

```nix
environment.systemPackages = [ pkgs.ripgrep ];
```

When I run `darwin-rebuild switch`, nix-darwin updates my system to reflect any changes to the config by building new packags and updating symlinks on my `$PATH`. If the update fails for any reason, I can roll back to the previous version instantaneously with `darwin-rebuild --rollback`.

nix-darwin is structured internally using [NixOS modules](https://nixos.wiki/wiki/NixOS#Modules), a convention where Nix files define available configuration options for some part of the system and then implement the configuration logic. The [documentation](https://daiderd.com/nix-darwin/manual/index.html) helps with understanding the available configuration options.

I ran into some issues installing nix-darwin that I can't remember now, but they were solved using workaround in various GitHub issues.

#### Applications and spotlight

A big issue I ran into was making Nix-installed macOS applications like Firefox work well with [Alfred](https://www.alfredapp.com/). nix-darwin symlinks macOS applications built with Nix into `~/Applications/Nix Apps`. This works fine if you use the dock to launch applications, but Spotlight does not index symlinks and so it is not possible to open these applications using Spotlight or Alfred. 

At first, I tried to get Alfred to index my Nix store, but couldn't get this to work. A workaround suggested in [this GitHub issue](https://github.com/LnL7/nix-darwin/issues/139) is to use AppleScript to create macOS [aliases]("https://en.wikipedia.org/wiki/Alias_(Mac_OS)"), which, unlike symlinks, are indexed by Spotlight. Using AppleScript seems like a hack. Another user suggests a similar workaround [using a Swift script](https://github.com/NixOS/nix/issues/1278#issuecomment-633934039) to create these aliases.

I ended up combining these workarounds into a custom module. You can see the Nix module in my config [here](https://github.com/landakram/nix-config/blob/master/link-apps/default.nix). The module is enabled with the following line in my nix-darwin configuration:

```nix
services.link-apps = {
  enable = true;
  userName = config.users.users.mark.name;
  userHome = config.users.users.mark.home;
};
```

Applications that are installed with Nix are now aliased into `~/Applications/Nix`, which can be indexed by Alfred. I also needed to configure Alfred to index aliases by going to `Alfred Preferences -> Features -> Default Results -> Extras -> Advanced...` and dragging in one of the aliases in `$HOME/Applications/Nix`.

It still feels like an ugly workaround, but it has worked well for my purposes ever since.

### Paper-cuts

Beyond the installation issues and conceptual hurdles (Nix's novel paradigm of content-addressing packages), Nix gave me some paper-cuts. These tidbits of [accidental complexity](https://en.wikipedia.org/wiki/No_Silver_Bullet) raise the barrier to entry but aren't inherent to Nix's new paradigm. 

#### Nix expression language

Nix requires learning the Nix expression language, a purpose-built language that isn't re-usable in other contexts. I quickly needed to understand and wield the language when I ventured beyond just installing packages with `nix-env` into creating reproducible environment with nix-darwin + [home-manager](https://github.com/nix-community/home-manager) and, for projects, [shell.nix](https://nixos.wiki/wiki/Development_environment_with_nix-shell) files.

Now that I'm more familiar with it, I actually like it a lot. But it created a higher upfront cost to learning Nix. I could just as easily see Nix working with YAML, widely used in automation tooling, but I suppose that DSLs need to be learned irrespective of the host language, and Nix's expression language gives it the power of modularity. So maybe I'm just being grumpy.

#### Everything is an attribute set

Nix attribute sets are nice data structures. nixpkgs is basically a big, nested attribute set, hence installing a package with e.g. `nix-env -iA nixpkgs.graphviz` involves naming a derivation nested inside the top-level `nixpkgs` attribute.

nixpkg utility functions such as [`mkOption`](https://github.com/NixOS/nixpkgs/blob/93b430bc6ba3c084d66f96546dd7b95a2835eceb/lib/options.nix#L58) or [`buildRustPackage`](https://github.com/NixOS/nixpkgs/blob/93b430bc6ba3c084d66f96546dd7b95a2835eceb/pkgs/development/compilers/rust/make-rust-platform.nix#L14-L16) are also defined using attribute sets. 

The facts that everything is an attribute set, the Nix expression language is dynamically typed, and documentation is sparse make discoverability a challenge. I often find myself poking around the nixpkgs source, hunting down function definition or derivations so I can see their inputs and understand what they do. As before, this steepens the learning curve.

#### CLI tools

Nix has many top-level CLI tools. There is `nix`, `nix-env`, `nix-shell`, `nix-store`, `nix-build`, `nix-channel`, `darwin-rebuild` (or `nixos-rebuild`), and others, for example. The self-titled tool, `nix`, is used to set global configuration, while the others are used for Nix's various subsystems.

These CLI tools reflect Nix's breadth, but I wish there was just one top-level `nix` command and everything else was a subcommand. `nix` *does* have subcommands, but there are sometimes slight differences in functionality. For example, there's `nix develop` but also `nix-shell`. They have differences, but which one should I be using?[^6]

### "Now I have two build tools"

I've been using Nix for projects as well. I think of Nix as a superset of language-specific package managers like ruby's bundler and version managers like rbenv. In addition to managing packages and language versions, I can use Nix to install CLI tools that aren't language specific. Combined with [lorri](https://github.com/target/lorri) and [direnv](https://direnv.net/), all the tools I need when working on a given project are available when I `cd` into its repo.

But I find that using Nix for package management in projects is awkward. It makes sense: Nix makes builds reproducible by creating a content-hash for each dependency, but we have to bring builds into Nix-land to do this. So there are additional tools that convert dependency declarations like a `Gemfile` or `go.mod` into a bunch of Nix derivations in a `.nix` file.[^7] It's easy for these to get out of date, especially when I'm new to Nix and my head is more in the language-specific tools (this could be solved with linting). 

Moreover, there are subtle differences between the language tools and Nix. For example, both ruby and python allow packaging pre-compiled, platform-specific binaries rather than having users build from source. I don't know enough about what Nix does here under the hood, but it chooses to build from source and has failed for me in cases where the language specific tool doesn't. Theoretically, Nix builds packages in isolation, so perhaps the snags come from the impure parts of Nix that bridge a specific platform. Or perhaps some packages have build instructions hard-coded for platforms that bypass Nix's attempts to sandbox builds. Either way, it's frustrating enough that, for the most part, I use Nix to bring in language-agnostic tooling but continue to use language-specific package managers.

Docker sort of solves this with [multi-stage builds](https://docs.docker.com/develop/develop-images/multistage-build/). But Docker is more about creating reproducible *run* environments (where the run environment can also be used to help build another container) rather than reproducible builds. It doesn't prevent you from specifying `"latest"` for your dependencies, whereas Nix always requires a hash, effectively pinning versions even if one is not explicitly specified. On the other hand, for Nix to create reproducible builds, the sources must be available somewhere.

Whatever, I can just pin versions using my language-specific package manager and get on fine with Docker. But I much prefer developing on the host if I can. Docker has real costs: the images can be huge and Docker is layered with complexity. Docker on macOS is resource hungry, slow, and probably always will be because it is virtualized. For deployment, I love Docker. Unfortunately, I haven't used NixOS or [nixops](https://github.com/NixOS/nixops) enough to compare my experiences there.

## Resources

Despite my gripes, I still think Nix is [solarpunk](https://en.wikipedia.org/wiki/Solarpunk). It is a category-defining tool, and I hope its ideas become the backbone of software development. It has an elegance, and I appreciate that a globally shareable cache that benefits all developers springs forth naturally from this.

A few resources have been invaluable on my Nix journey. Perhaps they will be helpful to you too.

* [Burke Libbey's "Nixology" videos](https://www.youtube.com/playlist?list=PLRGI9KQ3_HP_OFRG6R-p4iFgMSK1t5BHs). These are excellent, practical videos on using Nix on macOS. Just enough detail about what's going on under the hood to pique my interest. Start here.
* [Christine Dodrill's "How I Start: Nix"](https://christine.website/blog/how-i-start-nix-2020-03-08). This was a huge help for understanding Nix in projects. Christine's other posts on Nix and NixOS are fantastic too.
* [Nix pills](https://nixos.org/guides/nix-pills/index.html). The official guide. Excellent for understanding what's going on underneath but maybe not the best starting point for practical use.
* [Lawrence Dunn's "How Nix Derivation Instantiation Works"](https://lawrencedunn.io/posts/2020-03-20-how-nix-instantiation-works/): A great deep drive into how Nix derivations are instantiated, that is, how we go from Nix expressions to hashes and build instructions.
* [nix.dev](https://nix.dev/). Useful supplemental docs and style guide.

Good luck.

[^1]: Nix provides tools for inspecting the relationships between packages. For example, I can see all the dependencies of ripgrep by running `nix-store --query --requisites /nix/store/43m8p9f7zbjnf959rhx5mzls5c28y2gk-ripgrep-12.1.1`.

[^2]: The macOS [Security framework](https://developer.apple.com/documentation/security) packaged [for Nix](https://github.com/NixOS/nixpkgs/blob/master/pkgs/os-specific/darwin/apple-sdk/frameworks.nix#L99).

[^3]: You can verify this by running `nix-shell '<nixpkgs>' -A ripgrep` and then `which cargo`. `nix-shell` puts you into the environment that Nix uses to build a given package.

[^4]: Actually, `ruby-build` was reworked to stop looking for Homebrew's version of openssl so this shouldn't be necessary anymore. Instead, it will download the version of openssl that it needs if it doesn't already exist. `pyenv` still looks for Homebrew's openssl and so still suffers from this problem.

[^5]: For solving the same problem in code, I'm really excited about [Unison](https://www.unisonweb.org/). In particular, check out the documentation on [Refactoring and modifying code in Unison](https://www.unisonweb.org/docs/refactoring/). It's a trip. Unfortunately, it's hard to imagine Unison being used widely because it is both an entirely new paradigm and programming language. Of course, Nix is both of these things as well...

[^6]: FWIW, I use `nix-shell`.

[^7]: For `Gemfile`, it's [bundix](https://github.com/nix-community/bundix) and for `go.mod`, it's [vgo2nix](https://github.com/nix-community/vgo2nix). 
