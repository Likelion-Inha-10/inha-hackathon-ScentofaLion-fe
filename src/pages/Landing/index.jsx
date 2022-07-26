import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { animate } from 'components/Animation/animate';
import SimpleSlider from 'components/LandingCarousel';
import Button from 'components/Button';

const Wrapper = styled.div`
  width: 100vw;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: content-box;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const Landing = () => {
  let navigate = useNavigate();

  const moveToLoginPage = () => {
    navigate('/home/log-in');
  };

  const moveToSignUpPage = () => {
    navigate('/home/sign-up');
  };

  return (
    <motion.div
      initial={animate.initial}
      animate={animate.animate}
      exit={animate.exit}
    >
      <Wrapper>
        <SimpleSlider />
        <ButtonContainer>
          <Button
            blackButton
            shadow
            width="45"
            paddingTop="10"
            paddingBottom="10"
            marginTop="40"
            fontSize="17"
            onClick={moveToSignUpPage}
          >
            Sign up
          </Button>
          <Button
            blackButton
            shadow
            width="45"
            paddingTop="10"
            paddingBottom="10"
            marginTop="40"
            fontSize="17"
            onClick={moveToLoginPage}
          >
            Login
          </Button>
        </ButtonContainer>
      </Wrapper>
    </motion.div>
  );
};

export default Landing;
