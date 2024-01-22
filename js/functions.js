var humanMove = ' ';
var cpuMove = ' ';
var humanResult = 0;
var cpuResult = 0;

var messages = {
    "start": "Press PLAY button to begin",
    "kill": "KILL THEM ALL",
    "move": "It's time for your move",
    "win": "You win!",
    "loss": "You lose",
    "draw": "It's draw",
    "think": "Waiting for CPU move...",
    "clear": " ",
    "endWin": "Congratulations! You won the game!",
    "endLoss": "Sorry, you lost this time.",

}

var myDictionary = {
    1: "stone",
    2: "paper",
    3: "scissors"
};

var winPositions = [
    "stonescissors",
    "scissorspaper",
    "paperstone"
];

function printMessage(msg) {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}

function generateNumber() {
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    return randomNumber;
}

var allowedMoves = [1, 2, 3];

function generateMoveDict() {
    let move = generateNumber();
    return myDictionary[move];
}

function generateMoveIf() {
    let move = generateNumber();
    if (move == 1) {
        return "stone";
    }
    else if (move == 2) {
        return "paper";
    }
    else if (move == 3) {
        return "scissors";
    }
    else {
        return "Error: move unknown  check generateMove* function"
    }
}

function generateMove(callback, number) {
    var functionList = [generateMoveDict, generateMoveIf];
    if (functionList.includes(callback)) {
        console.log("callback is in the list");
    } else {
        console.log("Error: function is not in the list or doesnt exist");
        return;
    }

    console.log("Executing callback " + callback.name + " " + number + " times:")

    for (var i = 0; i < number; i++) {
        console.log(callback())
    }
}

function receiveHumanMove() {

    var userInput = 0;

    while (true) {
        var userInput = Number(prompt("Please enter your move:"));
        if (allowedMoves.includes(userInput)) {
            return myDictionary[userInput];
        }
        else {
            console.log("Error: not valid move   try again");
        }
    }
}

function winOrLoss(byHuman, byAI) {
    if (byHuman == byAI) {
        return "draw";
    }
    else if (winPositions.includes(byHuman + byAI)) {
        return "win";
    }
    else {
        return "loss";
    }
}

function refreshHuman() {
    document.getElementById("current-human").innerText = humanMove;
}

function refreshCpu() {
    document.getElementById("current-cpu").innerText = cpuMove;
}

function clearingHumanAndCpu() {
    document.getElementById("current-human").innerText = '';
    document.getElementById("current-cpu").innerText = '';
}

function paperClicked() {
    console.log('paper was pressed');
    humanMove = 'paper';
    afterClick();
    

} 

function scissorsClicked() {
    console.log('scissors were pressed');
    humanMove = 'scissors';
    afterClick();
    
}

function stoneClicked() {
    console.log('stone was pressed');
    humanMove = 'stone';
    afterClick();
}

function changeMoveButtonStatus(status) {
    paperButton.disabled = status;
    scissorsButton.disabled = status;
    stoneButton.disabled = status;
}

function changePlayButtonStatus(status) {
    playButton.disabled = status;
}

function refreshCurrentMessage(msg) {
    document.getElementById("current-message").innerText = messages[msg];
}

function zeroingResults(num=0) {
    humanMove = '';
    cpuMove = '';
    document.getElementById("human-result").innerText = num;
    document.getElementById("cpu-result").innerText = num;
}

function clearing() {
    changeMoveButtonStatus(true);
    changePlayButtonStatus(false);
    refreshCurrentMessage("start");
    zeroingResults();
}

function clearingPause() {

    setTimeout(function () {
        changeMoveButtonStatus(true);
        changePlayButtonStatus(false);
        refreshCurrentMessage("start");
    }, 2000);

}



function buttonsInitialPosition() {
    changeMoveButtonStatus(true);
    changePlayButtonStatus(false);
}

function game() {
    console.log('inside game');
    clearing();
}

function playGame() {
    changeMoveButtonStatus(false);
    changePlayButtonStatus(true);
    humanResult = 0;
    cpuResult = 0;
    refreshHuman();
    refreshCpu();
    zeroingResults();
    
    
    refreshCurrentMessage("move");
}

function changeResult(result) {
    if (result == "win") {
        humanResult += 1;
        document.getElementById("human-result").innerText = humanResult;
        

    }
    else if (result == "loss") {
        cpuResult += 1;
        document.getElementById("cpu-result").innerText = cpuResult;
    }
    
}

function showWhoWon(result) {
    if (result == 'win') {
        refreshCurrentMessage("win");
    }
    else if (result == 'loss') {
        refreshCurrentMessage("loss");
    }
    else {
        refreshCurrentMessage("draw");
    }
}

function afterClick() {
    
    //Disabling pss buttons
    changeMoveButtonStatus(true);

    //Updating current human move string
    refreshHuman();

    //Generating cpu move and updating cpuMove var
    cpuMove = generateMoveDict();

    //Signaling cpu thinking
    refreshCurrentMessage("think");

    //Logging cpu move
    console.log('cpu move: ' + cpuMove);

    //WAIT
    
    setTimeout(function () {
        
        //Clearing current message
        refreshCurrentMessage("clear");

        //Updating current cpu move string
        refreshCpu();

        //Checking who won
        let currentResult = winOrLoss(humanMove, cpuMove);

        //Logging current result
        console.log("current result: " + currentResult);

        //WAIT
        setTimeout(function () {

            //Showing who won
            showWhoWon(currentResult);

            //Changing current result
            changeResult(currentResult);

            //Logging the outcome
            console.log("current outcome: Human " + humanResult + " : " + cpuResult + " CPU");

            //WAIT
            setTimeout(function () {

                //Checking if game is over
                if (humanResult > 4) {
                    
                    //Logging human win
                    console.log("HUMAN WON");
                    
                    //Annoucing human win
                    refreshCurrentMessage("endWin");

                    //Clearing game
                    clearingPause();

                }
                else if (cpuResult > 4) {
                    
                    //Logging human win
                    console.log("CPU WON");
                    
                    //Annoucing human win
                    refreshCurrentMessage("endLoss");

                    //Clearing game
                    clearingPause();

                }
                else {

                    //Clearing moves
                    clearingHumanAndCpu();
                    
                    //Intice to play
                    refreshCurrentMessage("move");

                    //Change move button status
                    changeMoveButtonStatus(false);

                }


            }, 2000);
            
        }, 2000);

    }, 2000);
    

}










