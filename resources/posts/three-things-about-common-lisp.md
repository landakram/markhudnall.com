Title: Three things about Common Lisp
Date: 2021-02-27
Draft: false

I continue to have my mind blown by Common Lisp. Here are three things I've been thinking about.

## 1. Error handling

Common Lisp made me realize I was living with a fixed mental model of error handling. Swimming in water, so to speak. To me, error handling meant try/catch or returning errors directly from functions a la golang or promises. In either case, control is relinquished at the error-site and bubbled up the stack to an error handler. The flow of control continues with the error handler.

The Common Lisp condition system, on the other hand, separates flow of control from the error handler. A low-level piece of code can define multiple ways to handle an error that it might throw. A higher-level function can then decide which path to actually take when the error is thrown. Control flow depends on that decision: it is possible to just skip the error and continue on with the low-level code, if that is one of the error handling options that the low-level code provides.

This is simply not possible in the try/catch paradigm without directly handling the error at the error-site, which means we lose generality: we are now stuck with a specific error handling implementation without the ability to customize.

The chapter, [Beyong Exception Handling: Conditions and Restarts](http://www.gigamonkeys.com/book/beyond-exception-handling-conditions-and-restarts.html) from Practical Common Lisp explains the condition system very well.

## 2. Dynamic variables

Dynamic variables are like global variables with a twist. We are used to lexical scoping, where a variable is defined in some scope and can be accessed by any inner scope that is literally nested within the outer one. Dynamic variables, on the other hand, are "dynamically scoped". When a dynamic variable is bound to a value, this binding lives on for the duration of that scope, surviving function calls. The binding is pushed onto a stack, so when the scope ends, the binding is popped and the variable returns to its former value. This differs from a global variable, where "re-binding" the variable merely sets it to a different value.

I've seen dynamic variables before in elisp and clojure. I've almost never used them in clojure, and I've used them sparingly in emacs when it was the only possible way to customize some value for the duration of a block. I equated dynamic variables with global variables, and I've seen the messiness of relying on global variables.

In Common Lisp... they just make sense for some reason. Maybe it's the fact that they're used so much more in Common Lisp code I've been working with, but I find it incredibly useful to have a value that is "globally" accessible (but only for a certain, well-defined lifetime) and to be able to customize that variable non-locally.

I see the pitfalls too. Since any function inside a scope can set a dynamic variable, it makes data flow unclear. Very easy to forget that the variable can be set non-locally and write code that assumes the value I set 3 lines above in a `let` binding is the current one.

There's a sort of similar pitfall with the condition system: my code cannot necessarily assume that throwing an error means control will end at that location.

## 3. Interactivity

Common Lisp is intensely interactive. It is possible (and seemingly common), for example, to embed a [Swank](https://common-lisp.net/project/slime/doc/html/Setting-up-the-lisp-image.html) server in a production deployment. This allows you to connect to the running production system in a REPL. You can change live data, debug problems, hotswap code, etc. You might have also heard [the story of lisp at the JPL](https://www.youtube.com/watch?v=_gZK0tW8EhQ), where they debugged a problem over a REPL through space.

Interactivity is at the core of the language. Installing dependencies happens at the REPL inside the running lisp process, rather than through an out-of-process package manager. Unhandled errors automatically invoke the interactive debugger rather than panicking. Standalone executables, which are quite large, are actually lisp "images": dumps of all data from a running lisp process (running processes can be dumped and restored at any time).

This interactivity changes the programming experience dramatically. I frequently find myself writing programs from the "bottom up", starting with an inner piece that I incrementally evaluate in the REPL and build on. Moreover, the feedback loop is tight; writing lisp is *fun*. 

There are drawbacks here too. The problem with "images" is that the textual code and the image can diverge. The symptoms are starting up a fresh REPL only to be greeted by "The variable FOO is unbound". The root cause is usually having set some variable during a REPL session to a value that is defined further down in the code. A minor headache, as long as it doesn't get deployed to production.
