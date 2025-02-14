import React from 'react';

import { GameOverType } from '@/questions/components/GameOver/Types';
import { LinkButton } from '@/components';

export const GameOver = ({ score, totalQuestion }: GameOverType) => {
  return (
    <>
      <div className="flex flex-col gap-1 items-center mt-2 mb-6">
        <span className="text-2xl font-bold">Game Over</span>
        <span className="text-xl">{`Your score: ${score} out of ${totalQuestion}`}</span>
      </div>

      <LinkButton {...{ path: '/', label: 'Play Again' }} />
    </>
  );
};
