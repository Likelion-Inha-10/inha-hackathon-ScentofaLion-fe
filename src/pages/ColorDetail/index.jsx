import React from 'react';
import { motion } from 'framer-motion';
import { animate } from 'components/Animation/animate';
import HeaderSticky from 'components/HeaderSticky';
import ColorDetailForms from 'components/ColorDetailForms';

const ColorDetail = () => {
  return (
    <motion.div
      initial={animate.initial}
      animate={animate.animate}
      exit={animate.exit}
    >
      <HeaderSticky title="Mood Palette" />
      <ColorDetailForms />
    </motion.div>
  );
};

export default ColorDetail;
