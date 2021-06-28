import Player from "./Player.js";

/**
 * querySelector selecteert de html elementen
 * [] is een array
 */
const player1 = document.querySelector('.player-one-label');
const player2 = document.querySelector('.player-two-label');
console.log(player1)
const players = [];
const fields = document.querySelectorAll('.board > .box');
const resetButton = document.querySelector(".reset-btn");
let currentPlayerIndex = 0;

//maakt de spelers aan
const playerOne = new Player("Wouter", "X");
const playerTwo = new Player("Hans", "O")
//gooit de spelers in de array
players.push(playerOne, playerTwo)


//ziet dat je op het vakje klikt
function ClickHandeler(event) {
    const box = event.target;
    //zorgt dat er een symbool in de box komt
    addSymbolToField(box)
    checkWinner()
}
//loopt door de boxen heen en add een eventlistener
for (let i = 0; i < fields.length; i++) {
    const box = fields[i];
    box.addEventListener("click", ClickHandeler)
    console.log(box)
    console.log(i)
}
/*
* Assignment
 * Make a loop thru all the fields and add a click event. 
 * Connect the addSymbolToField function in the eventHandler
 */
//for ...

resetButton.addEventListener("click", resetGame);
//zorgt ervoor dat je niet op een ingevuld vakje kan klikken
function addSymbolToField(field) {
    const fieldContent = field.textContent;
    if (fieldContent === 'X' || fieldContent === 'O') {
        alert('This field can not be used');
        //return stopt de code
        return;
    }
    //wisselt tussen de spelers
    const current = players[currentPlayerIndex];
    field.textContent = current.symbol
    currentPlayerIndex++;
    if (currentPlayerIndex > 1) {
        currentPlayerIndex = 0
    }
}
//chekwijnlijn linkt alle winlijns met elkaar en checkt of er een x of een o op een van de winlijn plekken staat
function checkWinner() {
    const winlijn1 = [0, 1, 2]
    const winlijn2 = [3, 4, 5]
    const winlijn3 = [6, 7, 8]
    const winlijn4 = [0, 4, 8]
    const winlijn5 = [2, 4, 6]
    const winlijn6 = [0, 3, 6]
    const winlijn7 = [1, 4, 7]
    const winlijn8 = [2, 5, 8]



    checkWinlijn(winlijn1);
    checkWinlijn(winlijn2);
    checkWinlijn(winlijn3);
    checkWinlijn(winlijn4);
    checkWinlijn(winlijn5);
    checkWinlijn(winlijn6);
    checkWinlijn(winlijn7);
    checkWinlijn(winlijn8);


    /**
     * Assignment
     * Add an algorithm to check if someone has three in a row
     * Try to use Internet - if not found the teacher will give you one
     * Also make sure you check for a draw (gelijkspel)
     * Again what more needs to be done, make a short todolist
     */
}

function checkWinlijn(winlijn) {
    let xcounter = 0;
    let ocounter = 0;

    for (let index = 0; index < 3; index++) {
        const fieldIndex = winlijn[index];
        const field = fields[fieldIndex];
        console.log(field);
        console.log(field.textContent);

        if (field.textContent === "X") {
            xcounter += 1;
        }
        if (xcounter === 3) {
            alert("Wouter is de winnaar");
        }

        if (field.textContent === "O") {
            ocounter += 1;
        }
        if (ocounter === 3) {
            alert("Hans is de winnaar");
        }
       
    }   

}

function resetGame() {

    if (cli) {
        
    }
    /**
     * Assignment
     * Make sure this works (all fields empty, reset data if needed)
     */
}

console.log('File loaded');