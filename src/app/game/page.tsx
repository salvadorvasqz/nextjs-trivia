import { Metadata } from 'next';

import { GetQuestions } from '@/endpoints/trivia';
import { apiGet } from '@/helpers/apiFetch';
import { normalizeQuestions } from '@/helpers/trivia';
import { ISearchParams } from '@/interfaces/general';
import { IGetQuestions } from '@/interfaces/trivia';
import { Questions } from '@/questions';

export const metadata: Metadata = {
  title: 'Challenge',
  description: 'Trivia Challenge',
};

interface Props {
  readonly searchParams: Promise<ISearchParams>;
}

export default async function GamePage({ searchParams }: Props) {
  const params = await searchParams;

  const { response } = await apiGet<IGetQuestions>({
    endpoint: GetQuestions(params),
  });

  const newQuestions = normalizeQuestions(response?.results);

  return <Questions {...{ newQuestions }} />;
}
