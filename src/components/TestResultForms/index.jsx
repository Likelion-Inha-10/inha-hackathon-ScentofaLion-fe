import React from 'react';
import styled from 'styled-components';
import ResultTitle from './InnerComponents/ResultTitle';
import ColorInfo from './InnerComponents/ColorInfo';
import ColorProduct from './InnerComponents/ColorProduct';
import ResultETC from './InnerComponents/ResultETC';

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: content-box;
  margin-top: 120px;
`;

const TestResultForms = () => {
  return (
    <>
      <Wrapper>
        <ResultTitle />
        <ColorInfo />
        <ColorProduct />
        <ResultETC />
      </Wrapper>
    </>
  );
};

export default TestResultForms;
