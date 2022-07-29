import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-top: ${(props) => props.topmargin || '210px'};
`;

const Box = styled.div`
  width: 90%;
  height: ${(props) => props.height || '250px'};
  background-color: white;
  border-radius: 13px;
  display: flex;
  margin-left: 20%;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  align-items: center;
`;

const LineText = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  font-family: 'Frank Ruhl Libre', serif;
  font-weight: bold;
  margin-left: 30%;
`;

const InnerText = styled.div`
  font-size: ${(props) => props.fontsize || '15px'};
  font-family: 'Noto Sans KR', sans-serif;
  justify-content: center;
  font-weight: 800;
  display: flex;
  margin-top: ${(props) => props.topmargin || '20px'};
  color: black;
`;

const Underline = styled.hr`
  width: 40%;
  margin-left: 45%;
  margin-bottom: 15px;
`;

const ExplainDetail = styled.div`
  height: 100px;
  margin-left: 5vw;
  font-size: 14px;
  display: flex;
  justify-content: left;
  line-height: 1.5;
  word-break: keep-all;
  font-family: 'Noto Sans KR', sans-serif;
  margin-top: 8px;
  font-weight: light;
  margin-top: 40px;
  margin-bottom: 100px;
`;

const ListBox = () => {
  const { userid } = useParams();
  let navigate = useNavigate();

  const moveToBasic = () => {
    navigate(`/home/${userid}/subscribe/3900`);
  };
  const moveToStandard = () => {
    navigate(`/home/${userid}/subscribe/5900`);
  };
  const moveToPremium = () => {
    navigate(`/home/${userid}/subscribe/9900`);
  };
  return (
    <div>
      <Wrapper>
        <InnerWrapper>
          <LineText>Basic</LineText>
          <Underline />
          <Box>
            <InnerText>핸드워시</InnerText>
            <InnerText>디퓨저</InnerText>
            <InnerText>핸드크림</InnerText>
            <InnerText>섬유유연제</InnerText>
            <InnerText topmargin="30px" fontsize="20px">
              월 3,900원
            </InnerText>
            <Button
              width="90"
              height="12"
              backgroundColor="black"
              fontColor="white"
              marginTop="23"
              fontSize="17"
              onClick={moveToBasic}
            >
              Subscribe
            </Button>
          </Box>
        </InnerWrapper>

        <InnerWrapper topmargin="140px">
          <LineText>Standard</LineText>
          <Underline />
          <Box height="320px">
            <InnerText>+ 선택</InnerText>
            <InnerText>+ 선택</InnerText>
            <InnerText>핸드워시</InnerText>
            <InnerText>디퓨저</InnerText>
            <InnerText>핸드크림</InnerText>
            <InnerText>섬유유연제</InnerText>
            <InnerText topmargin="30px" fontsize="20px">
              월 5,900원
            </InnerText>
            <Button
              width="90"
              height="10"
              backgroundColor="black"
              fontColor="white"
              marginTop="23"
              fontSize="17"
              marginBottom="8"
              onClick={moveToStandard}
            >
              Subscribe
            </Button>
          </Box>
        </InnerWrapper>

        <InnerWrapper topmargin="70px">
          <LineText>Premium</LineText>
          <Underline />
          <Box height="390px">
            <InnerText>+ 향수</InnerText>
            <InnerText>+ 선택</InnerText>
            <InnerText>+ 선택</InnerText>
            <InnerText>+ 선택</InnerText>
            <InnerText>핸드워시</InnerText>
            <InnerText>디퓨저</InnerText>
            <InnerText>핸드크림</InnerText>
            <InnerText>섬유유연제</InnerText>
            <InnerText topmargin="30px" fontsize="20px">
              월 9,900원
            </InnerText>
            <Button
              width="90"
              height="10"
              backgroundColor="black"
              fontColor="white"
              marginTop="20"
              fontSize="17"
              marginBottom="8"
              onClick={moveToPremium}
            >
              Subscribe
            </Button>
          </Box>
        </InnerWrapper>
      </Wrapper>
      <ExplainDetail>
        • Basic : 기본 제공 4종류 제품
        <br /> • Standard : 기본 제공 제품과 2가지 자율 선택 제품
        <br /> • Premium : 향수가 포함된 5종류 제품과 2가지 자율 선택 제품
      </ExplainDetail>
    </div>
  );
};

export default ListBox;
