const messageEl = document.querySelector("#message-el")
const sumEl = document.querySelector("#sum-el")
const cardsEl = document.querySelector("#cards-el")
let hasBlackJack = false
let isAlive = true
let message = ""

let firstCard = Math.floor(Math.random() * 12)
let secondCard = Math.floor(Math.random() * 12)
let sum = firstCard + secondCard

function startGame(){
  cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
  sumEl.textContent = "Sum: " + sum
  if (sum <= 20) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
  } else {
    message = "You're out of the game!"
    isAlive = false
  }
  messageEl.textContent = message;
};

function newCard() {
  console.log("Drawing new card");
  const card = 3
  sum += card
  startGame()
}
