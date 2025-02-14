import { z } from 'zod';

export interface IGetCategory {
  trivia_categories: ITriviaCategory[];
}

export interface ITriviaCategory {
  id: number;
  name: string;
}

export interface IGetQuestions {
  response_code: number;
  results: IQuestion[];
}

export type QuestionType = 'boolean' | 'multiple';

export interface IQuestion {
  type: QuestionType;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export const NormalizedAnswerSchema = z.object({
  isCorrect: z.boolean(),
  answer: z.string(),
});

export const NormalizedQuestionSchema = z.object({
  difficulty: z.string(),
  category: z.string(),
  question: z.string(),
  answers: z.array(NormalizedAnswerSchema),
});

export type INormalizedQuestion = z.infer<typeof NormalizedQuestionSchema>;

export type INormalizedAnswer = z.infer<typeof NormalizedAnswerSchema>;
