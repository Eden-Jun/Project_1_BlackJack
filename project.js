const cards =[
  { card: 'Ace of Diamonds', value: 'Ace', valueNumeric: 1, cardNo: 1 },
//   { card: '2 of Diamonds', value: 2, valueNumeric: 2, cardNo: 2 },
//   { card: '3 of Diamonds', value: 3, valueNumeric: 3, cardNo: 3 },
//   { card: '4 of Diamonds', value: 4, valueNumeric: 4, cardNo: 4 },
//   { card: '5 of Diamonds', value: 5, valueNumeric: 5, cardNo: 5 },
//   { card: '6 of Diamonds', value: 6, valueNumeric: 6, cardNo: 6 },
//   { card: '7 of Diamonds', value: 7, valueNumeric: 7, cardNo: 7 },
//   { card: '8 of Diamonds', value: 8, valueNumeric: 8, cardNo: 8 },
//   { card: '9 of Diamonds', value: 9, valueNumeric: 9, cardNo: 9 },
  { card: '10 of Diamonds', value: 10, valueNumeric: 10, cardNo: 10 },
  { card: 'J of Diamonds', value: 10, valueNumeric: 10, cardNo: 11 },
  { card: 'Q of Diamonds', value: 10, valueNumeric: 10, cardNo: 12 },
  { card: 'K of Diamonds', value: 10, valueNumeric: 10, cardNo: 13 },
  { card: 'Ace of Clubs', value: 'Ace', valueNumeric: 1, cardNo: 14 },
//   { card: '2 of Clubs', value: 2, valueNumeric: 2, cardNo: 15 },
//   { card: '3 of Clubs', value: 3, valueNumeric: 3, cardNo: 16 },
//   { card: '4 of Clubs', value: 4, valueNumeric: 4, cardNo: 17 },
//   { card: '5 of Clubs', value: 5, valueNumeric: 5, cardNo: 18 },
//   { card: '6 of Clubs', value: 6, valueNumeric: 6, cardNo: 19 },
//   { card: '7 of Clubs', value: 7, valueNumeric: 7, cardNo: 20 },
//   { card: '8 of Clubs', value: 8, valueNumeric: 8, cardNo: 21 },
//   { card: '9 of Clubs', value: 9, valueNumeric: 9, cardNo: 22 },
//   { card: '10 of Clubs', value: 10, valueNumeric: 10, cardNo: 23 },
//   { card: 'J of Clubs', value: 10, valueNumeric: 10, cardNo: 24 },
//   { card: 'Q of Clubs', value: 10, valueNumeric: 10, cardNo: 25 },
//   { card: 'K of Clubs', value: 10 , valueNumeric: 10, cardNo: 26 },
//   { card: 'Ace of Hearts', value: 'Ace', valueNumeric: 1, cardNo: 27 },
//   { card: '2 of Hearts', value: 2, valueNumeric: 2, cardNo: 28 },
//   { card: '3 of Hearts', value: 3, valueNumeric: 3, cardNo: 29 },
//   { card: '4 of Hearts', value: 4, valueNumeric: 4, cardNo: 30 },
//   { card: '5 of Hearts', value: 5, valueNumeric: 5, cardNo: 31 },
//   { card: '6 of Hearts', value: 6, valueNumeric: 6, cardNo: 32 },
//   { card: '7 of Hearts', value: 7, valueNumeric: 7, cardNo: 33 },
//   { card: '8 of Hearts', value: 8, valueNumeric: 8, cardNo: 34 },
//   { card: '9 of Hearts', value: 9, valueNumeric: 9, cardNo: 35 },
  { card: '10 of Hearts', value: 10, valueNumeric: 10, cardNo: 36 },
  { card: 'J of Hearts', value: 10, valueNumeric: 10, cardNo: 37 },
  { card: 'Q of Hearts', value: 10, valueNumeric: 10, cardNo: 38 },
  { card: 'K of Hearts', value: 10 , valueNumeric: 10, cardNo: 39 },
  { card: 'Ace of Spades', value: 'Ace', valueNumeric: 1, cardNo: 40 },
//   { card: '2 of Spades', value: 2, valueNumeric: 2, cardNo: 41 },
//   { card: '3 of Spades', value: 3, valueNumeric: 3, cardNo: 42 },
//   { card: '4 of Spades', value: 4, valueNumeric: 4, cardNo: 43 },
//   { card: '5 of Spades', value: 5, valueNumeric: 5, cardNo: 44 },
//   { card: '6 of Spades', value: 6, valueNumeric: 6, cardNo: 45 },
//   { card: '7 of Spades', value: 7, valueNumeric: 7, cardNo: 46 },
//   { card: '8 of Spades', value: 8, valueNumeric: 8, cardNo: 47 },
//   { card: '9 of Spades', value: 9, valueNumeric: 9, cardNo: 48 },
//   { card: '10 of Spades', value: 10, valueNumeric: 10, cardNo: 49 },
//   { card: 'J of Spades', value: 10, valueNumeric: 10, cardNo: 50 },
//   { card: 'Q of Spades', value: 10, valueNumeric: 10, cardNo: 51 },
//   { card: 'K of Spades', value: 10, valueNumeric: 10, cardNo: 52 }
]



let playerHand = [];
let dealerHand = [];
let shuffleDeck = [];
let playerSum = [];
let dealerSum = [];
let drawnCard = []

function shuffleCards(){
    shuffleDeck = cards.sort(()=>Math.random()-0.5);
    console.log(shuffleDeck)
}
shuffleCards();

function dealCards(){
    playerHand = shuffleDeck.splice(0,1).concat(shuffleDeck.splice(1,1))
    console.log(playerHand);
    dealerHand = shuffleDeck.splice(0,1).concat(shuffleDeck.splice(0,1))
    console.log(dealerHand)
}
dealCards();

function sumOfHandWithoutAce(array){
    let sum = 0 
    for (let i = 0; i < array.length; i++) {
        sum += array[i].value;
        return sum
        
    }
}
playerSum = sumOfHandWithoutAce(playerHand);
dealerSum = sumOfHandWithoutAce(dealerHand);

function checkBlackJack(array){
    if(array[0].value === 10 && array[1].value === "Ace" || array[0].value === "Ace" && array[1].value===10){
        return true
    }}

function checkWin(){
if(checkBlackJack(playerHand) && checkBlackJack(dealerHand)){
    console.log("Draw")
     
}
else if(checkBlackJack(dealerHand)){
    console.log("Dealer wins by BlackJack")
}
else if(checkBlackJack(playerHand)){
    console.log("Player wins by BlackJack")
}
else{
    checkWinWithoutAce()
    
}

function checkWinWithoutAce(){
    if(playerSum > dealerSum){
        console.log("Player Wins")
    }
    else if(playerSum === dealerSum){
        console.log("Draw")
    }
    else{
        console.log("Dealer Wins")
    }
}
}

function hit(){
    let drawnCard = shuffleDeck.splice(0,1)
    playerHand = playerHand.concat(...drawnCard)
    console.log(playerHand)

    if(playerSum>30){
    console.log("Dealer wins")
}
else{}
}
hit

