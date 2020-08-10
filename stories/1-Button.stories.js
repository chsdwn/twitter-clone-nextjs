import React from 'react';

import { Button, NavButton, Navigation } from '../components';

export default {
  title: 'Buttons',
};

export const Normal = () => <Button>Save</Button>;

export const Nav = () => <NavButton>Nav</NavButton>;

export const Navigate = () => <Navigation />;
