import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { motion } from 'framer-motion';
import { animate } from 'components/Animation/animate';
import Header from 'components/Header';
import NavigationBar from 'components/NavigationBar';
import Button from 'components/Button';
import Alert from '../../components/Alert';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100vw;
  height: 600px;
  padding-bottom: 238px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Qwrapper = styled.div`
  width: 100vw;
  height: 300px;
  position: fixed;
  padding-top: 530px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Box = styled.div`
  background-color: white;
  border-radius: 41px 0px 41px 41px;
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.1);
  width: 75%;
  height: 500px;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.div`
  width: 80%;
  padding-top: ${(props) => props.paddingTop || 70}px;
  padding-bottom: ${(props) => props.paddingBottom || 70}px;
  font-weight: 900;
  font-size: 20px;
  font-family: 'Frank Ruhl Libre', serif;
  text-align: center;
  line-height: 1.4;
  word-break: keep-all;
  color: black;
`;

const InputWrapper = styled.div`
  width: 90%;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Input = styled.input`
  width: 80%;
  font-size: 15px;
  text-align: left;
  border: none;
  color: black;
  font-family: 'Frank Ruhl Libre', serif;
  flex-direction: column;
  ::placeholder {
    color: black;
  }
  :focus {
    outline: none;
  }
`;

const ButtonWrapper = styled.div`
  width: 80%;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Underline = styled.hr`
  width: 80%;
  margin-top: 5px;
`;

const Login = () => {
  const [email, setUserName] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickSubmit = () => {
    if (!email || !password) {
      return Alert('모든 항목을 입력해주세요');
    } else {
      axios
        .post(`http://172.104.110.207:8000/account/login/`, { email, password })
        .then((response) => {
          console.log(response);
          navigate(`/home/${response.data.id}`);
          return Alert('로그인에 성공했습니다.');
        })
        .catch((error) => {
          console.log(error);
          return Alert('아이디 혹은 비밀번호가 올바르지 않습니다.');
        });
    }
  };

  function moveToSignUpPage() {
    navigate('/home/sign-up');
  }

  return (
    <motion.div
      initial={animate.initial}
      animate={animate.animate}
      exit={animate.exit}
    >
      <Header title="Mood Palette" />
      <Wrapper>
        <Box>
          <Text>Login</Text>
          <InputWrapper>
            <Input
              onChange={onChangeUserName}
              type="text"
              placeholder="EMAIL"
            />
            <Underline />
            <br />
            <br />
            <br />
            <br />
            <Input
              onChange={onChangePassword}
              type="password"
              placeholder="PASSWORD"
            />
            <Underline />
          </InputWrapper>
          <ButtonWrapper>
            <Button
              otherFont
              boxShadow="0 0 30px 1px rgba(0, 0, 0, 0.1)"
              width="38"
              height="14"
              paddingTop="3"
              paddingBottom="3"
              marginTop="104"
              marginBottom="72"
              marginRight="5"
              fontSize="17"
              backgroundColor="#EDEDED"
              onClick={moveToSignUpPage}
            >
              Sign up
            </Button>
            <Button
              otherFont
              shadow
              width="38"
              height="14"
              paddingTop="3"
              paddingBottom="3"
              marginTop="104"
              marginBottom="72"
              marginRight="5"
              fontSize="17"
              backgroundColor="#EDEDED"
              onClick={onClickSubmit}
            >
              Login
            </Button>
          </ButtonWrapper>
        </Box>
      </Wrapper>
      <Qwrapper>
        <Text>
          My sent <br /> ?
        </Text>
      </Qwrapper>
      <NavigationBar color="" userid="0" />
    </motion.div>
  );
};

export default Login;
