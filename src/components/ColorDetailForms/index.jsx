import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';
import ResultTitle from 'components/TestResultForms/InnerComponents/ResultTitle';
import ColorImage from 'components/TestResultForms/InnerComponents/ColorImage';
import ColorInfo from 'components/TestResultForms/InnerComponents/ColorInfo';
import Header from 'components/Header';

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: content-box;
  background-color: #fffaf5;
`;

const ButtonWrapper = styled.div`
  width: 90%;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ColorDetailForms = () => {
  let navigate = useNavigate();
  function moveToPastPage() {
    navigate(-1);
  }
  function moveToMainPage() {
    navigate('/home');
  }

  return (
    <>
      <Wrapper></Wrapper>
      <Header title="Mood Scent" />
      <ResultTitle />
      <ColorImage />
      <ColorInfo />
      <Wrapper>
        <ButtonWrapper>
          <Button
            blackButton
            shadow
            width="100"
            fontSize="17"
            marginBottom="10"
            paddingTop="10"
            paddingBottom="10"
            paddingLeft="25"
            paddingRight="25"
            onClick={moveToPastPage}
          >
            이전 페이지로 이동
          </Button>
          <Button
            blackButton
            shadow
            width="100"
            fontSize="17"
            marginBottom="10"
            paddingTop="10"
            paddingBottom="10"
            paddingLeft="25"
            paddingRight="25"
            onClick={moveToMainPage}
          >
            홈으로 이동
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
};

export default ColorDetailForms;
