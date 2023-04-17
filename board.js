class Board {
  constructor() {
    this.chessboard = [...new Array(8)].map(() => [...new Array(8)].map(() => false));
  }

  makeMove([row, col]) {
    if (row > 7 || row < 0 || col > 7 || col < 0) {
      return;
    }

    this.chessboard[7 - row][col] = true;
  }

  isAvailable([row, col]) {
    if (row > 7 || row < 0 || col > 7 || col < 0) return false;
    return !this.chessboard[7 - row][col];
  }

  toString() {
    let string = '';
    for (let i = 0; i < 8; i += 1) {
      for (let j = 0; j < 8; j += 1) {
        string += ` ${this.chessboard[i][j] ? 'T' : 'F'} `;
      }
      string += '\n';
    }
    return string;
  }
}

export default Board;
