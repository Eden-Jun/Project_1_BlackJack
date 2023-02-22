let dealerSum = 0;
let playerSum = 0 ;

let dealerAce = 0;
let playerAce = 0;

let hidden;
let deck;

let canHit = true; //allows player to "hit" if playerSum < 21

let wager = 0; // initialize the wager to 0
window.onload= function(){
    buildDeck();
    shuffleDeck();
    startGame();
}

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

function startGame(){
    // get the selected wager value from the HTML
    document.getElementById("submit-wager").addEventListener("click", function() {
        wager = parseInt(document.getElementById("wager").value);
        console.log("Wager:", wager);
        // disable the wager input field and button
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
    wager -= wager;
  } else if (dealerSum > 21) {
    message = "You Win";
    wager += wager;
  } else if (playerSum > dealerSum) {
    message = "You Win";
    wager += wager;
  } else if (playerSum < dealerSum) {
    message = "You Lose";
    wager -= wager;
  } else {
    message = "Draw";
  }
  document.getElementById("result").innerText = message;
  document.getElementById("player-sum").innerText = playerSum;
  document.getElementById("dealer-sum").innerText = dealerSum;
  document.getElementById("player-value").innerText = "You now have:" + wager;
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



