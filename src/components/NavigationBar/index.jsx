import React from 'react';
import styled from 'styled-components';
import {
  MdOutlineHome,
  MdOutlineBrush,
  MdOutlineScience,
  MdOutlinePalette,
  MdOutlineEmojiEmotions,
} from 'react-icons/md';

const Wrapper = styled.div`
  width: 100vw;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavigationBox = styled.div`
  width: 90%;
  height: 60px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: black;
  border-radius: 30px;
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.1);
`;

const NavigationButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  transition: 0.3s;
  &:hover {
    padding-bottom: 7px;
    transition: 0.3s;
  }
  &:focus {
    padding-bottom: 7px;
    transition: 0.3s;
  }
`;

const NavigationBar = () => {
  return (
    <Wrapper>
      <NavigationBox>
        <NavigationButton type="button" value="home">
          <MdOutlineHome size="28px" color="white" />
        </NavigationButton>
        <NavigationButton type="button" value="test">
          <MdOutlineBrush size="28px" color="white" />
        </NavigationButton>
        <NavigationButton type="button" value="palette">
          <MdOutlinePalette size="28px" color="white" />
        </NavigationButton>
        <NavigationButton type="button" value="setting">
          <MdOutlineScience size="28px" color="white" />
        </NavigationButton>
        <NavigationButton type="button" value="myPage">
          <MdOutlineEmojiEmotions size="28px" color="white" />
        </NavigationButton>
      </NavigationBox>
    </Wrapper>
  );
};

export default NavigationBar;
