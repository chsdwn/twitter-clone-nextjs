import React from 'react';

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
};

export const Normal = () => <Button>Save</Button>;

export const Nav = () => (
  <NavButton>
    <Home />
    <TextTitle>Home</TextTitle>
  </NavButton>
);

export const Navigate = () => <Navigation selectedKey="home" />;

export const Theme = () => (
  <Stack column>
    <ThemeButton>Tweet</ThemeButton>
    <ThemeButton full>Tweet Full</ThemeButton>
    <ThemeButton full big>
      Tweet Big
    </ThemeButton>
  </Stack>
);
