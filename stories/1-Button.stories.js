import React from 'react';

import { Button, NavButton, Navigation, TitleBold } from '../components';
import { Home } from '../components/icons';

export default {
  title: 'Buttons',
};

export const Normal = () => <Button>Save</Button>;

export const Nav = () => (
  <NavButton>
    <Home />
    <TitleBold>Home</TitleBold>
  </NavButton>
);

export const Navigate = () => <Navigation selectedKey="home" />;
