# Update, 24/02/2022

## This is a simple game of Blackjack. A player gets to submit a wager before every round and that bank value is subtracted by the wager value after every round. The dealer will begin with a card face-down at the start var hidden. At the end of the round the values of player and dealer cards are calculated and compared. There is no split, surrender or pairs/triples/5cardsunder21 conditions for this version of the game

## The rules are simple, the dealer will draw as many cards at the start of each round till the dealer's value is at least 17

## The player is free to hit as many cards as possible as long as the player does not exceed 21.

# Note that the bank and wager carry over has not been fully implemented yet

# Challenges:

# The biggest challenge was to calulcate the dynamic value of the Ace, being 1 or 11

# This was solved with the following functions:

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

# Firstly, the getValue() function removes any number from the array an checks if they are J,Q,K or A.

# J,Q,K have a constant value of 10, while an ace with 2 cards dealt usually reverts to 11

# function maxHit() also calculate the value of the hand and dynamic value of the ace by:

# in the hand, an ace must be present (>0 is at leasr 1) and the value must be over 11

# Since ace not becomes one, the playerSum can subtract 10 such that the value is now a +1 instead of +11
