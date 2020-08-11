import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import {
  Button,
  NavButton,
  Navigation,
  Stack,
  TextTitle,
  ThemeButton,
} from '../components';
import { Home } from '../components/icons';

export default {
  title: 'Buttons',
  decorators: [withKnobs],
};

export const Normal = () => <Button>Save</Button>;

export const Nav = () => (
  <NavButton>
    <Home />
    <TextTitle>Home</TextTitle>
  </NavButton>
);

export const Navigate = () => {
  const flat = boolean('Flat', false);

  return <Navigation selectedKey="home" flat={flat} />;
};

export const Theme = () => (
  <Stack column>
    <ThemeButton>Tweet</ThemeButton>
    <ThemeButton full>Tweet Full</ThemeButton>
    <ThemeButton full big>
      Tweet Big
    </ThemeButton>
  </Stack>
);
