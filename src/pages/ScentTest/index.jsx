import React, { useState } from 'react';
import styled from 'styled-components';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import Header from 'components/Header';
import TestForms from 'components/TestForms';
import ProgressBar from 'components/ProgressBar';
import NavigationBar from 'components/NavigationBar';

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

const ScentTest = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const beforeStep = () => {
    setStep(step - 1);
  };

  return (
    <>
      <Header />
      <TestForms step={step} />
      <Wrapper>
        <BarBox>
          <BarButton onClick={beforeStep}>
            <MdArrowBack size="28px" />
          </BarButton>
          <ProgressBar width={(step / 7) * 100} />
          <BarButton onClick={nextStep}>
            <MdArrowForward size="28px" />
          </BarButton>
        </BarBox>
      </Wrapper>
      <NavigationBar />
    </>
  );
};

export default ScentTest;
