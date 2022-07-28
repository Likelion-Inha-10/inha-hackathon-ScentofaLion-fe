import React from 'react';
import Header from 'components/Header';
import NavigationBar from 'components/NavigationBar';
import ProductStandard from 'components/subStandard/product/ProductStandard';

const SelectProductStandard = () => {
  return (
    <div>
      <Header title="Subscribe" />
      <ProductStandard />
      <NavigationBar />
    </div>
  );
};

export default SelectProductStandard;
