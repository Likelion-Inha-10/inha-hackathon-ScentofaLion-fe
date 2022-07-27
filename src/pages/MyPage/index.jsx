import React from 'react';
import { motion } from 'framer-motion';
import { animate } from 'components/Animation/animate';
import HeaderSticky from 'components/HeaderSticky';

const MyPage = () => {
  return (
    <motion.div
      initial={animate.initial}
      animate={animate.animate}
      exit={animate.exit}
    >
      <HeaderSticky title="My Page" />
    </motion.div>
  );
};

export default MyPage;
