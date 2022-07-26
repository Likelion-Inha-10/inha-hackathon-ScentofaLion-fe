import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
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
  let navigate = useNavigate();

  const moveToHomePage = () => {
    navigate('/home');
  };

  const moveToOtherColorPage = () => {
    navigate('/home/other-color/except/red');
  };

  const moveToTestPage = () => {
    navigate('/home/scent-test');
  };

  return (
    <Wrapper>
      <NavigationBox>
        <NavigationButton type="button" value="home" onClick={moveToHomePage}>
          <MdOutlineHome size="28px" color="white" />
        </NavigationButton>
        <NavigationButton type="button" value="review">
          <MdOutlineBrush size="28px" color="white" />
        </NavigationButton>
        <NavigationButton
          type="button"
          value="palette"
          onClick={moveToOtherColorPage}
        >
          <MdOutlinePalette size="28px" color="white" />
        </NavigationButton>
        <NavigationButton type="button" value="test" onClick={moveToTestPage}>
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
