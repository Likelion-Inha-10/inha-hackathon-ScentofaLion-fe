import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';
import Landing3 from '../../../images/LandingPage/landing3.jpeg';

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
  text-align: right;
  padding-right: 30px;
  color: black;
  position: relative;
  z-index: 10;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  vertical-align: middle;
  margin-top: 20px;
  position: absolute;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 50%;
  overflow: hidden;
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.1);
`;

const ImageThumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 40px;
`;

const InfoTitle = styled.div`
  font-family: 'Frank Ruhl Libre', serif;
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
  margin-top: 40px;
`;

const LandingInner3 = () => {
  let navigate = useNavigate();
  function moveToTestPage() {
    navigate('/home/login-warning');
  }

  return (
    <>
      <Wrapper>
        <Title>Mood Palette</Title>
        <Container>
          <ImageBox>
            <ImageThumbnail src={Landing3} />
          </ImageBox>
          <InfoBox>
            <InfoTitle>Per/scent</InfoTitle>
            <InfoText>
              내 일상의 향기는 어떤 컬러일까
              <br /> 테스트로 알아보는 내 일상의 향기
            </InfoText>
            <Button
              blackButton
              shadow
              width="50"
              paddingTop="10"
              paddingBottom="10"
              marginTop="40"
              fontSize="17"
              onClick={moveToTestPage}
            >
              테스트하러 가기
            </Button>
          </InfoBox>
        </Container>
      </Wrapper>
    </>
  );
};

export default LandingInner3;
