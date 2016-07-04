[![Build Status](https://travis-ci.org/bradreeder/Tile-game.svg?branch=travis)](https://travis-ci.org/bradreeder/Tile-game)

[![codecov](https://codecov.io/gh/bradreeder/Tile-game/branch/master/graph/badge.svg)](https://codecov.io/gh/bradreeder/Tile-game)

[![Code Climate](https://codeclimate.com/github/bradreeder/Tile-game/badges/gpa.svg)](https://codeclimate.com/github/bradreeder/Tile-game)

# Tile-game

##What?

A tile-floor puzzle game influenced by some of the puzzles from the popular
video-game franchise [The Legend of Zelda](https://en.wikipedia.org/wiki/The_Legend_of_Zelda).

A user must navigate a maze-like grid of coloured tiles stepping on each tile once without
stepping on the same tile twice.

URL: https://evening-reef-36937.herokuapp.com/

##How?

* txt files representing each level's map grid is stored on and requested from the server.
* The client-side parses the server's response into a 2-D array that models the map grid, and generates a grid of coloured divs on the html page from it.
* Each grid-box is individually coloured to either represent an unexplored tile, an explored tile, an obstacle, or the user's current position. The colours are controlled using css classses, and are continually updated as the user moves around the grid.
* Client-side.js adds event listeners to the html body so that the user can navigate the grid in four directions, and reset the current level by pressing enter.

##Current goals

* Create intro page with instructions and submit button that starts the game
* Work on the css and make it beautiful
* Write front-end tests refactoring code as is necessary
* Back-end tests done. Test that the level.txt files have the correct content.
* Write an algorithm that solves the puzzle, and is able to work out its difficulty, so you can use it to test if a level is solvable and generate random levels.
* Add: codeclimate.yml, travis.yml, codecov.yml.
* We have thus far used the same maps as Zelda: Oracle of Ages. Come up with your own levels that fairly increment in difficulty, and come up with ideas for unique game mechanics.
* Responsive mobile-first design
* Get it working in other browsers (i.e. get es6 code to work in other browsers)
* Add quickstart guide to readme: npm install, how to test frontend, how to test backend, how to run in localhost:4000.
* Add midi audio file, retro themed
