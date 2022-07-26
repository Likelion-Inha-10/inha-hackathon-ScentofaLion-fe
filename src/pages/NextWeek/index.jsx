import React from 'react';
import { motion } from 'framer-motion';
import { animate } from 'components/Animation/animate';
import NavigationBar from 'components/NavigationBar';
import SimpleSlider from 'components/NextProductCarousel';

const index = () => {
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

export default index;
