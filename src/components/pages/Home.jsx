import React from 'react';
import '../../styles/pages/home.css';

import { Title } from '../atoms/Text';
import RegisterContainer from '../containers/RegisterContainer';

const Home = () => {
  return (
    <div>
      <div className="Home-Title">
        <Title content="Chat group" />
      </div>
      <RegisterContainer />
    </div>
  );
};

export default Home;
