var store = require('./store');
var gridView = require('./grid-view');

TicTacToe.prototype.eventListeners = function() {
  store.subscribe(this.render.bind(this));
};

TicTacToe.prototype.render = function(prevState, state) {
  // You can even check whether new state is different
  if (prevState.grid !== state.grid) {
    this.gridView.render('grid', state.grid);
  }
};
