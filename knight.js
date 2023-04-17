import Board from './board.js';

class Knight {
  constructor() {
    this.board = new Board();
  }

  getMoves([row, col]) {
    const moves = [];
    Knight.deltas.forEach((delta) => {
      const newPosition = [row + delta[0], col + delta[1]];
      if (this.board.isAvailable(newPosition)) {
        moves.push(newPosition);
      }
    });
    return moves;
  }

  makeMove(move) {
    this.board.makeMove(move);
  }

  getBoard() {
    return this.board.toString();
  }

  static deltas = [
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
    [2, 1],
  ];
}

export default Knight;
