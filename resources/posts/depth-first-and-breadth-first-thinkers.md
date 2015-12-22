Title: Depth-first and breadth-first thinkers
Date: 2015-12-21
Draft: true

This piece is about working on teams.

Consider this problem: you're walking along a trail in the dense forest and you need to find your way out. In front of you, the trail forks over and over again as far as you can see. The exit might be miles away, or it might be a 5-minute walk down one of the forks -- you're so turned around that you have no idea.

If you were a poet, you might take the road less traveled. In computing, however, this is a very clear [tree traversal problem](https://en.wikipedia.org/wiki/Tree_traversal), and there are two methodical ways to go about it.

## Depth-first search

You keep walking down the leftmost path until you reach a dead-end. Then, you backtrack to the last fork with a road you hadn't taken and try that one, following the leftmost path like you did before. Reached a dead-end? You backtrack and repeat the process. 

This is called **depth-first search** because you go as far as you can down one path before you backtrack.

## Breadth-first search

Let's call the two paths in front of you Path A and Path B. You walk down Path A until you reach another fork, which we'll call Fork A. If you don't see the way out, you walk back and take Path B down to Fork B. If that doesn't lead to an exit, you walk back to your starting point, down Path A, and then choose a path from Fork A. Didn't find an exit? You walk *all* the way back to Fork B and repeat the process there. 

This is called **breadth-first search** because you explore all the paths closest to you before moving deeper. 

You can imagine the trade-offs of both: 

* With depth-first search, you go *really* far down one path really quickly. That works out :thumbsup: for you if the exit happens to be far away, but if the exit is down Path B and really close, you won't discover it for a while.
* With breadth-first search, it takes a long time to reach an exit that's far away, but you'll never miss an exist on Path B that's really close by.

Tree traversal algorithms like DFS and BFS are used in many computing disciplines. For example, you can represent a chess game as a tree, where each "fork in the road" represents a different board configuration and each road is a possible move by one of the players. If you could explore this tree quickly, you could look ahead in the game and always make a move that gives you a leg up. Armed with this tree, a computer becomes a worthy chess opponent. 

## Thinking as a tree

When you're starting a project or exploring a new idea, your thinking is like a tree. Each problem you need to solve relates to the last. Each idea branches into many others, until finally, the full scope of your project or idea stands in front of you.[^1]

You'd obviously like to enumerate this scope. Ask yourself this question: How do *you* naturally walk this tree? **Are you a depth-first or breadth-first thinker?**

## Working on a team

This process of discovery, like finding the exit in a winding forest, takes some time. And often, you're doing it with a slew of other folks in a room somewhere, possibly with a whiteboard.

I find myself in this situation a lot and I experience a few things:

* Someone says something that feels irrelevant to me
* Someone moves too quickly in one direction and I can't follow what they're saying

These situations are frustrating, but here's the thing: *everyone in the room is traversing the tree.* We're all just on different points along the BFT---DFT spectrum.

So the second question to ask yourself is: **Which of my teammates are depth-first thinkers, and which are breadth-first?**

When you ask yourself this question, you come to understand why something that feels irrelevant to you makes sense to someone else (*what path are they on compared to my own?*). You also come to understand how someone's thinking can move so quickly in one direction (*how deep down a path are they compared to me?*)

***

Let's go back to the forest for a second. 

Imagine now that, instead of being lost by yourself, all of your teammates are with you. By now, you've figured out whether you're a depth-first thinker or a breadth-first thinker. You'll be able to cover a lot more ground and find an exit more quickly by nature of the fact that you have more people to help you.

But if all your teammates think like you, you'll all go down the same path together and you won't be any better off than when you were alone.

**People who think differently than you see things that you can't.**

If you're working on a team, first recognize what kind of thinker you are, and second, what kinds of thinkers your teammates are. You'll be more patient and create better ideas.

If you're building a team, seek out different kinds of thinkers. They'll give you vision that's impossible without them.

<!-- Otherwise, you'll miss the tree for the forest. -->

[^1]: Thinking as a tree is a simplification. Your thinking is more like a [graph](https://en.wikipedia.org/wiki/Graph_\(mathematics\)) since ideas *between* branches are also interrelated. The concept still holds, since one [traverses a graph](https://en.wikipedia.org/wiki/Graph_traversal) in the same manner.
