import React from 'react';

import { Layout, Tweet } from '../components';

function HomePage() {
  return (
    <Layout>
      <Tweet
        text={`Aliquam volutpat libero nisi, id convallis augue vehicula vel.
Sed elementum, turpis vel consectetur dictum, eros magna vestibulum orci, lobortis sagittis mauris tortor quis augue. `}
        name="Hulusi"
        slug="chsdwn"
        datetime={new Date('2020-08-13')}
      />
      <Tweet
        text={`Lorem ipsum dolor sit amet, 
                     consectetur adipiscing elit. Phasellus
        fringilla molestie venenatis.`}
        name="Hulusi"
        slug="chsdwn"
        datetime={new Date('2020-08-10')}
      />
    </Layout>
  );
}

export default HomePage;
