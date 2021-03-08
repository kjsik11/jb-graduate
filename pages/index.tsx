import React from 'react';
import styled from 'styled-components';

import { Head } from '@components/core';

const Root = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  height: 1000px;
`;

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>대충만든조</title>
      </Head>
      <Root>
        hihihihihi
        <div>hi</div>hi
      </Root>
    </>
  );
};

export default Home;
