let firstCard = 13
let secondCard = 18
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = " "

function startGame(){
    if (sum <= 20){
        message = "Another Card?"
         
    }else if(sum === 21){
        message = "You win"
        hasBlackjack = true
    }else {
        message = "You lose"
        isAlive = false
    }
    console.log(message)
}


