/* eslint-disable react/prop-types */
import React from 'react';
import Button from 'components/Button';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
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
  font-size: 15px;
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

const ColorSelect = (props) => {
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
          onClick={() => props.setUserColor('red')}
        >
          Red
        </Button>

        <Button
          width="40"
          fontSize="25"
          backgroundColor="#F8C008"
          fontColor="white"
          marginTop="20"
          shadow
          otherFont
          paddingTop="10"
          paddingBottom="10"
          radius="0"
          onClick={() => props.setUserColor('yellow')}
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
          value="green"
          onClick={() => props.setUserColor('green')}
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
          onClick={() => props.setUserColor('blue')}
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
          onClick={() => props.setUserColor('purple')}
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
          onClick={() => props.setUserColor('white')}
        >
          White
        </Button>

        <Button
          width="40"
          fontSize="25"
          backgroundColor="black"
          focusBackgroundColor="white"
          focusFontColor="black"
          fontColor="white"
          marginTop="20"
          shadow
          otherFont
          marginBottom="60"
          paddingTop="10"
          paddingBottom="10"
          radius="0"
          onClick={() => props.setUserColor('black')}
        >
          Black
        </Button>
      </ColorWrapper>
    </div>
  );
};

export default ColorSelect;
