'use client';

import React, { useMemo } from 'react';

import { QuestionControlsType } from '@/questions/components/QuestionControls/Types';

export const Question = ({
  questions,
  currentQuestion,
  handleAnswerQuestion,
}: QuestionControlsType) => {
  const question = useMemo(
    () => questions[currentQuestion],
    [currentQuestion, questions]
  );

  return (
    <>
      <span className="text-lg">{question.question}</span>
      <div className="flex flex-col gap-2">
        {question.answers.map((item) => (
          <button
            onClick={() => {
              handleAnswerQuestion(item);
            }}
            className="bg-indigo-900 text-white p-2 rounded-lg hover:bg-fuchsia-900 flex justify-center transition-all duration-200"
            key={item.answer}
          >
            {item.answer}
          </button>
        ))}
      </div>
      <span className="text-base">{`Question ${currentQuestion + 1} of ${
        questions.length
      }`}</span>
    </>
  );
};
