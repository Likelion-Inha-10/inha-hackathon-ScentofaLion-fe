import React from 'react';
import Header from 'components/Header';
import Profile from './InnerComponents/Profile';
import SubscribeInfo from './InnerComponents/SubscribeInfo';
import ProductInfo from './InnerComponents/ProductInfo';
import PurchaseInfo from './InnerComponents/PurchaseInfo';
import TestInfo from './InnerComponents/TestInfo';

const MyPageForms = () => {
  return (
    <>
      <Header title="My Page" />
      <Profile />
      <SubscribeInfo />
      <ProductInfo />
      <PurchaseInfo />
      <TestInfo />
    </>
  );
};

export default MyPageForms;
