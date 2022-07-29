import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import { Link, useParams } from 'react-router-dom';
import CandleImg from '../../../images/NextMain/blue_candle.png';
import RoomImg from '../../../images/NextMain/blue_roomspray.png';
import ShampooImg from '../../../images/NextMain/blue_shampoo.png';

const WhiteBox = styled.div`
  width: 90%;
  height: 600px;
  background-color: white;
  border-radius: 41px 0px 41px 41px;
  display: flex;
  margin-top: 20px;
  margin-left: 5%;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);
  flex-direction: column;

  position: absolute;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
  width: 90%;
  height: 20%;
`;
const WeekText = styled.div`
  font-size: 18px;
  font-family: 'Frank Ruhl Libre', serif;
  font-weight: 900;
  margin-top: 25px;
`;

const Underline = styled.hr`
  width: 90%;
  margin-top: 16px;
`;

const LineName = styled.div`
  font-size: 12px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 800;
  color: #595959;
  margin-bottom: 13px;
  margin-top: 7px;
`;

const ProductName = styled.div`
  font-size: 15px;
  width: 75%;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  color: black;
  margin-top: 6%;
  word-break: keep-all;
  line-height: 1.2;
`;

const MoveBox = styled.div`
  width: 90%;
  height: 630px;
  background-color: white;
  border-radius: 41px 0px 41px 41px;
  display: flex;
  margin-top: 20px;
  margin-left: 5%;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  opacity: 0;
  position: relative;
`;
//모든 요소 위에 투명도 100인 박스를 만들어서 메인으로 이동하게 만들었슴다,,,,죄송,,,

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 40px;
  margin-bottom: 120px;
  margin-left: 15%;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-left: 10%;
`;

const ImgBox = styled.div`
  width: 80px;
  height: 80px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const NProduct2 = () => {
  const { userid } = useParams();

  return (
    <div>
      <Header title="Mood Palette" />

      <WhiteBox>
        <Wrapper>
          <WeekText>Next week</WeekText>
          <Underline />
        </Wrapper>

        <ProductWrapper>
          <ImgBox>
            <Image></Image>
          </ImgBox>

          <TextBox>
            <LineName>캔들</LineName>

            <ProductName>오량주 토스카나 캔들 브아 몽마르뜨</ProductName>
          </TextBox>
        </ProductWrapper>

        <ProductWrapper>
          <ImgBox>
            <Image></Image>
          </ImgBox>

          <TextBox>
            <LineName>룸스프레이</LineName>
            <ProductName> 메르디센트 퍼퓸 룸 스프레이 메리브리즈</ProductName>
          </TextBox>
        </ProductWrapper>

        <ProductWrapper>
          <ImgBox>
            <Image></Image>
          </ImgBox>

          <TextBox>
            <LineName>샴푸</LineName>

            <ProductName>닥터그루트 애딕트 샴푸 세이지 앤 씨솔트</ProductName>
          </TextBox>
        </ProductWrapper>
      </WhiteBox>

      <Link to={`/home/${userid}/next-main`}>
        <MoveBox />
      </Link>
    </div>
  );
};

export default NProduct2;
