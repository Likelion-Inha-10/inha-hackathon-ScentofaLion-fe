import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: content-box;
`;

const TestTitle = styled.div`
  width: 70%;
  padding-top: 80px;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 25px;
  font-weight: 800;
  text-align: center;
  color: black;
`;

const TestForms = () => {
  return (
    <>
      <Wrapper>
        <TestTitle>안녕?</TestTitle>
      </Wrapper>
    </>
  );
};

export default TestForms;
