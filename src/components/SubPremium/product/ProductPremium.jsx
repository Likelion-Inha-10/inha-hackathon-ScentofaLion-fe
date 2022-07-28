import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Button from 'components/Button';

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10%;
  margin-top: 218px;
  width: 80%;
  height: 10%;
  justify-content: space-between;
`;

const BottomText = styled.div`
  font-size: ${(props) => props.fontSize || 34}px;
  font-family: 'Frank Ruhl Libre', serif;
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin-left: ${(props) => props.marginLeft || 0}px;
  margin-right: ${(props) => props.marginRight || 0}px;
`;

const BackWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const TextBox = styled.div`
  font-size: ${(props) => props.fontSize || 34}px;
  font-family: 'Frank Ruhl Libre', serif;
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin-left: ${(props) => props.marginLeft || 0}px;
  margin-right: ${(props) => props.marginRight || 0}px;
`;

const Explain = styled.div`
font-size: 15px
font-family: 'Noto Sans KR', sans-serif;
font-weight: 800;
margin-top: 40px;
display: flex;
justify-content: center;
`;

const ColorWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 94px;
  width: 85%;
  margin-left: 7.5%;
  margin-bottom: 20%;
`;

const ProductPremium = () => {
  let navigate = useNavigate();

  const moveToBack = () => {
    navigate('/home/subscribe/premium');
  };
  const moveToNext = () => {
    navigate('/home/subscribe/done');
  };
  return (
    <div>
      <Wrapper>
        <TextBox>Premium</TextBox>
        <TextBox>Select Products</TextBox>
        <Explain>구독할 제품을 3개 선택해주세요</Explain>
      </Wrapper>

      <ColorWrapper>
        <Button
          width="30"
          fontSize="18"
          backgroundColor="white"
          fontColor="black"
          paddingBottom="5"
          radius="25"
          marginTop="20"
          shadow
        >
          캔들
        </Button>

        <Button
          width="30"
          fontSize="18"
          backgroundColor="white"
          fontColor="black"
          paddingBottom="5"
          radius="25"
          marginTop="20"
          shadow
        >
          룸스프레이
        </Button>

        <Button
          width="30"
          fontSize="18"
          backgroundColor="white"
          fontColor="black"
          paddingBottom="5"
          radius="25"
          marginTop="20"
          shadow
        >
          샴푸
        </Button>

        <Button
          width="30"
          fontSize="18"
          backgroundColor="white"
          fontColor="black"
          paddingBottom="5"
          radius="25"
          marginTop="20"
          shadow
        >
          샴푸
        </Button>

        <Button
          width="30"
          fontSize="18"
          backgroundColor="white"
          fontColor="black"
          paddingBottom="5"
          radius="25"
          marginTop="20"
          shadow
        >
          린스
        </Button>

        <Button
          width="30"
          fontSize="18"
          backgroundColor="white"
          fontColor="black"
          paddingBottom="5"
          radius="25"
          marginTop="20"
          shadow
        >
          바디워시
        </Button>

        <Button
          width="30"
          fontSize="18"
          backgroundColor="white"
          fontColor="black"
          paddingBottom="5"
          radius="25"
          marginTop="20"
          shadow
        >
          바디미스트
        </Button>
      </ColorWrapper>

      <BottomWrapper>
        <BackWrapper onClick={moveToBack}>
          <AiOutlineArrowLeft />
          <BottomText fontSize="25" marginLeft="20">
            {' '}
            Back
          </BottomText>
        </BackWrapper>

        <NextWrapper onClick={moveToNext}>
          <BottomText fontSize="25" marginRight="20">
            {' '}
            Next
          </BottomText>
          <AiOutlineArrowRight />
        </NextWrapper>
      </BottomWrapper>
    </div>
  );
};

export default ProductPremium;
