import { ISelectOption } from '@/interfaces/general';

export const numbersOfQuestion: ISelectOption[] = [
  {
    value: '5',
    label: '5',
  },
  {
    value: '10',
    label: '10',
  },
  {
    value: '15',
    label: '15',
  },
  {
    value: '20',
    label: '20',
  },
  {
    value: '25',
    label: '25',
  },
  {
    value: '30',
    label: '30',
  },
];

export const difficulty: ISelectOption[] = [
  {
    value: 'clear',
    label: 'Any Difficulty',
  },
  {
    value: 'easy',
    label: 'Easy',
  },
  {
    value: 'medium',
    label: 'Medium',
  },
  {
    value: 'hard',
    label: 'Hard',
  },
];

export const questionType: ISelectOption[] = [
  {
    value: 'clear',
    label: 'Any Type',
  },
  {
    value: 'multiple',
    label: 'Multiple Choice',
  },
  {
    value: 'boolean',
    label: 'True / False',
  },
];
