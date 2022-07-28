import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { animate } from 'components/Animation/animate';
import Header from 'components/Header';
import NavigationBar from 'components/NavigationBar';

const Box = styled.div`
  width: 85%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 25px;
  background-color: white;
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.1);
  font-size: 17px;
  font-weight: 600;
  font-family: 'Noto Sans KR', sans-serif;
  margin-top: 20px;
  margin-left: 30px;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const Review = () => {
  return (
    <motion.div
      initial={animate.initial}
      animate={animate.animate}
      exit={animate.exit}
    >
      <Header>Review</Header>
      <Box></Box>

      <NavigationBar></NavigationBar>
    </motion.div>
  );
};

export default Review;
