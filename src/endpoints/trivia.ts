import { generateQueryParams } from '@/helpers/endpoints';
import { ISearchParams } from '@/interfaces/general';

const API_BASE = 'https://opentdb.com';

export const GetCategory = `${API_BASE}/api_category.php`;

export const GetQuestions = (params: ISearchParams) =>
  `${API_BASE}/api.php${generateQueryParams(params)}`;
