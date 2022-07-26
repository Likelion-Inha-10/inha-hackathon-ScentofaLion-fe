import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  box-sizing: content-box;
  bottom: 0px;
`;

const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  text-decoration: none;
`;

const ColorButtonContainer = styled.button`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.color || 'black'};
  border-radius: 50px 50px 0 0;
  border: none;
  z-index: ${(props) => props.zIndex || 0};
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.1);
  margin-top: 30px;
  transition: 0.3s;

  &:hover {
    margin-top: 0px;
    transition: 0.3s;
  }
`;

const ColorTitle = styled.div`
  margin-top: 30px;
  margin-bottom: 80px;
  font-size: 17px;
  font-weight: 400;
  font-family: 'Frank Ruhl Libre', serif;
  color: ${(props) => props.color || 'white'};
`;

const FirstButtonGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  bottom: 70px;
`;

const SecondButtonGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  bottom: 0px;
`;

const ColorButton = () => {
  const { color } = useParams();
  const [firstThreeColors, setFirstThreeColors] = useState();
  const [secondThreeColors, setSecondThreeColors] = useState();

  useEffect(() => {
    let allColor = [
      { name: 'red', bgColor: '#F0213B', textColor: 'white', zIndex: '1' },
      { name: 'yellow', bgColor: '#FFD700', textColor: 'white', zIndex: '2' },
      { name: 'green', bgColor: '#339A53', textColor: 'white', zIndex: '3' },
      { name: 'blue', bgColor: '#2878A2', textColor: 'white', zIndex: '4' },
      { name: 'black', bgColor: 'black', textColor: 'white', zIndex: '5' },
      { name: 'white', bgColor: 'white', textColor: 'black', zIndex: '6' },
      { name: 'purple', bgColor: '#7B78B8', textColor: 'white', zIndex: '7' },
    ];

    let filtered = allColor.filter((element) => element.name !== color);

    const storeFirstThreeColors = filtered.slice(0, 3).map((colorData) => (
      <ColorButtonContainer
        key={colorData.name}
        value={colorData.name}
        color={colorData.bgColor}
        zIndex={colorData.zIndex}
      >
        <StyledLink to={`/home/color-detail/${colorData.name}`}>
          <ColorTitle color={colorData.textColor}>
            {colorData.name.toUpperCase()}
          </ColorTitle>
        </StyledLink>
      </ColorButtonContainer>
    ));

    const storeSecondThreeColors = filtered.slice(3, 7).map((colorData) => (
      <ColorButtonContainer
        key={colorData.name}
        value={colorData.name}
        color={colorData.bgColor}
        zIndex={colorData.zIndex}
      >
        <StyledLink to={`/home/color-detail/${colorData.name}`}>
          <ColorTitle color={colorData.textColor}>
            {colorData.name.toUpperCase()}
          </ColorTitle>
        </StyledLink>
      </ColorButtonContainer>
    ));

    setFirstThreeColors(storeFirstThreeColors);
    setSecondThreeColors(storeSecondThreeColors);
  }, []);

  return (
    <>
      <Wrapper>
        <FirstButtonGroup>{firstThreeColors}</FirstButtonGroup>
        <SecondButtonGroup>{secondThreeColors}</SecondButtonGroup>
      </Wrapper>
    </>
  );
};

export default ColorButton;
