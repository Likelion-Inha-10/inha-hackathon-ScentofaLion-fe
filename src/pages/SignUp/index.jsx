import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { animate } from 'components/Animation/animate';
import Header from 'components/Header';
import NavigationBar from 'components/NavigationBar';
import Button from 'components/Button';
import Alert from '../../components/Alert';

const Wrapper = styled.div`
  width: 100vw;
  height: 600px;
  padding-bottom: 238px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 80%;
  font-size: 17px;
  text-align: left;
  border: none;
  color: black;
  flex-direction: column;

  :focus {
    outline: none;
  }
`;
const Next = styled.div`
  font-weight: bolder;
  color: white;
  text-align: center;
  font-size: 17px;
`;

const SignUp = () => {
  const [nickname, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [isEmail, setIsEmail] = useState(false);
  const [password1, setPassword] = useState('');
  const [password2, setPasswordCheck] = useState('');

  let navigate = useNavigate();

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  const onChangeEmail = (e) => {
    const emailRegex =
      //eslint-disable-next-line
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (!e.target.value || emailRegex.test(e.target.value)) setIsEmail(false);
    else setIsEmail(true);
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangePasswordCheck = (e) => {
    setPasswordCheck(e.target.value);
  };

  const onClickSubmit = () => {
    if (!nickname || !email || !password1 || !password2) {
      return Alert('모든 항목을 입력해주세요');
    } else if (isEmail) {
      return Alert('이메일 형식이 올바르지 않습니다');
    } else if (password1 !== password2) {
      return Alert('비밀번호가 동일하지 않습니다');
    } else {
      console.log({
        email,
        password1,
        password2,
        nickname,
      });
      axios
        .post(`/account/signup/`, {
          email,
          password1,
          password2,
          nickname,
        })
        .then((response) => {
          console.log(response);
          return Alert('회원가입이 완료되었습니다.');
        })
        .catch((error) => {
          console.log(error);
        });
      navigate('/home/log-in');
    }
  };

  return (
    <motion.div
      initial={animate.initial}
      animate={animate.animate}
      exit={animate.exit}
    >
      <div>
        <Header title="Mood Palette" />
        <Wrapper>
          <Button
            marginTop="35"
            marginBottom="15"
            width="80"
            height="10"
            shadow="0 0 0 0.2px black"
            focusBackgroundColor="white"
          >
            <Input
              onChange={onChangeNickName}
              type="text"
              placeholder="닉네임"
            />
          </Button>
          <Button
            marginTop="10"
            marginBottom="15"
            width="80"
            height="10"
            shadow="0 0 0 0.2px black"
            focusBackgroundColor="white"
          >
            <Input
              onChange={onChangeEmail}
              type="text"
              placeholder="이메일 주소"
            />
          </Button>
          <Button
            marginTop="10"
            marginBottom="15"
            width="80"
            height="10"
            shadow="0 0 0 0.2px black"
            focusBackgroundColor="white"
          >
            <Input
              onChange={onChangePassword}
              type="password"
              placeholder="비밀번호"
            />
          </Button>
          <Button
            marginTop="10"
            marginBottom="15"
            width="80"
            height="10"
            shadow="0 0 0 0.2px black"
            focusBackgroundColor="white"
          >
            <Input
              onChange={onChangePasswordCheck}
              type="password"
              placeholder="비밀번호 확인"
            />
          </Button>
          <Button
            marginTop="50"
            marginBottom="15"
            width="80"
            height="10"
            blackButton
            shadow="0 0 0 0.2px black"
            onClick={onClickSubmit}
          >
            <Next>가입하기</Next>
          </Button>
        </Wrapper>
        <NavigationBar color="" userid="0" />
      </div>
    </motion.div>
  );
};

export default SignUp;
