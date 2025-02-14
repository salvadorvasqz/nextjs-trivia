import { ISelectOption } from '@/interfaces/general';

export interface InputSelectType {
  label: string;
  options: ISelectOption[];
  value: string | undefined;
  handleOnChange(value: string | undefined): void;
}
