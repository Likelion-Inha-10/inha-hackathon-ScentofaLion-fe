import React from 'react';
import Header from 'components/Header';
import NavigationBar from 'components/NavigationBar';
import ProductStandard from 'components/subStandard/product/ProductStandard';

const SelectProduct = () => {
  return (
    <div>
      <Header title="Subscribe" />
      <ProductStandard />
      <NavigationBar />
    </div>
  );
};

export default SelectProduct;
