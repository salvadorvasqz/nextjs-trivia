import React from 'react';

import { QuestionControlsType } from './Types';
import { ErrorMessage } from '@/questions/components/ErrorMessage';
import { Question } from '@/questions/components/Question';
import { GameOver } from '@/questions/components/GameOver';

export const QuestionControls = ({
  questions,
  score,
  dataLoaded,
  currentQuestion,
  handleAnswerQuestion,
}: QuestionControlsType) => {
  return (
    <div className="flex flex-col gap-4">
      {dataLoaded &&
        questions.length > 0 &&
        currentQuestion < questions.length && (
          <Question
            {...{
              questions,
              score,
              dataLoaded,
              currentQuestion,
              handleAnswerQuestion,
            }}
          />
        )}
      {dataLoaded &&
        questions.length > 0 &&
        currentQuestion === questions.length && (
          <GameOver {...{ score, totalQuestion: questions.length }} />
        )}
      {dataLoaded && questions.length === 0 && <ErrorMessage />}
    </div>
  );
};
