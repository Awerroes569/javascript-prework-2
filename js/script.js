import * as functionsJs from './functions.js';

//INITIALIZING LISTENERS
    
functionsJs.paperButton.addEventListener('click', functionsJs.paperClicked);
functionsJs.scissorsButton.addEventListener('click', functionsJs.scissorsClicked);
functionsJs.stoneButton.addEventListener('click', functionsJs.stoneClicked);
functionsJs.playButton.addEventListener('click', functionsJs.playGame);

//INITIALIZING GAME

functionsJs.game();
