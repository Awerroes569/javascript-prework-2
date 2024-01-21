var humanMove = ' ';
var cpuMove = ' ';
var humanResult = 0;
var cpuResult = 0;

var messages = {
    "start": "Press PLAY button to begin",
    "kill": "KILL THEM ALL",
    "move": "It's time for your move",
    "won": "You win!",
    "loss": "You lose",
    "draw": "It's draw",

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

function paperClicked() {
    printMessage('paper was pressed');
    setTimeout(function () {
        humanMove = 'paper';
        refreshHuman();
        cpuMove = generateMoveDict();
        refreshCpu();
        let currentResult = winOrLoss(humanMove, cpuMove);
    }, 2000);
    

} 

function scissorsClicked() {
    printMessage('scissors were pressed');
    humanMove = 'scissors';
    refreshHuman();
}

function stoneClicked() {
    printMessage('stone was pressed');
    humanMove = 'stone';
    refreshHuman();
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
    document.getElementById("current-message").innerText = msg;
}

function zeroingResults(num=0) {
    document.getElementById("human-result").innerText = num;
    document.getElementById("cpu-result").innerText = num;
}

function clearing() {
    changeMoveButtonStatus(true);
    changePlayButtonStatus(false);
    refreshCurrentMessage(messages["start"]);
    zeroingResults();
}

function game() {
    console.log('inside game');
    clearing();
}

function playGame() {
    changeMoveButtonStatus(false);
    changePlayButtonStatus(true);
    refreshCurrentMessage(messages["move"]);
}

async function waitSomeTime() {
    // Wait for 2 seconds (2000 milliseconds)
    await new Promise(resolve => setTimeout(resolve, 2000));
}






