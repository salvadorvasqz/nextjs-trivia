import {
  INormalizedQuestion,
  NormalizedQuestionSchema,
} from '@/interfaces/trivia';

export const STORAGE_KEYS = {
  questions: 'questions',
  score: 'score',
  currentQuestion: 'currentQuestion',
};

export const saveQuestions = (questions: INormalizedQuestion[]) => {
  localStorage.setItem(STORAGE_KEYS.questions, JSON.stringify(questions));
};

export const getQuestions = (): INormalizedQuestion[] => {
  let questions: INormalizedQuestion[] = [];
  const _questions = localStorage.getItem(STORAGE_KEYS.questions);
  if (_questions) {
    const parsedQuestions = JSON.parse(_questions);
    const parseResult =
      NormalizedQuestionSchema.array().safeParse(parsedQuestions);
    if (parseResult.success) questions = parseResult.data;
  }

  return questions;
};

export const saveCurrentQuestion = (value: number) => {
  localStorage.setItem(STORAGE_KEYS.currentQuestion, value + '');
};

export const getCurrentQuestion = (): number => {
  const _currentQuestion = parseInt(
    localStorage.getItem(STORAGE_KEYS.currentQuestion) ?? '0'
  );
  return !isNaN(_currentQuestion) ? _currentQuestion : 0;
};

export const saveScore = (value: number) => {
  localStorage.setItem(STORAGE_KEYS.score, value + '');
};

export const getScore = (): number => {
  const _score = parseInt(localStorage.getItem(STORAGE_KEYS.score) ?? '0');
  return !isNaN(_score) ? _score : 0;
};
