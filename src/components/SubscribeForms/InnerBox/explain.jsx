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
  margin-top: 30px;
  width: 100%;
  height: 5vh;
`;
const Explain = styled.div`
  font-size: 15px;
  display: flex;
  justify-content: center;
  font-family: 'Noto Sans KR', sans-serif;
  margin-top: 5px;
  font-weight: light;
  padding-bottom: 5px;
`;

const ExplainGray = styled.div`
  font-size: 13px;
  display: flex;
  justify-content: center;
  font-family: 'Noto Sans KR', sans-serif;
  margin-top: 5px;
  font-weight: light;
  padding-bottom: 5px;
  color: #828282;
`;

const ExplainService = () => {
  return (
    <div>
      <Title>구독서비스</Title>

      <ExplainBox>
        <Explain>총 12가지의 제품들로 매주 바꾸는 무드</Explain>
        <Explain>다양한 구성으로 나만의 향을 만나보세요</Explain>
        <ExplainGray>(하단으로 스크롤해 자세한 설명을 확인하세요)</ExplainGray>
      </ExplainBox>
    </div>
  );
};

export default ExplainService;
