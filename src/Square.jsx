import React from 'react';
import { useDispatch } from 'react-redux';
import { playMove } from './features/game/actions';

function Square({ value, index }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(playMove(index));
  };

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

export default Square;