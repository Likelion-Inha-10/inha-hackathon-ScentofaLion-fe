import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from 'components/Header';
import Profile from './InnerComponents/Profile';
import SubscribeInfo from './InnerComponents/SubscribeInfo';
import ProductInfo from './InnerComponents/ProductInfo';
import PurchaseInfo from './InnerComponents/PurchaseInfo';
import TestInfo from './InnerComponents/TestInfo';
import { useParams } from 'react-router-dom';

const MyPageForms = () => {
  const { userid } = useParams();
  const [userColor, setUserColor] = useState();
  const [nickname, setNickname] = useState();
  const [subscribePrice, setSubsscibePrice] = useState();
  const [subscribeDate, setSubscribeDate] = useState();

  useEffect(() => {
    axios
      .get(`http://172.104.110.207:8000/account/${userid}/`)
      .then((response) => {
        console.log(response);
        setUserColor(response.data.user_color);
        setNickname(response.data.nickname);
        setSubsscibePrice(response.data.price);
        setSubscribeDate(response.data.sub_date);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Header title="My Page" />
      <Profile color={userColor} nickname={nickname} />
      <SubscribeInfo
        userid={userid}
        subPrice={subscribePrice}
        subDate={subscribeDate}
      />
      <ProductInfo color={userColor} subPrice={subscribePrice} />
      <PurchaseInfo />
      <TestInfo userid={userid} color={userColor} />
    </>
  );
};

export default MyPageForms;
