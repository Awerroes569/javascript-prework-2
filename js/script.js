


//console.log("trying duel");
//console.log("human move time");
//let byHumanMove = receiveHumanMove();
//console.log("Human move is: " + byHumanMove);
//let byAIMove = generateMoveIf();
//console.log("AI move is: " + byAIMove);
//let result = winOrLoss(byHumanMove, byAIMove);
//console.log("the result for human is: " + result);

let paperButton = document.getElementById('paper-button');
paperButton.addEventListener('click', paperClicked);

let scissorsButton = document.getElementById('scissors-button');
scissorsButton.addEventListener('click', scissorsClicked);

let stoneButton = document.getElementById('stone-button');
stoneButton.addEventListener('click', stoneClicked);

let playButton = document.getElementById('new-game-button');
playButton.addEventListener('click', playGame);


game();



