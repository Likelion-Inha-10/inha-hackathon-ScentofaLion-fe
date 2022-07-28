import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import NavigationBar from 'components/NavigationBar';

const TextBox = styled.div`
  font-size: 20px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 800;
  margin-top: 60%;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70%;
`;

const InfoTitleBorder = styled.div`
  font-size: 40px;
  font-weight: 900;
  font-family: 'Frank Ruhl Libre', serif;
  text-align: center;
  color: #fffaf5;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;

const SubscribeDone = () => {
  return (
    <div>
      <Header title="Subscribe" />
      <Wrapper>
        <InfoTitleBorder>Subscribe</InfoTitleBorder>
        <InfoTitleBorder>Done !</InfoTitleBorder>
      </Wrapper>

      <TextBox>✧ 구독해주셔서 감사합니다 ✧</TextBox>
      <NavigationBar />
    </div>
  );
};

export default SubscribeDone;
