import { MARK_SQUARE, CHANGE_PLAYER } from '../actions'
// import actions from '../actions'


const initialState = {
  current_player: 1,
  squares: [nil, nil, nil, nil, nil, nil, nil, nil, nil]
}

function ticTacToe(state = initialState, action) {
  switch (action.type) {
    case MARK_SQUARE:
      return Object.assign({}, state, {
        // change the square position
      })
    case CHANGE_PLAYER:

    default:
      return state
  }
}
