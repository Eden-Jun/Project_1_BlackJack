const cards =[
  { card: 'Ace of Diamonds', value: 'Ace', valueNumeric: 1, cardNo: 1 },
  { card: '2 of Diamonds', value: '2', valueNumeric: 2, cardNo: 2 },
  { card: '3 of Diamonds', value: '3', valueNumeric: 3, cardNo: 3 },
  { card: '4 of Diamonds', value: '4', valueNumeric: 4, cardNo: 4 },
  { card: '5 of Diamonds', value: '5', valueNumeric: 5, cardNo: 5 },
  { card: '6 of Diamonds', value: '6', valueNumeric: 6, cardNo: 6 },
  { card: '7 of Diamonds', value: '7', valueNumeric: 7, cardNo: 7 },
  { card: '8 of Diamonds', value: '8', valueNumeric: 8, cardNo: 8 },
  { card: '9 of Diamonds', value: '9', valueNumeric: 9, cardNo: 9 },
  { card: '10 of Diamonds', value: '10', valueNumeric: 10, cardNo: 10 },
  { card: 'J of Diamonds', value: 'J', valueNumeric: 10, cardNo: 11 },
  { card: 'Q of Diamonds', value: 'Q', valueNumeric: 10, cardNo: 12 },
  { card: 'K of Diamonds', value: 'K', valueNumeric: 10, cardNo: 13 },
  { card: 'Ace of Clubs', value: 'Ace', valueNumeric: 1, cardNo: 14 },
  { card: '2 of Clubs', value: '2', valueNumeric: 2, cardNo: 15 },
  { card: '3 of Clubs', value: '3', valueNumeric: 3, cardNo: 16 },
  { card: '4 of Clubs', value: '4', valueNumeric: 4, cardNo: 17 },
  { card: '5 of Clubs', value: '5', valueNumeric: 5, cardNo: 18 },
  { card: '6 of Clubs', value: '6', valueNumeric: 6, cardNo: 19 },
  { card: '7 of Clubs', value: '7', valueNumeric: 7, cardNo: 20 },
  { card: '8 of Clubs', value: '8', valueNumeric: 8, cardNo: 21 },
  { card: '9 of Clubs', value: '9', valueNumeric: 9, cardNo: 22 },
  { card: '10 of Clubs', value: '10', valueNumeric: 10, cardNo: 23 },
  { card: 'J of Clubs', value: 'J', valueNumeric: 10, cardNo: 24 },
  { card: 'Q of Clubs', value: 'Q', valueNumeric: 10, cardNo: 25 },
  { card: 'K of Clubs', value: 'K', valueNumeric: 10, cardNo: 26 },
  { card: 'Ace of Hearts', value: 'Ace', valueNumeric: 1, cardNo: 27 },
  { card: '2 of Hearts', value: '2', valueNumeric: 2, cardNo: 28 },
  { card: '3 of Hearts', value: '3', valueNumeric: 3, cardNo: 29 },
  { card: '4 of Hearts', value: '4', valueNumeric: 4, cardNo: 30 },
  { card: '5 of Hearts', value: '5', valueNumeric: 5, cardNo: 31 },
  { card: '6 of Hearts', value: '6', valueNumeric: 6, cardNo: 32 },
  { card: '7 of Hearts', value: '7', valueNumeric: 7, cardNo: 33 },
  { card: '8 of Hearts', value: '8', valueNumeric: 8, cardNo: 34 },
  { card: '9 of Hearts', value: '9', valueNumeric: 9, cardNo: 35 },
  { card: '10 of Hearts', value: '10', valueNumeric: 10, cardNo: 36 },
  { card: 'J of Hearts', value: 'J', valueNumeric: 10, cardNo: 37 },
  { card: 'Q of Hearts', value: 'Q', valueNumeric: 10, cardNo: 38 },
  { card: 'K of Hearts', value: 'K', valueNumeric: 10, cardNo: 39 },
  { card: 'Ace of Spades', value: 'Ace', valueNumeric: 1, cardNo: 40 },
  { card: '2 of Spades', value: '2', valueNumeric: 2, cardNo: 41 },
  { card: '3 of Spades', value: '3', valueNumeric: 3, cardNo: 42 },
  { card: '4 of Spades', value: '4', valueNumeric: 4, cardNo: 43 },
  { card: '5 of Spades', value: '5', valueNumeric: 5, cardNo: 44 },
  { card: '6 of Spades', value: '6', valueNumeric: 6, cardNo: 45 },
  { card: '7 of Spades', value: '7', valueNumeric: 7, cardNo: 46 },
  { card: '8 of Spades', value: '8', valueNumeric: 8, cardNo: 47 },
  { card: '9 of Spades', value: '9', valueNumeric: 9, cardNo: 48 },
  { card: '10 of Spades', value: '10', valueNumeric: 10, cardNo: 49 },
  { card: 'J of Spades', value: 'J', valueNumeric: 10, cardNo: 50 },
  { card: 'Q of Spades', value: 'Q', valueNumeric: 10, cardNo: 51 },
  { card: 'K of Spades', value: 'K', valueNumeric: 10, cardNo: 52 }
]
//ripped from playing cards library 
let playerHand = [];
let dealerHand = [];
let shuffleCards = [];
let playerDisplay = document.getElementById("Player");
let player1Value = document.createElement("p");
let dealerDisplay = document.getElementById("Dealer");
let dealer1Value = document.createElement("p")


let playGameButton = document.querySelector("button");
let winnerDisplay = document.querySelector("h3")


function main(){

function shuffleDeck(){
    shuffleCards = cards.sort(() => Math.random() -0.5);
}
shuffleDeck()


function dealCards(){
    playerHand = shuffleCards.splice(0,1).concat(shuffleCards.splice(1,1));
    dealerHand= shuffleCards.splice(0,1).concat(shuffleCards.splice(0,1));
    console.log(playerHand);
    console.log(dealerHand); 
}
dealCards();

function getValue(){
playerValue = playerHand[0].valueNumeric + playerHand[1].valueNumeric ;
dealerValue = dealerHand[0].valueNumeric + dealerHand[1].valueNumeric ;
console.log(playerValue);
console.log(dealerValue);
}
getValue()





function checkWin(){
    if(playerValue > dealerValue){
        console.log("Player Wins");
        winnerDisplay.innerHTML = "Player Wins"
    }
    else if(playerValue === dealerValue) {
        console.log("Draw!");
        winnerDisplay.innerHTML = "Draw!"
    }
    else{console.log("Dealer Wins");
        winnerDisplay.innerHTML = "Dealer Wins!";
    }


}

checkWin();



function showValues(){
    player1Value.innerHTML = playerValue
    playerDisplay.appendChild(player1Value); 
    dealer1Value.innerHTML = dealerValue;
    dealerDisplay.appendChild(dealer1Value);
}
showValues();
}




playGameButton.addEventListener("click",main)