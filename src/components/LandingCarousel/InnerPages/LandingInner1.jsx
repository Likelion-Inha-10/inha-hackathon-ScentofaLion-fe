import React from 'react';
import styled from 'styled-components';
import Landing1 from '../../../images/LandingPage/landing1.jpeg';

const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: content-box;
`;

const Title = styled.div`
  width: 100vw;
  font-size: 40px;
  font-weight: 900;
  font-family: 'Frank Ruhl Libre', serif;
  text-align: center;
  color: black;
  position: relative;
  z-index: 10;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  vertical-align: middle;
  position: absolute;
`;

const ImageBox = styled.div`
  width: 50%;
  height: 95%;
  overflow: hidden;
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.1);
`;

const ImageThumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoBox = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const InfoTitle = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 800;
  font-size: 30px;
  color: black;
`;

const InfoText = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 17px;
  color: black;
  line-height: 1.4;
  margin-top: 90px;
`;

const LandingInner1 = () => {
  return (
    <>
      <Wrapper>
        <Title>Mood Palette</Title>
        <Container>
          <ImageBox>
            <ImageThumbnail src={Landing1} />
          </ImageBox>
          <InfoBox>
            <InfoTitle>구독 서비스</InfoTitle>
            <InfoText>
              매주 새로운 샘플들로
              <br /> 매일 달라지는 내 일상
            </InfoText>
            <InfoText>3,900원부터~</InfoText>
          </InfoBox>
        </Container>
      </Wrapper>
    </>
  );
};

export default LandingInner1;
