import Knight from './knight.js';
import Queue from './queue.js';

function knightMoves(startPos, endPos) {
  const knight = new Knight();
  const queue = new Queue();
  let result = [];

  queue.enqueue([startPos]);

  while (!queue.isEmpty()) {
    const moveChain = queue.dequeue();
    const currentMove = moveChain[moveChain.length - 1];

    if (currentMove[0] === endPos[0] && currentMove[1] === endPos[1]) {
      result = moveChain;
      break;
    }

    knight.makeMove(currentMove);
    knight.getMoves(currentMove).forEach((nextMove) => {
      queue.enqueue([...moveChain, nextMove]);
    });
  }

  console.log(`You made it in ${result.length - 1} moves! Here's your path:`);
  result.forEach((move) => {
    console.log(move);
  });
}

knightMoves([0, 0], [1, 2]); // == [[0,0],[1,2]]
knightMoves([0, 0], [3, 3]); // == [[0,0],[1,2],[3,3]]
knightMoves([3, 3], [0, 0]); // == [[3,3],[1,2],[0,0]]
knightMoves([3, 3], [4, 3]); // == [[3,3],[4,5],[2,4],[4,3]]
