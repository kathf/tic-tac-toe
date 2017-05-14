export default class PageControls {
  constructor () {
    var squares = document.getElementsByTagName('td')
    addEvents(squares)
  }

  onClick ({ target }) {
    // listeners on each square
    //  - UI change to show X or O
    //  - check if player won
    //   - render winner
    //  - check if stalemate
    //   - render game over
  }

  addEvents (squares) {
    squares.forEach(
      sq => sq.addEventListener('click', this.onClick.bind(this))
    )
  }
}
