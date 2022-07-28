import React from 'react';
import Header from 'components/Header';
import NavigationBar from 'components/NavigationBar';
import ColorBasic from 'components/SubBasic';

const SelectColorBasic = () => {
  return (
    <div>
      <Header title="Subscribe" />
      <ColorBasic />
      <NavigationBar />
    </div>
  );
};

export default SelectColorBasic;
