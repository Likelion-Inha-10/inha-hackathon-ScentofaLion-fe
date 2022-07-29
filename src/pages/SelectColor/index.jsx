import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { animate } from 'components/Animation/animate';
import Header from 'components/Header';
import NavigationBar from 'components/NavigationBar';
import ColorStandard from 'components/subStandard/color/ColorStandard';
import { useParams } from 'react-router-dom';

const SelectColor = () => {
  const { userid } = useParams();
  const [userColor, setUserColor] = useState();

  useEffect(() => {
    axios
      .get(`/account/${userid}/`)
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
      {' '}
      <Header title="Subscribe" />
      <ColorStandard />
      <NavigationBar userid={userid} color={userColor} />
    </motion.div>
  );
};

export default SelectColor;
