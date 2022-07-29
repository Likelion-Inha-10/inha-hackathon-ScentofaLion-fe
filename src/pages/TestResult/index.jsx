import React, { useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { animate } from 'components/Animation/animate';
import HeaderSticky from 'components/HeaderSticky';
import TestResultForms from 'components/TestResultForms';

const TestResult = () => {
  const { color } = useParams();
  const { userid } = useParams();

  useEffect(() => {
    console.log(color);
    axios
      .patch(`https://moodpalette.b-cdn.net/account/${userid}/`, {
        user_color: color,
      })
      .then((response) => {
        console.log(response);
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
      <HeaderSticky title="Per/scent" />
      <TestResultForms />
    </motion.div>
  );
};

export default TestResult;
