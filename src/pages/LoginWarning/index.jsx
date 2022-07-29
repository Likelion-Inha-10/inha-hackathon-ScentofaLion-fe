import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { animate } from 'components/Animation/animate';
import Header from 'components/Header';
import LoginWarningImg from '../../images/LoginWarning/LoginWarning.png';
import NavigationBar from 'components/NavigationBar';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';

const ImgWrapper = styled.div`
  width: 100vw;
  height: 420px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  padding-left: 30px;
  width: 280px;
  height: 374px;
`;

const Text = styled.div`
  width: 100vw;
  font-size: 15px;

  text-align: center;
  word-break: keep-all;
  line-height: 19px;
  color: black;
`;

const Ignore = styled.div`
  width: 100vw;
  font-size: 12px;
  font-weight: 300;
  text-align: center;
  word-break: keep-all;
  color: black;
`;

const Login = styled.div`
  width: 80%;
  font-size: 17px;
  font-weight: 900;
  text-align: center;
  border: none;
  color: black;
  flex-direction: column;
`;

const Bottom = styled.div`
  width: 100vw;
  height: 430px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginWarning = () => {
  let navigate = useNavigate();

  function moveToLoginPage() {
    navigate('/home/log-in');
  }

  function moveToTestPage() {
    navigate('/home/0/scent-test');
  }

  return (
    <motion.div
      initial={animate.initial}
      animate={animate.animate}
      exit={animate.exit}
    >
      <Header title="Per/scent" />
      <ImgWrapper>
        <Img src={LoginWarningImg}></Img>
      </ImgWrapper>
      <Text>
        로그인 후 진행해야 <br /> 테스트 결과를 저장할 수 있어요
      </Text>
      <Bottom>
        <Button
          marginTop="10"
          marginBottom="15"
          width="80"
          height="10"
          shadow="0 0 0 0.2px black"
          focusBackgroundColor="white"
        >
          <Login onClick={moveToLoginPage}>로그인</Login>
        </Button>

        <Ignore onClick={moveToTestPage}>무시하기</Ignore>
      </Bottom>
      <NavigationBar color="" userid="0" />
    </motion.div>
  );
};

export default LoginWarning;
