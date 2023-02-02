let firstCard = 13
let secondCard = 18
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true

if (sum <= 20){
    console.log("Another Card?")
     
}else if(sum === 21){
    console.log("You win")
    hasBlackjack = true
}else {
    console.log("You lose")
    isAlive = false
}

console.log(isAlive)