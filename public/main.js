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
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < cardNumb.length; j++) {
      deck.push(cardNumb[j] + ' ' + 'of' + ' ' + suits[i])
    }
  }
  shuffle()
}

const drawCard = () => {
  document.querySelector('.card-display').textContent = deck[0]
  deck.shift()
}

const shuffle = () => {
  let a
  let b
  let c = deck.length
  while (c) {
    a = Math.floor(Math.random() * c--)
    b = deck[c]
    deck[c] = deck[a]
    deck[a] = b
  }
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.button').addEventListener('click', drawCard)
