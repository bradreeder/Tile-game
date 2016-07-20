[![Build Status](https://travis-ci.org/bradreeder/Tile-game.svg?branch=master)](https://travis-ci.org/bradreeder/Tile-game) [![codecov](https://codecov.io/gh/bradreeder/Tile-game/branch/master/graph/badge.svg)](https://codecov.io/gh/bradreeder/Tile-game)[![Code Climate](https://codeclimate.com/github/bradreeder/Tile-game/badges/gpa.svg)](https://codeclimate.com/github/bradreeder/Tile-game)

# Tile-game

## Quickstart guide
``` bash
git clone <repository name>
cd <repository path>
npm install
npm start
```

And to see the tests:
``` bash
npm test
```

Or you can access the page [here.](https://evening-reef-36937.herokuapp.com/)


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

* Create intro page with instructions and submit button that starts the game.
* Work on the css and make it beautiful.
* Write front-end tests refactoring code as is necessary.
* Back-end tests done. Test that the level.txt files have the correct content.
* Write an algorithm that solves the puzzle, and is able to work out its difficulty, so you can use it to test if a level is solvable and generate random levels. Matt suggested looking into [this](https://www.dropbox.com/sh/4i735vk7rjv4yjs/AACbtNIuilsk9IYzvCMm_ZZNa?dl=0).
* We have thus far used the same maps as Zelda: Oracle of Ages. Come up with your own levels that fairly increment in difficulty, and come up with ideas for unique game mechanics. So far: ability to teleport, ability to jump, puzzles with multiple stories, puzzles that can only be solved by stepping on certain tiles.
* Responsive mobile-first design.
* Get it working in other browsers (i.e. get es6 code to work in other browsers).
* Add midi audio file, retro themed. Look into Howler.js.
* If you ever need a graphics engine look into Pixi.js. Sockets.io for multiplayer (unlikely.)

##Stretch goals

* Come up with idea for a story-mode (?). So far: a 2d square has been inducted into a magical school that is, over the levels, teaching it to manipulate and travel through its 2d world by giving it the ability to access the third dimension. Can introduce puzzles that can only be solved in 2d by going to and solving puzzles in a 3d world. [Flatland](https://en.wikipedia.org/wiki/Flatland) inspired.
* Ideas related to the above: accessing 3-d in order to teleport in the 2-d world (at first the ability to jump, then larger distances), manipulating the 3-d world in order to directly change the map of the 2-d world (you could, in 3-d, draw a shape that becomes the map in 2-d), mind-controlling over AI to pull switches for you, directly hacking the game-world by using the browser-console, etc. Introduce handicaps the longer you remain in 3d. (?)
