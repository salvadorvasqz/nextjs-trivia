'use client';

import { ChangeEvent } from 'react';

import { InputSelectType } from './Types';

export const InputSelect = ({
  label,
  options,
  value,
  handleOnChange,
}: InputSelectType) => {
  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const current = event.target.value;
    handleOnChange(current === 'clear' ? undefined : current);
  };
  return (
    <div className="flex flex-col gap-2">
      <span className="block text-md font-medium text-indigo-900 dark:text-white">
        {label}
      </span>
      <select
        value={value}
        onChange={onChange}
        className="bg-white border border-gray-300 text-indigo-900 text-sm rounded-lg  block w-full p-2.5"
      >
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};
