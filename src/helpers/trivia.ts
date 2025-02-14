import { decodeString } from '@/helpers/general';
import {
  INormalizedQuestion,
  IQuestion,
  INormalizedAnswer,
} from '@/interfaces/trivia';

const shuffleAnswers = (arr: INormalizedAnswer[]) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export const normalizeQuestions = (
  data?: IQuestion[]
): INormalizedQuestion[] => {
  const questions: INormalizedQuestion[] = [];

  if (data) {
    data.forEach((item) => {
      const answers: INormalizedAnswer[] = item.incorrect_answers.map(
        (_answer) => ({
          isCorrect: false,
          answer: decodeString(_answer),
        })
      );
      answers.push({
        isCorrect: true,
        answer: decodeString(item.correct_answer),
      });
      questions.push({
        question: decodeString(item.question),
        category: decodeString(item.category),
        difficulty: item.difficulty,
        answers: shuffleAnswers(answers),
      });
    });
  }

  return questions;
};
