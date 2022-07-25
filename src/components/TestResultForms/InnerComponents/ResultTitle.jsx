import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: content-box;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 900;
  font-family: 'Frank Ruhl Libre', serif;
  text-align: center;
  line-height: 1.2;
  color: black;
  margin-top: 30px;
`;

const SubTitle = styled.div`
  font-size: 15px;
  font-weight: 400;
  font-family: 'Noto Sans KR', sans-serif;
  text-align: center;
  line-height: 1.2;
  color: black;
  margin-top: 5px;
`;

const ResultTitle = () => {
  return (
    <>
      <Wrapper>
        <Title>
          YOUR OWN
          <br /> SCENT
        </Title>
        <SubTitle>당신만의 향기를 발견하세요</SubTitle>
      </Wrapper>
    </>
  );
};

export default ResultTitle;
