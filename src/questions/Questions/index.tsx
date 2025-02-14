'use client';

import React, { useState, useEffect, useCallback } from 'react';

import { INormalizedQuestion } from '@/interfaces/trivia';
import {
  getCurrentQuestion,
  getQuestions,
  getScore,
  saveCurrentQuestion,
  saveQuestions,
  saveScore,
} from '@/helpers/localStorage';
import { QuestionControls } from '../components/QuestionControls';
import { INormalizedAnswer } from '../../interfaces/trivia';

interface Props {
  newQuestions: INormalizedQuestion[];
}

export const Questions = ({ newQuestions }: Props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState<INormalizedQuestion[]>([]);
  const [score, setScore] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const _questions = getQuestions();
    if (_questions.length > 0) {
      setQuestions(_questions);
      setCurrentQuestion(getCurrentQuestion());
      setScore(getScore());
    } else {
      setQuestions(newQuestions);
      saveQuestions(newQuestions);
    }
    setDataLoaded(true);
  }, [newQuestions]);

  const handleAnswerQuestion = useCallback(
    (answer: INormalizedAnswer) => {
      setCurrentQuestion(currentQuestion + 1);
      saveCurrentQuestion(currentQuestion + 1);
      if (answer.isCorrect) {
        setScore(score + 1);
        saveScore(score + 1);
      }
    },
    [score, currentQuestion]
  );

  return (
    <QuestionControls
      {...{
        questions,
        score,
        dataLoaded,
        currentQuestion,
        handleAnswerQuestion,
      }}
    />
  );
};
