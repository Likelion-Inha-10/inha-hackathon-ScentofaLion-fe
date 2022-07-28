import React from 'react';
import Header from 'components/Header';
import NavigationBar from 'components/NavigationBar';
import ColorStandard from 'components/subStandard/color/ColorStandard';

const SelectColorStandard = () => {
  return (
    <div>
      {' '}
      <Header title="Subscribe" />
      <ColorStandard />
      <NavigationBar />
    </div>
  );
};

export default SelectColorStandard;
