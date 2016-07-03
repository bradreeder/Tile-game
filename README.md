# Tile-game

##What?

A tile-floor puzzle game influenced by some of the puzzles from the popular
video-game franchise [The Legend of Zelda](https://en.wikipedia.org/wiki/The_Legend_of_Zelda).

A user must navigate a maze-like grid of coloured tiles stepping on each tile once without
stepping on the same tile twice.

##How?

* txt files representing each level's map grid is stored on and requested from the server.
* The client-side parses the server's response into a 2-D array that models the map grid, and generates a grid of coloured divs on the html page from it.
* Each grid-box is individually coloured to either represent an unexplored tile, an explored tile, an obstacle, or the user's current position. The colours are controlled using css classses, and are continually updated as the user moves around the grid.
* Client-side.js adds event listeners to the html body so that the user can navigate the grid in four directions, and reset the current level by pressing enter.

##Current goals

* Create intro page with instructions and submit button that starts the game
* Work on the css and make it beautiful
* Write front and back-end tests refactoring code as is necessary
* Add: codeclimate.yml, travis.yml, codecov.yml, and deploy on heroku.
* We have thus far used the same maps as Zelda: Oracle of Ages. Come up with your own levels that fairly increment in difficulty, and come up with ideas for unique game mechanics.
* Responsive mobile-first design


