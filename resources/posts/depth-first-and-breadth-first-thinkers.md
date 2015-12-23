Title: Depth-first and breadth-first thinkers
Date: 2015-12-21
Draft: true

This piece is about working on teams.

Consider this problem: you're walking along a trail in the dense forest and you need to find your way out. In front of you, the trail forks over and over again as far as you can see. The exit might be miles away, or it might be a 5-minute walk down one of the forks -- you're so turned around that you have no idea.

If you were a poet, you might take the road less traveled. In computing, however, this is a very clear [tree traversal problem](https://en.wikipedia.org/wiki/Tree_traversal), and there are two methodical ways to go about it.

## Depth-first search

With depth-first search, you go as far as you can down one path before you backtrack.

For instance, you keep walking down the rightmost path, ignoring all the forks, until you reach a dead-end. Then, you backtrack to the last fork with a road you hadn't taken and try that one, following the rightmost path like you did before. Reached a dead-end? You backtrack and repeat the process. 

![](/img/dfs.png)

## Breadth-first search

With breadth-first search, you explore all the paths closest to you before moving deeper.

For example, you walk down the path on the right until you reach a fork. If you don't see a way out, you backtrack and walk down the path on the left. Still nothing? You backtrack again, back to path on the right to explore the two paths that lead from there. Then you repeat with the path on the left.

![](/img/bfs.png)

You can imagine the trade-offs of both: 

* With depth-first search, you go *really* far down one path really quickly. That works out 👍for you if the exit happens to be far away, but if the exit is down the other path and really close, you won't discover it for a while.
* With breadth-first search, it takes a long time to reach an exit that's far away, but you'll never miss an exit on a path that's really close by.

Tree traversal algorithms like DFS and BFS are used in many computing disciplines. For example, you can represent a chess game as a tree, where each "fork in the road" represents a different board configuration and each road is a possible move by one of the players. If you could explore this tree quickly, you could look ahead in the game and always make a move that gives you a leg up. Armed with this tree, a computer becomes a worthy chess opponent. 

## Thinking as a tree

When you're starting a project or exploring a new idea, your thinking is like a tree. Each problem you need to solve relates to the last. Each idea branches into many others, until finally, the full scope of your project or idea stands in front of you.[^1]

You'd obviously like to enumerate this scope. This begs a question you should ask yourself: How do *I* naturally walk this tree? **Am I a depth-first or breadth-first thinker?**

![](/img/thinking_as_a_tree.png)

## Working on a team

This process of discovery, like finding the exit in a winding forest, takes some time. And frequently, you're doing it with a slew of other folks in a room somewhere, possibly with a whiteboard.

When I'm working collaboratively like this, a couple things tend to happen:

* Someone says something that I feel is irrelevant
* Someone moves too quickly in one direction and I can't follow what they're saying

These encounters can be frustrating, but here's the thing: *everyone in the room is traversing the tree.* We're all just in different places along the BFT---DFT spectrum.

So the second question to ask yourself is: **Which of my teammates are depth-first thinkers, and which are breadth-first?**

When you pose this question, you begin to understand why a detail that feels irrelevant to you matters to someone else (*what path are they on compared to my own?*). You also come to know why someone's thinking can move so quickly in one direction (*how deep down a path are they compared to me?*)

![](/img/working_with_a_tree_team.png)

Let's go back to the forest for a second. 

Imagine now that, instead of being lost by yourself, all of your teammates are with you. By now, you've figured out whether you're a depth-first thinker or a breadth-first thinker. You'll be able to find an exit more quickly by nature of the fact that you have more people to help you.

But if your teammates all think like you, you'll go down the same path together and you won't be any better off than when you were alone.

**People who think differently than you see things that you can't.**

If you're working on a team, first recognize what kind of thinker you are. Then, recognize what kinds of thinkers your teammates are. You'll be more patient and create better ideas.

If you're building a team, seek out different kinds of thinkers. They'll give you vision that's impossible without them.

Otherwise, you'll miss the tree for the forest.

[^1]: Thinking as a tree is a simplification. Your thinking is probably more like a [graph](https://en.wikipedia.org/wiki/Graph_\(mathematics\)) since ideas *between* branches are also interrelated. The concept still holds, since one [traverses a graph](https://en.wikipedia.org/wiki/Graph_traversal) in the same manner.
