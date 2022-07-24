import React from 'react';
import styled from 'styled-components';
import Landing1 from '../../../images/LandingPage/landing2.jpeg';

const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: content-box;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: right;
  position: absolute;
`;

const ImageBox = styled.div`
  width: 75%;
  height: 60%;
  overflow: hidden;
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.1);
`;

const ImageThumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: right;
  position: absolute;
  z-index: 10;
`;

const InfoBox = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const InfoTitle = styled.div`
  font-size: 40px;
  font-weight: 900;
  font-family: 'Frank Ruhl Libre', serif;
  text-align: center;
  color: black;
`;

const InfoTitleBorder = styled.div`
  font-size: 40px;
  font-weight: 900;
  font-family: 'Frank Ruhl Libre', serif;
  text-align: center;
  color: #fffaf5;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;

const InfoSubtitle = styled.div`
  font-size: 17px;
  font-weight: 400;
  font-family: 'Frank Ruhl Libre', serif;
  text-align: center;
  color: black;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const InfoText = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 17px;
  color: black;
  line-height: 1.4;
  margin-bottom: 75px;
`;

const LandingInner2 = () => {
  return (
    <>
      <Wrapper>
        <ImageContainer>
          <ImageBox>
            <ImageThumbnail src={Landing1} />
          </ImageBox>
        </ImageContainer>
        <InfoContainer>
          <InfoBox>
            <InfoTitleBorder>Mood Palette</InfoTitleBorder>
            <InfoTitle>Mood Palette</InfoTitle>
            <InfoTitleBorder>Mood Palette</InfoTitleBorder>
            <InfoSubtitle>My Palette, My Mood</InfoSubtitle>
            <InfoText>
              나만의 향을
              <br /> 나만의 컬러를
              <br /> Mood Palette와 함께
            </InfoText>
          </InfoBox>
        </InfoContainer>
      </Wrapper>
    </>
  );
};

export default LandingInner2;
