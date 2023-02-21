let dealerSum = 0;
let playerSum = 0 ;

let dealerAce = 0;
let playerAce = 0;

let hidden;
let deck;




let canHit = true; 
window.onload= function createGame(){ //this will initilize the game the moment the window opens
    buildDeck(); //build a deck
    shuffleDeck(); //shuffle the cards around
    startGame(); //begin the game
}

function buildDeck(){
    let values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    let suits = ["H","C","D","S"];
    deck = []



    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(values[j]+ "-" + suits[i]);
            
        }//create deck by first, looping through each suit, then each value. Afterwards, you join the 
        // two arrays created into one with a seperate dash. The dash will help you seperate the suit and values out
        // while corresponding with the card imgs
        
    }
}

function shuffleDeck(){
    deck.sort(()=>Math.random()-0.5)
    console.log(deck)
}
//This compares the eleent to the number of random(-.5 to +0.5) 

function startGame(){
    hidden = deck.pop(); //create the first card for the dealer
    dealerSum += getValue(hidden); //this is the valuu
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

        if(maxHit(playerSum, playerAce) >=21){
            canHit = false;
        }

    }
    
}

function stay(){
    dealerSum = maxHit(dealerSum,dealerAce); //You call this function to show that the maximum number of hits has occured,
    playerSum = maxHit(playerSum,playerAce); //Therefore, since the return of playerSum is calculated in the maxHit()

    canHit = false;                          //Revert canHit to false to that the function cannot be called 
    document.getElementById("hidden").src = "./cards/" + hidden + ".png";
    let message = "";
   
    if(playerSum>21){
        message = "You Lose";
    }
    else if(dealerSum>21){
        message = "You Win";
    }
    else if(playerSum>dealerSum){
        message = "You Win";
    }
    else if(playerSum<dealerSum){
        message = "You Lose";
    }
document.getElementById("result").innerText = message;
document.getElementById("player-sum").innerText = playerSum;
document.getElementById("dealer-sum").innerText = dealerSum;


}

//Add your functions to calculate the values of the hand 

function getValue(card){
    let numericalValue = card.split("-");
    let actualValue = numericalValue[0];

    if(isNaN(actualValue)){
        if(actualValue==="A"){
            return 11 //If it's an ace, the return is 11 FOR NOW
        }
        return 10 //otherwise, it is a K,J,Q and only has a value of 10
    }
    return parseInt(actualValue);
}
function checkAce(card){
    if(card[0] === "Ace"){
        return 1
    }
    return 0
}

function maxHit(playerSum, playerAce){
    if(playerSum>21 && playerAce>0){
        playerSum -= 10 
        playerAce -= 1 
    }
    return playerSum
}



