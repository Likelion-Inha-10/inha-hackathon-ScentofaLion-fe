import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { animate } from 'components/Animation/animate';
import Header from 'components/Header';
import NavigationBar from 'components/NavigationBar';
import SubscribeForms from 'components/SubscribeForms';
import { useParams } from 'react-router-dom';

const Subscribe = () => {
  const { userid } = useParams();
  const [userColor, setUserColor] = useState();

  useEffect(() => {
    axios
      .get(`https://moodpalette.b-cdn.net/account/${userid}/`)
      .then((response) => {
        console.log(response);
        setUserColor(response.data.user_color);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <motion.div
      initial={animate.initial}
      animate={animate.animate}
      exit={animate.exit}
    >
      <Header title="Subscribe" />
      <SubscribeForms />
      <NavigationBar userid={userid} color={userColor} bgColor={'#FFFAF5'} />
    </motion.div>
  );
};

export default Subscribe;
