import React from 'react';

import { TextTitle } from '../components';

export default {
  title: 'Typography',
};

export const Title = () => (
  <div>
    <TextTitle bold>Hello World!</TextTitle>
    <TextTitle>Hello World!</TextTitle>
  </div>
);
