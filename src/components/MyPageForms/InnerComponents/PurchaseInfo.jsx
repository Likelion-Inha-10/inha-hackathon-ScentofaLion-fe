import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import { MdArrowForwardIos } from 'react-icons/md';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: content-box;
  margin-top: 40px;
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
  padding-top: 5px;
  padding-bottom: 20px;
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
  font-size: 18px;
  font-weight: 600;
  font-family: 'Noto Sans KR', sans-serif;
  text-align: left;
  color: black;
`;

const StyledHr = styled.hr`
  width: 99%;
  border-color: rgba(0, 0, 0, 0.3);
`;

const InfoWrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const InfoTextContainer = styled.div`
  width: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const NumberText = styled.div`
  font-size: 25px;
  font-weight: 600;
  font-family: 'Noto Sans KR', sans-serif;
  color: black;
`;

const SubText = styled.div`
  font-size: 11px;
  font-weight: 400;
  font-family: 'Noto Sans KR', sans-serif;
  color: #828282;
  margin-top: 10px;
`;

const PurchaseInfo = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Button
            backgroundColor="white"
            focusBackgroundColor="white"
            width="85"
            paddingTop="15"
            paddingBottom="15"
            fontSize="17"
          >
            <ButtonInnerWrapper>
              <TextWrapper>
                <ButtonMainText>주문내역 전체보기</ButtonMainText>
              </TextWrapper>
              <MdArrowForwardIos />
            </ButtonInnerWrapper>
          </Button>
          <StyledHr />
          <InfoWrapper>
            <InfoTextContainer>
              <NumberText>0</NumberText>
              <SubText>주문접수</SubText>
            </InfoTextContainer>
            <MdArrowForwardIos color="#828282" />
            <InfoTextContainer>
              <NumberText>0</NumberText>
              <SubText>결제완료</SubText>
            </InfoTextContainer>
            <MdArrowForwardIos color="#828282" />
            <InfoTextContainer>
              <NumberText>0</NumberText>
              <SubText>배송준비중</SubText>
            </InfoTextContainer>
            <MdArrowForwardIos color="#828282" />
            <InfoTextContainer>
              <NumberText>0</NumberText>
              <SubText>배송중</SubText>
            </InfoTextContainer>
            <MdArrowForwardIos color="#828282" />
            <InfoTextContainer>
              <NumberText>0</NumberText>
              <SubText>배송완료</SubText>
            </InfoTextContainer>
          </InfoWrapper>
        </Container>
      </Wrapper>
    </>
  );
};

export default PurchaseInfo;
