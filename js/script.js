//INITIALIZING LISTENERS

let paperButton = document.getElementById('paper-button');
paperButton.addEventListener('click', paperClicked);

let scissorsButton = document.getElementById('scissors-button');
scissorsButton.addEventListener('click', scissorsClicked);

let stoneButton = document.getElementById('stone-button');
stoneButton.addEventListener('click', stoneClicked);

let playButton = document.getElementById('new-game-button');
playButton.addEventListener('click', playGame);

//INITIALIZING GAME

game();



