import React from 'react';
import Link from 'next/link';

interface Props {
  label: string;
  path: string;
}

export const LinkButton = ({ label, path }: Props) => {
  return (
    <Link
      href={path}
      className="bg-indigo-900 text-white p-2 rounded-lg hover:bg-fuchsia-900 flex justify-center transition-all duration-200"
    >
      {label}
    </Link>
  );
};
