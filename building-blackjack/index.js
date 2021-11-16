let player = {
  name: "poppy",
  chips: 200
}

const messageEl = document.querySelector("#message-el")
const sumEl = document.querySelector("#sum-el")
const cardsEl = document.querySelector("#cards-el")
const playerEl = document.querySelector("#player-el")
let hasBlackJack = false
let isAlive = false
let message = ""
let cards = []
let sum = 0

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
  const randomNumber = Math.floor(Math.random() * 13) + 1
  if (randomNumber > 10){
    return 1
  } else if (randomNumber === 1){
    return 11
  } else {
    return randomNumber
  }
}

function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()

  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}

function renderGame(){
  cardsEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }

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
  if (isAlive === true && hasBlackJack === false) {
    const card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
  }
}
