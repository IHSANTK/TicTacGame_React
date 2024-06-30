import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Square from './Square';
import { resetGame } from './features/game/actions';

function Board() {
  const squares = useSelector((state) => state.game.squares);
  const xIsNext = useSelector((state) => state.game.xIsNext);
  const winner = useSelector((state) => state.game.winner);
  const dispatch = useDispatch();

  const renderSquare = (i) => {
    return <Square value={squares[i]} index={i} key={i} />;
  };

  const status = winner
    ? 'Winner: ' + winner
    : 'Next player: ' + (xIsNext ? 'X' : 'O');

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button className="reset-button" onClick={() => dispatch(resetGame())}>
        Reset 
      </button>
    </div>
  );
}

export default Board;