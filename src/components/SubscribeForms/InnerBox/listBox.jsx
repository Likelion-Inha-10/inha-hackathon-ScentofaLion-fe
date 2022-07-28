import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40%;
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

const ListBox = () => {
  let navigate = useNavigate();

  const moveToBasic = () => {
    navigate('/home/subscribe/basic');
  };
  const moveToStandard = () => {
    navigate('/home/subscribe/standard');
  };
  const moveToPremium = () => {
    navigate('/home/subscribe/premium');
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
              height="12"
              backgroundColor="black"
              fontColor="white"
              marginTop="20"
              fontSize="17"
              paddingTop="1"
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
              height="10"
              backgroundColor="black"
              fontColor="white"
              marginTop="20"
              fontSize="17"
              marginBottom="8"
              paddingTop="2"
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
              height="10"
              backgroundColor="black"
              fontColor="white"
              marginTop="20"
              fontSize="17"
              marginBottom="8"
              paddingTop="2"
              onClick={moveToPremium}
            >
              Subscribe
            </Button>
          </Box>
        </InnerWrapper>
      </Wrapper>
    </div>
  );
};

export default ListBox;
