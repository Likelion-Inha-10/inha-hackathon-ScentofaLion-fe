import React from 'react';
import { motion } from 'framer-motion';
import { animate } from 'components/Animation/animate';
import HeaderSticky from 'components/HeaderSticky';
import TestResultForms from 'components/TestResultForms';

const TestResult = () => {
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
