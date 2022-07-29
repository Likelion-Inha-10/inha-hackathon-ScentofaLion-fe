import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from 'components/Header';
import NavigationBar from 'components/NavigationBar';
import SubscribeForms from 'components/SubscribeForms';
import { useParams } from 'react-router-dom';

const Subscribe = () => {
  const { userid } = useParams();
  const [userColor, setUserColor] = useState();

  useEffect(() => {
    axios
      .get(`http://172.104.110.207:8000/account/${userid}/`)
      .then((response) => {
        console.log(response);
        setUserColor(response.data.user_color);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Header title="Subscribe" />
      <SubscribeForms />
      <NavigationBar userid={userid} color={userColor} bgColor={'#FFFAF5'} />
    </div>
  );
};

export default Subscribe;
