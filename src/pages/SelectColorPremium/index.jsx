import React from 'react';
import Header from 'components/Header';
import NavigationBar from 'components/NavigationBar';
import ColorPremium from 'components/SubPremium/color/ColorPremium';
const SelectColorPremium = () => {
  return (
    <div>
      <Header title="Subscribe" />
      <ColorPremium />
      <NavigationBar />
    </div>
  );
};

export default SelectColorPremium;
