'use client';

import { useState, useMemo, useEffect } from 'react';

import { TriviaSetupType } from './Types';
import { numbersOfQuestion, difficulty, questionType } from './config';
import { InputSelect } from '@/components/InputSelect';
import { ISearchParams } from '@/interfaces/general';
import { generateQueryParams } from '@/helpers/endpoints';
import {
  saveCurrentQuestion,
  saveQuestions,
  saveScore,
} from '@/helpers/localStorage';
import { LinkButton } from '@/components';

export const TriviaSetup = ({ category }: TriviaSetupType) => {
  const [searchParams, setSearchParams] = useState<ISearchParams>({
    amount: '10',
  });

  const handleNumberOfQuestion = (value: string | undefined) => {
    setSearchParams((s) => ({ ...s, amount: value }));
  };

  const handleCategory = (value: string | undefined) => {
    setSearchParams((s) => ({ ...s, category: value }));
  };

  const handleDifficulty = (value: string | undefined) => {
    setSearchParams((s) => ({ ...s, difficulty: value }));
  };

  const handleType = (value: string | undefined) => {
    setSearchParams((s) => ({ ...s, type: value }));
  };

  const gameParams = useMemo(
    () => generateQueryParams(searchParams),
    [searchParams]
  );

  useEffect(() => {
    saveCurrentQuestion(0);
    saveQuestions([]);
    saveScore(0);
  }, []);

  return (
    <>
      <InputSelect
        {...{
          label: 'Number of Question',
          options: numbersOfQuestion,
          handleOnChange: handleNumberOfQuestion,
          value: searchParams.amount,
        }}
      />
      <InputSelect
        {...{
          label: 'Category',
          options: category,
          handleOnChange: handleCategory,
          value: searchParams.category,
        }}
      />
      <InputSelect
        {...{
          label: 'Difficulty',
          options: difficulty,
          handleOnChange: handleDifficulty,
          value: searchParams.difficulty,
        }}
      />
      <InputSelect
        {...{
          label: 'Type',
          options: questionType,
          handleOnChange: handleType,
          value: searchParams.type,
        }}
      />
      <LinkButton {...{ path: `/game${gameParams}`, label: 'Start Game' }} />
    </>
  );
};
