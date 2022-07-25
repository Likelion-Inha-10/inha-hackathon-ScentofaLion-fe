import React from 'react';
import { motion } from 'framer-motion';
import { animate } from 'components/Animation/animate';
import Header from 'components/Header';
import NavigationBar from 'components/NavigationBar';
import OtherColorForms from 'components/OtherColorForms';

const OtherColor = () => {
  return (
    <motion.div
      initial={animate.initial}
      animate={animate.animate}
      exit={animate.exit}
    >
      <Header title="Mood Palette" />
      <OtherColorForms />
      <NavigationBar />
    </motion.div>
  );
};

export default OtherColor;
