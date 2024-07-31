import React, { useState } from 'react';
import { Button } from '@mui/material';
import styles from './ConnectFour.module.css';

const WIDTH = 7;
const HEIGHT = 6;

const ConnectFour = () => {
  const [board, setBoard] = useState(Array.from({ length: HEIGHT }, () => Array(WIDTH).fill(null)));
  const [currPlayer, setCurrPlayer] = useState(1);
  const [winner, setWinner] = useState(null);

  const initializeBoard = () => {
    setBoard(Array.from({ length: HEIGHT }, () => Array(WIDTH).fill(null)));
    setCurrPlayer(1);
    setWinner(null);
  };

  const findEmptyCellInColumn = (columnIndex) => {
    for (let y = HEIGHT - 1; y >= 0; y--) {
      if (!board[y][columnIndex]) {
        return y;
      }
    }
    return null;
  };

  const placePieceInTable = (y, x) => {
    const newBoard = board.map(row => [...row]);
    newBoard[y][x] = currPlayer;
    setBoard(newBoard);
  };

  const checkForWin = () => {
    const directions = [
      [[0, 1], [0, 2], [0, 3]], // Horizontal right
      [[1, 0], [2, 0], [3, 0]], // Vertical down
      [[1, 1], [2, 2], [3, 3]], // Diagonal down-right
      [[1, -1], [2, -2], [3, -3]] // Diagonal down-left
    ];

    const isWinningCombination = (cells) => {
      return cells.every(([y, x]) =>
        y >= 0 &&
        y < HEIGHT &&
        x >= 0 &&
        x < WIDTH &&
        board[y][x] === currPlayer
      );
    };

    for (let y = 0; y < HEIGHT; y++) {
      for (let x = 0; x < WIDTH; x++) {
        if (directions.some(direction =>
          isWinningCombination([[y, x], ...direction.map(([dy, dx]) => [y + dy, x + dx])])
        )) {
          return true;
        }
      }
    }
    return false;
  };

  const handleColumnClick = (x) => {
    if (winner) return;

    const y = findEmptyCellInColumn(x);
    if (y === null) return;

    placePieceInTable(y, x);

    if (checkForWin()) {
      setWinner(`Player ${currPlayer} won!`);
    } else if (board.every(row => row.every(cell => cell !== null))) {
      setWinner('Tie game!');
    } else {
      setCurrPlayer(currPlayer === 1 ? 2 : 1);
    }
  };

  return (
    <div className={styles.ConnectFour}>
      
    
      <table className={styles.board}>
        <thead>
          <tr className={styles.columnTop}>
            {Array.from({ length: WIDTH }, (_, x) => (
              <th key={x} className={styles.cell} onClick={() => handleColumnClick(x)}></th>
            ))}
          </tr>
        </thead>
        <tbody>
          {board.map((row, y) => (
            <tr key={y}>
              {row.map((cell, x) => (
                <td key={`${y}-${x}`} className={styles.cell}>
                  {cell && <div className={`${styles.piece} ${styles[`player${cell}`]}`}></div>}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Button
        variant="contained"
        color="primary"
        onClick={initializeBoard}
        className={styles.restartButton}
      >
        Clear Board
      </Button>
    </div>
  );
};

export default ConnectFour;
