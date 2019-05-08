const deck = []
const suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs']
const cardNumb = [
  'Ace',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'Jack',
  'Queen',
  'King'
]

const main = () => {
  let deck = []
  for (let a = 0; a < suits.length; a++) {
    for (let b = 0; b < cardNumb.length; b++) {
      deck.push(cardNumb[b] + ' ' + 'of' + ' ' + suits[a])
    }
  }
}

const shuffle = () => {}

/*
for (let i = 0; cardNumb.length; i++) {
  const cardValue = document.createElement('p')
  cardValue.textContent = cardNumb[i]
  document.querySelector('.number').appendChild(cardValue)
}
*/

/*
for (let i = 0; suits.length; i++) {
  const suitValue = document.createElement('p')
  suitValue.textContent = suits[i]
  document.querySelector('.suit').appendChild(suitValue)
}
*/

document.addEventListener('DOMContentLoaded', main)
