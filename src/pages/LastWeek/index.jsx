import React from 'react';
import { motion } from 'framer-motion';
import { animate } from 'components/Animation/animate';
import SimpleSlider from 'components/LastProductCarousel';
import NavigationBar from 'components/NavigationBar';

const LastWeek = () => {
  return (
    <motion.div
      initial={animate.initial}
      animate={animate.animate}
      exit={animate.exit}
    >
      <SimpleSlider />
      <NavigationBar />
    </motion.div>
  );
};

export default LastWeek;
