import { TriviaSetup } from '@/components';
import { GetCategory } from '@/endpoints/trivia';
import { apiGet } from '@/helpers/apiFetch';
import { ISelectOption } from '@/interfaces/general';
import { IGetCategory } from '@/interfaces/trivia';

export default async function Home() {
  const { response } = await apiGet<IGetCategory>({ endpoint: GetCategory });

  const category: ISelectOption[] = response
    ? [{ value: 'clear', label: 'Any Category' }].concat(
        response.trivia_categories.map((item) => ({
          value: item.id + '',
          label: item.name,
        }))
      )
    : [];

  return <TriviaSetup {...{ category }} />;
}
