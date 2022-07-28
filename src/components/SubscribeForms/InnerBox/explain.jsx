import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  font-family: 'Noto Sans KR', sans-serif;
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

const ExplainBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  width: 100%;
  height: 20%;
`;
const Explain = styled.div`
  font-size: 15px;
  display: flex;
  justify-content: center;
  font-family: 'Noto Sans KR', sans-serif;
  margin-top: 5px;
  font-weight: light;
`;

const ExplainService = () => {
  return (
    <div>
      <Title>구독서비스</Title>

      <ExplainBox>
        <Explain>매주 새로운 샘플들로 내 일상을 꾸미다</Explain>
        <Explain>총 12가지의 제품들로 매주 바꾸는 무드</Explain>
      </ExplainBox>
    </div>
  );
};

export default ExplainService;
