import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import NavigationBar from 'components/NavigationBar';
import Button from 'components/Button';

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
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangePasswordCheck = (e) => {
    setPasswordCheck(e.target.value);
  };

  //const hasError = (passwordEntered) =>
  //Password != PasswordCheck ? true : false;

  const onClickSubmit = () => {
    if (password !== passwordCheck) {
      return Alert('비밀번호가 동일하지 않습니다');
    } else if (!nickName || !email || !password || !passwordCheck) {
      return Alert('모든 항목을 입력해주세요');
    } else if (email == !'@' || !'.') {
      return Alert('이메일 형식이 올바르지 않습니다');
    }
  };

  return (
    <>
      <div>
        <Header title="Mood Palette" />
        <Wrapper>
          <Button
            marginTop="35"
            marginBottom="15"
            paddingTop="20"
            width="80"
            height="10"
            shadow="0 0 0 0.2px black"
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
            paddingTop="20"
            width="80"
            height="10"
            shadow="0 0 0 0.2px black"
          >
            <Input
              onChangeEmail={onChangeEmail}
              type="text"
              placeholder="이메일 주소"
            />
          </Button>
          <Button
            marginTop="10"
            marginBottom="15"
            paddingTop="20"
            width="80"
            height="10"
            shadow="0 0 0 0.2px black"
          >
            <Input
              onChangePassword={onChangePassword}
              type="text"
              placeholder="비밀번호"
            />
          </Button>
          <Button
            marginTop="10"
            marginBottom="15"
            paddingTop="20"
            width="80"
            height="10"
            shadow="0 0 0 0.2px black"
          >
            <Input
              onChange={onChangePasswordCheck}
              type="text"
              placeholder="비밀번호를 확인"
            />
          </Button>
          <Button
            marginTop="50"
            marginBottom="15"
            paddingTop="15"
            width="80"
            height="10"
            blackButton
            shadow="0 0 0 0.2px black"
            onClick={onClickSubmit}
          >
            <Next>가입하기</Next>
          </Button>
        </Wrapper>
        <NavigationBar />
      </div>
    </>
  );
};

export default SignUp;
