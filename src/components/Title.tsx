import React from 'react';

import { TitleProps } from '../types/types';

const Title: React.FC<TitleProps> = ({ page, todo }) => {
  return <h1>{page === 'main' ? 'Wow how many cases there 👀' : `Look! It is 1`}</h1>;
};

export default Title;
