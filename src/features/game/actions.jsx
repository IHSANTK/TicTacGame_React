import { createAction } from '@reduxjs/toolkit';

export const playMove = createAction('game/playMove', (index) => {
  return {
    payload: {
      index,
    },
  };
});

export const resetGame = createAction('game/resetGame');