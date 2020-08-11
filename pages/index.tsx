import React from 'react';
import { useWindowSize } from '../hooks/useWindowSize';

import { ColExtra, ColMain, ColSidebar, Layout } from '../components';

import { DESKTOP_SIZE, TABLET_SIZE } from '../constants';

function HomePage() {
  const size = useWindowSize();

  return (
    <Layout>
      <ColSidebar flat={size.width < DESKTOP_SIZE} />
      <ColMain>{JSON.stringify(size)}</ColMain>
      {size.width > TABLET_SIZE && <ColExtra>extra</ColExtra>}
    </Layout>
  );
}

export default HomePage;
