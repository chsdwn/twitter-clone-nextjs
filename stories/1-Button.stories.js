import React from 'react';

import { Button } from '../components/Button';

export default {
  title: 'Button',
  component: Button,
};

export const Emoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
