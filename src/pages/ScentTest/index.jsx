// import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { animate } from 'components/Animation/animate';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import Header from 'components/Header';
import TestForms from 'components/TestForms';
import ProgressBar from 'components/ProgressBar';
import NavigationBar from 'components/NavigationBar';
import { decrement, increment } from '../../redux/actions';
import { connect } from 'react-redux';

const Wrapper = styled.div`
  width: 100vw;
  position: fixed;
  bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BarBox = styled.div`
  width: 90%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const BarButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
`;

const mapStateToProps = (state) => {
  return {
    value: state.counter.step,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
  };
};

const ScentTest = (state) => {
  return (
    <motion.div
      initial={animate.initial}
      animate={animate.animate}
      exit={animate.exit}
    >
      <Header title="Per/scent" />
      <TestForms step={state.value} />
      <Wrapper>
        <BarBox>
          <BarButton onClick={state.onDecrement}>
            <MdArrowBack size="28px" />
          </BarButton>
          <ProgressBar width={(state.value / 7) * 100} />
          <BarButton onClick={state.onIncrement}>
            <MdArrowForward size="28px" />
          </BarButton>
        </BarBox>
      </Wrapper>
      <NavigationBar />
    </motion.div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ScentTest);
