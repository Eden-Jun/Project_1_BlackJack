let dealerSum = 0;
let playerSum = 0 ;
console.log("BRUH")

let dealerAce = 0;
let playerAce = 0;


let deck;

let canHit = true; //allows player to "hit" if playerSum < 21

let wager = 0; // initialize the wager to 0
let bank = 100
let hidden;

window.onload= function createGame(){
    buildDeck();
    shuffleDeck();
    startGame();
}

function buildDeck(){
    let values = ["A","9","10","J","Q","K"];
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

function startGame(){
    // get the selected wager value from the HTML
    document.getElementById("submit-wager").addEventListener("click", function() {
        wager = parseInt(document.getElementById("wager").value);
        // disable the wager input field and button
        console.log(bank-wager)
        document.getElementById("bank-value").innerHTML = bank-wager
        document.getElementById("wager").disabled = true;
        document.getElementById("submit-wager").disabled = true;
        // start the game
        startRound();
    });
}

function startRound(){
    hidden = deck.pop();
    dealerSum += getValue(hidden);
    dealerAce += checkAce(hidden);
  
    while(dealerSum<17){
        let cardImg = document.createElement("img");
        let card = deck.pop()
        cardImg.src = "./cards/" + card + ".png"
        dealerSum += getValue(card);
        dealerAce += checkAce(card);
        document.getElementById("dealer-cards").append(cardImg);
    }
    console.log(dealerSum)

    for (let k = 0; k < 2; k++) {
        let cardImg = document.createElement("img");
        let card = deck.pop()
        cardImg.src = "./cards/" + card + ".png"
        playerSum += getValue(card);
        playerAce += checkAce(card);
        document.getElementById("player-cards").append(cardImg);
        
    }
    console.log(playerSum)
    document.getElementById("hit").addEventListener("click", hit);
    document.getElementById("stay").addEventListener("click", stay)

    function hit(){
        if (!canHit){
            return
        }
        let cardImg = document.createElement("img");
        let card = deck.pop()
        cardImg.src = "./cards/" + card + ".png"
        playerSum += getValue(card);
        playerAce += checkAce(card);
        document.getElementById("player-cards").append(cardImg);

        if(maxHit(playerSum, playerAce) >21){
            canHit = false;
        }

    }
    
}

function stay() {
  dealerSum = maxHit(dealerSum, dealerAce);
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

// if (bank > 0) {
//   // Reset dealer and player sum and ace count
  
  
//   document.getElementById("dealer-cards").innerHTML = "";
//   document.getElementById("player-cards").innerHTML = "";
  
//   deck.push(hidden);
//   for (let i = 0; i < document.getElementById("dealer-cards").childElementCount; i++) {
//     let cardSrc = document.getElementById("dealer-cards").children[i].src.split("/");
//     let card = cardSrc[cardSrc.length - 1].slice(0, -4);
//     deck.push(card);
//   }
//   for (let i = 0; i < document.getElementById("player-cards").childElementCount; i++) {
//     let cardSrc = document.getElementById("player-cards").children[i].src.split("/");
//     let card = cardSrc[cardSrc.length - 1].slice(0, -4);
//     deck.push(card);
// }


//   document.getElementById("wager").disabled = false;
//   document.getElementById("submit-wager").disabled = false;
//   dealerSum = 0;
//   playerSum = 0;
//   dealerAce = 0;
//   playerAce = 0;
// } else {
//   document.getElementById("result").innerText = "Bro please, stop.";
// }

}


function getValue(card){
    let numericalValue = card.split("-");
    let actualValue = numericalValue[0];

    if(isNaN(actualValue)){
        if(actualValue==="A"){
            return 11
        }
        return 10
    }
    return parseInt(actualValue);
}

function checkAce(card){
    if(card[0] === "A"){
        return 1
    }
    return 0
}

function maxHit(playerSum, playerAce){
    while(playerSum>21 && playerAce>0){
        playerSum -= 10
        playerAce -= 1
    }
    return playerSum
}



