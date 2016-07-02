# Tile-game

##What?

A tile-floor puzzle game influenced by some of the puzzles from the popular
video-game franchise [The Legend of Zelda](https://en.wikipedia.org/wiki/The_Legend_of_Zelda).

A user must navigate a maze-like grid of coloured tiles stepping on each tile once without
stepping on the same tile twice.

##How?

* Client-side should generate grid of divs.
* Client-side should have the controls as event listeners
* The current tile the user is on, tiles that have been stepped on, tiles that
have not been stepped on, and obstacles should all be indicated by colour and controlled
using CSS classes.
* Level lay-out should be stored on server side and retrieved every time the user
finishes a level. Currently seems best to model the grid in JS as a 2-d Array.

##Stretch goals

* For now, I just want to recreate the same levels found in Zelda: Oracle of Ages.
In time I would consider creating new levels, and new game mechanics.
