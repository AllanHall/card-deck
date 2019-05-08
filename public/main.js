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
  for (let i = 0; i < suits.length; i++) {
    for (let b = 0; b < cardNumb.length; b++) {
      deck.push(cardNumb[b] + ' ' + 'of' + ' ' + suits[i])
    }
  }
/*  for (let c = 0; c < deck.length; c++) {
    const cardValue = document.createElement('p')
    cardValue.textContent = deck[c]
    document.querySelector('.card').appendChild(cardValue)
  }
}
*/

const shuffle = () => {}


document.addEventListener('DOMContentLoaded', main)
