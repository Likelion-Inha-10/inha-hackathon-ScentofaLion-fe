import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { animate } from 'components/Animation/animate';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  z-index: 100;
  display: none;
  @media (min-width: 600px) {
    display: flex;
  }
  flex-direction: column;
  justify-content: center;
  text-align: center;
  vertical-align: middle;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const InfoTitle = styled.div`
  font-size: 40px;
  font-weight: 900;
  font-family: 'Frank Ruhl Libre', serif;
  text-align: center;
  color: white;
`;

const InfoTitleBorder = styled.div`
  font-size: 40px;
  font-weight: 900;
  font-family: 'Frank Ruhl Libre', serif;
  text-align: center;
  color: black;
  text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white,
    1px 1px 0 white;
`;

const InfoText = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 800;
  font-size: 20px;
  color: white;
  line-height: 1.4;
  margin-top: 30px;
`;

const InfoSubText = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 15px;
  color: white;
  line-height: 1.4;
  margin-top: 30px;
`;

const NotMobile = () => {
  return (
    <motion.div
      initial={animate.initial}
      animate={animate.animate}
      exit={animate.exit}
    >
      <Wrapper>
        <InfoWrapper>
          <InfoTitleBorder>Mood Palette</InfoTitleBorder>
          <InfoTitle>Mood Palette</InfoTitle>
          <InfoTitleBorder>Mood Palette</InfoTitleBorder>
          <InfoText>
            Mood Palette는 아직
            <br /> Desktop 환경을 지원하지 않습니다.
          </InfoText>
          <InfoSubText>
            모바일 환경에서 접속하거나
            <br /> 화면 사이즈를 줄여주세요.
          </InfoSubText>
        </InfoWrapper>
      </Wrapper>
    </motion.div>
  );
};

export default NotMobile;
