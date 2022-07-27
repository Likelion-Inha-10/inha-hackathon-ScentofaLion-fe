import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Button from 'components/Button';
import { MdArrowForwardIos } from 'react-icons/md';

const Wrapper = styled.div`
  width: 100%;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  box-sizing: content-box;
  margin-top: 40px;
`;

const ContainerTitle = styled.div`
  width: 75%;
  font-size: 18px;
  font-weight: 600;
  font-family: 'Noto Sans KR', sans-serif;
  text-align: left;
  color: black;
  margin-bottom: 20px;
`;

const Container = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  background-color: white;
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.1);
  padding-top: 20px;
  padding-bottom: 20px;
`;

const SubscribeDate = styled.div`
  width: 85%;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Noto Sans KR', sans-serif;
  text-align: left;
  color: black;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const ButtonInnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TextWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
`;

const ButtonMainText = styled.div`
  width: 100%;
  font-size: 17px;
  font-weight: 400;
  font-family: 'Noto Sans KR', sans-serif;
  text-align: left;
  color: black;
`;

const ButtonSubText = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Noto Sans KR', sans-serif;
  text-align: left;
  color: black;
`;

const SubscribeInfo = () => {
  const { subscribe } = useParams('subscribe');

  return (
    <>
      <Wrapper visible={subscribe === 'none'}>
        <ContainerTitle>구독 상세 정보</ContainerTitle>
        <Container>
          <SubscribeDate>아직 구독하시지 않았네요.</SubscribeDate>
          <Button
            backgroundColor="white"
            focusBackgroundColor="white"
            width="85"
            paddingTop="20"
            paddingBottom="20"
            fontSize="17"
          >
            <ButtonInnerWrapper>
              <TextWrapper>
                <ButtonMainText>구독하러 가기</ButtonMainText>
              </TextWrapper>
              <MdArrowForwardIos />
            </ButtonInnerWrapper>
          </Button>
        </Container>
      </Wrapper>

      <Wrapper visible={subscribe !== 'none'}>
        <ContainerTitle>구독 상세 정보</ContainerTitle>
        <Container>
          <SubscribeDate>구독 시작일 : XXXX.XX.XX</SubscribeDate>
          <Button
            backgroundColor="white"
            focusBackgroundColor="white"
            width="85"
            paddingTop="10"
            paddingBottom="10"
            fontSize="17"
          >
            <ButtonInnerWrapper>
              <TextWrapper>
                <ButtonMainText>멤버십</ButtonMainText>
                <ButtonSubText>{subscribe}</ButtonSubText>
              </TextWrapper>
              <MdArrowForwardIos />
            </ButtonInnerWrapper>
          </Button>
          <Button
            backgroundColor="white"
            focusBackgroundColor="white"
            width="85"
            paddingTop="20"
            paddingBottom="20"
            fontSize="17"
          >
            <ButtonInnerWrapper>
              <TextWrapper>
                <ButtonMainText>결제 상세 정보</ButtonMainText>
              </TextWrapper>
              <MdArrowForwardIos />
            </ButtonInnerWrapper>
          </Button>
        </Container>
      </Wrapper>
    </>
  );
};

export default SubscribeInfo;
