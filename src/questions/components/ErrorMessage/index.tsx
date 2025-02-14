import React from 'react';

import { LinkButton } from '@/components';

export const ErrorMessage = () => {
  return (
    <>
      <span className="text-base">
        There was an error trying to load the questions, please try a different
        configuration
      </span>
      <LinkButton {...{ path: '/', label: 'Back To Home' }} />
    </>
  );
};
