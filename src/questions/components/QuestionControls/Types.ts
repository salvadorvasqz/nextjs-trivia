import { INormalizedAnswer, INormalizedQuestion } from '@/interfaces/trivia';

export interface QuestionControlsType {
  questions: INormalizedQuestion[];
  score: number;
  dataLoaded: boolean;
  currentQuestion: number;
  handleAnswerQuestion(answer: INormalizedAnswer): void;
}
