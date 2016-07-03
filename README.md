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

##Current goals

* Create intro page with instructions and submit button that starts the game
* Work on the css and make it beautiful
* Write front and back-end tests refactoring code as is necessary
* Add: codeclimate.yml, travis.yml, codecov.yml, and deploy on heroku.
* We have thus far used the same maps as Zelda: Oracle of Ages. Come up with your own levels that fairly increment in difficulty, and come up with ideas for unique game mechanics.


