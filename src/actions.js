// action types

export const MARK_SQUARE = 'MARK_SQUARE'
export const CHANGE_PLAYER = 'CHANGE_PLAYER'


// action creators

export function markSquare(player, position) {
  return { type: MARK_SQUARE, player, position }
}

export function changePlayer() {
  return { type: CHANGE_PLAYER }
}
