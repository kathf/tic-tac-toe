import { createStore } from 'redux'
import ticTacToe from './reducers'

let store = createStore(ticTacToe)
const pageControls = new PageControls()
const ticTacToeGame = new TicTacToeGame(store)


function printState() {
  var state = store.getState();
  console.log(state);
}

store.subscribe(printState);
