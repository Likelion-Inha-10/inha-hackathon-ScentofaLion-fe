import React from 'react';
import styled from 'styled-components';
import ColorButton from './InnerComponents/ColorButton';

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: content-box;
  margin-top: 30px;
`;

const ColorContainer = styled.div`
  width: 85%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  text-align: center;
  border: 1px solid black;
`;

const MainTitle = styled.div`
  font-size: 50px;
  font-weight: 900;
  font-family: 'Frank Ruhl Libre', serif;
  text-align: center;
  line-height: 1.3;
  color: black;
  position: absolute;
  top: 180px;
`;

const ButtonContainer = styled.div`
  width: 100%;
`;

const SubTitle = styled.div`
  margin-top: 30px;
  font-size: 15px;
  font-weight: 600;
  font-family: 'Frank Ruhl Libre', serif;
  line-height: 1.3;
  text-align: center;
  color: black;
`;

const OtherColorForms = () => {
  return (
    <>
      <Wrapper>
        <MainTitle>
          OTHER
          <br /> COLORS
        </MainTitle>
        <ColorContainer>
          <ButtonContainer>
            <ColorButton />
          </ButtonContainer>
        </ColorContainer>
        <SubTitle>
          carefully curated colors
          <br /> and the way they affect our mood
        </SubTitle>
      </Wrapper>
    </>
  );
};

export default OtherColorForms;
