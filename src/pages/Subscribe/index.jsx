import React from 'react';
import Header from 'components/Header';
import NavigationBar from 'components/NavigationBar';
import SubscribeForms from 'components/SubscribeForms';

const Subscribe = () => {
  return (
    <div>
      <Header title="Subscribe" />
      <SubscribeForms />
      <NavigationBar />
    </div>
  );
};

export default Subscribe;
