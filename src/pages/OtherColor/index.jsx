import React from 'react';
import { motion } from 'framer-motion';
import { animate } from 'components/Animation/animate';
import Header from 'components/Header';
import NavigationBar from 'components/NavigationBar';
import OtherColorForms from 'components/OtherColorForms';
import { useParams } from 'react-router-dom';

const OtherColor = () => {
  const { userid } = useParams();
  const { color } = useParams();

  return (
    <motion.div
      initial={animate.initial}
      animate={animate.animate}
      exit={animate.exit}
    >
      <Header title="Mood Palette" />
      <OtherColorForms />
      <NavigationBar userid={userid} color={color} />
    </motion.div>
  );
};

export default OtherColor;
