import React from 'react';
import Button from 'components/Button';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  margin-top: 10%;
  width: 80%;
  margin-left: 10%;
  margin-bottom: 20%;
`;

const ColorSelect = () => {
  return (
    <div>
      <Wrapper>
        <TextBox>Select Color</TextBox>
        <Explain>구독하실 컬러를 선택해주세요</Explain>
      </Wrapper>

      <ColorWrapper>
        <Button
          width="40"
          fontSize="25"
          backgroundColor="#F0213B"
          fontColor="white"
          shadow
          otherFont
          paddingTop="10"
          paddingBottom="10"
          radius="0"
          marginTop="20"
        >
          Red
        </Button>

        <Button
          width="40"
          fontSize="25"
          backgroundColor="#FFD700"
          fontColor="white"
          marginTop="20"
          shadow
          otherFont
          paddingTop="10"
          paddingBottom="10"
          radius="0"
        >
          Yellow
        </Button>

        <Button
          width="40"
          fontSize="25"
          backgroundColor="#339A53"
          fontColor="white"
          marginTop="20"
          shadow
          otherFont
          paddingTop="10"
          paddingBottom="10"
          radius="0"
        >
          Green
        </Button>

        <Button
          width="40"
          fontSize="25"
          backgroundColor="#2878A2"
          fontColor="white"
          marginTop="20"
          shadow
          otherFont
          paddingTop="10"
          paddingBottom="10"
          radius="0"
        >
          Blue
        </Button>

        <Button
          width="40"
          fontSize="25"
          backgroundColor="#7B78B8"
          fontColor="white"
          marginTop="20"
          shadow
          otherFont
          paddingTop="10"
          paddingBottom="10"
          radius="0"
        >
          Purple
        </Button>

        <Button
          width="40"
          fontSize="25"
          backgroundColor="#ffffff"
          fontColor="black"
          marginTop="20"
          shadow
          otherFont
          paddingTop="10"
          paddingBottom="10"
          radius="0"
        >
          White
        </Button>

        <Button
          width="40"
          fontSize="25"
          backgroundColor="black"
          fontColor="white"
          marginTop="20"
          shadow
          otherFont
          marginBottom="60"
          paddingTop="10"
          paddingBottom="10"
          radius="0"
        >
          Black
        </Button>
      </ColorWrapper>
    </div>
  );
};

export default ColorSelect;
