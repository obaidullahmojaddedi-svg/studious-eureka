
let firstCard = 11
let secondCard = 10
let card = [firstCard, secondCard]
let sum = firstCard + secondCard
let blackjack = false
let isAlive = true
let message = ""
let messageEL = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
function startgame(){
        card.El = text.Content = "carrd :"
    for (let i = 0; card.lenght; i++ ){
        cardEl.contentText = card[i] + " "
    }
            sumEl.textContent = "Sum: " + sum
if (sum < 21) {
  message = "Do want to draw a new card?"
}else if (sum === 21) {
    message = "wohooo! you've got blackjack!"
    blackjack = true
 } 
 else if (sum > 21){
     message = "you're out of game !"
     isAlive = false
}
messageEL.textContent = message
// console.log(isAlive)
// console.log(message)
}

function newcard(){
    console.log("Drawing a new card from the deck!")
    let card = 5
    sum += card
    startgame()
}
