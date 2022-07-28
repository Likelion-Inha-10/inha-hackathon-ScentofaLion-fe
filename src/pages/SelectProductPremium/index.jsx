import React from 'react';
import Header from 'components/Header';
import NavigationBar from 'components/NavigationBar';
import ProductPremium from 'components/SubPremium/product/ProductPremium';
const SelectProductPremium = () => {
  return (
    <div>
      <Header title="Subscribe" />
      <ProductPremium />
      <NavigationBar />
    </div>
  );
};

export default SelectProductPremium;
