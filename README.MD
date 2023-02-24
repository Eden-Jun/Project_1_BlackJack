Update, 24/02/2022
//This is a simple game of Blackjack. A player gets to submit a wager before every round and that bank value is subtracted
// by the wager value after every round. The dealer will begin with a card face-down at the start var hidden.
//At the end of the round the values of player and dealer cards are calculated and compared.
//There is no split, surrender or pairs/triples/5cardsunder21 conditions for this version of the game

let dealerSum = 0;
let playerSum = 0 ;

let dealerAce = 0;
let playerAce = 0;

let hidden;
let deck;

let canHit = true; //allows player to "hit" if playerSum < 21

let wager = 0; // initialize the wager to 0
let bank = 200
window.onload= function createGame(){
buildDeck();
shuffleDeck();
startGame();
}
//this function builds a deck by iterating through each array and joining them together to form a set of cards
// for ex: A-H,2-C. This dash is important so that later, we can seperate the string out to only look
// at each card[0], which is either a numerical figure or alphabet
function buildDeck(){
let values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
let suits = ["H","C","D","S"];
deck = []

    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(values[j]+ "-" + suits[i]);
        }
    }

}

function shuffleDeck(){
deck.sort(()=>Math.random()-0.5)
console.log(deck)
}
//this sort allows us to truly randomize the array of cards. As Math.random() will produce a random number
//between 0-1, the -0.5 will give a result in the range of -0.5 to +0.5

function startGame(){
// get the selected wager value from the HTML
document.getElementById("submit-wager").addEventListener("click", function() {
wager = parseInt(document.getElementById("wager").value);
// disable the wager input field and button
document.getElementById("bank-value").innerHTML = bank-wager
document.getElementById("wager").disabled = true;
document.getElementById("submit-wager").disabled = true;
// start the game
startRound();
});
}

function startRound(){
hidden = deck.pop(); //let the hidden card take on the first element of the shuffled deck
dealerSum += getValue(hidden);
dealerAce += checkAce(hidden);

    while(dealerSum<17){ //If dealer has less than 17, draw an additional card. since 1 card has a max of 11, at least 2 drawn
        let cardImg = document.createElement("img");
        let card = deck.pop()
        cardImg.src = "./cards/" + card + ".png"
        dealerSum += getValue(card);
        dealerAce += checkAce(card);
        document.getElementById("dealer-cards").append(cardImg);
        console.log(card)
    }
    console.log(dealerSum)

    for (let k = 0; k < 2; k++) { //start by giving the player 2 cards, so i<2
        let cardImg = document.createElement("img");
        let card = deck.pop()
        cardImg.src = "./cards/" + card + ".png" //draw from the img folder
        playerSum += getValue(card);
        playerAce += checkAce(card);
        document.getElementById("player-cards").append(cardImg);
        console.log(card)

    }
    console.log(playerSum)
    document.getElementById("hit").addEventListener("click", hit);
    document.getElementById("stay").addEventListener("click", stay)

    function hit(){
        if (!canHit){ //if hit is false(initialized to be true), return
            return
        }
        let cardImg = document.createElement("img");
        let card = deck.pop()
        cardImg.src = "./cards/" + card + ".png"
        playerSum += getValue(card);
        playerAce += checkAce(card);
        document.getElementById("player-cards").append(cardImg); //else, pop the first card from the deck

        if(maxHit(playerSum, playerAce) >21){
            canHit = false;
        }

    }

}

function stay() {
dealerSum = maxHit(dealerSum, dealerAce); //this function gives the value of hand
playerSum = maxHit(playerSum, playerAce);

canHit = false;
document.getElementById("hidden").src = "./cards/" + hidden + ".png";
let message = "";

if (playerSum > 21) {
message = "You Lose";
bank -=wager
} else if (dealerSum > 21) {
message = "You Win";
bank += wager;
} else if (playerSum > dealerSum) {
message = "You Win";
bank += wager;
} else if (playerSum < dealerSum) {
message = "You Lose";
bank -= wager;
} else {
message = "Draw";
}
document.getElementById("result").innerText = message;
document.getElementById("player-sum").innerText = playerSum;
document.getElementById("dealer-sum").innerText = dealerSum;
document.getElementById("player-value").innerText = "You now have:" + bank;
document.getElementById("bank-value").innerHTML = bank

}

function getValue(card){
let numericalValue = card.split("-");
let actualValue = numericalValue[0];

    if(isNaN(actualValue)){  //If not a number so = A,J,Q,K
        if(actualValue==="A"){ //Is an Ace
            return 11
        }
        return 10 //J,Q,K is 10
    }
    return parseInt(actualValue);

}

function checkAce(card){
if(card[0] === "A"){
return 1
}
return 0
}

function maxHit(playerSum, playerAce){ //since ace can either be 1 or 11, subtracting 10 will allow the sum to revert
while(playerSum>21 && playerAce>0){ // back to +1 (11-10)
playerSum -= 10
playerAce -= 1 //minus the ace count so as to not repeat the function infinitely
}
return playerSum
}
