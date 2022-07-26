import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import { Link } from 'react-router-dom';
import CandleImg from '../../../images/NextMain/Candle_Blue.png';
import RoomImg from '../../../images/NextMain/Room_Blue.jpg';
import ShampooImg from '../../../images/NextMain/shampoo_Blue.jpg';

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
`;
const BrandName = styled.div`
  font-size: 12px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 800;
  color: #595959;
  margin-bottom: 13px;
`;

const ProductName = styled.div`
  font-size: 15px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  color: black;
  margin-bottom: 6px;
`;

const ProductName2 = styled.div`
  font-size: 13px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 800;
  color: black;
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
  width: 100%;
  height: 40px;
  margin-bottom: 120px;
  margin-left: 10%;
  align-items: flex-start;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40px;
  margin-left: 10%;
`;

const ImgBox = styled.div`
  display: flex;
  width: 100px;
  height: 90px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const NProduct2 = () => {
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
            <Image src={CandleImg}></Image>
          </ImgBox>

          <TextBox>
            <LineName>캔들</LineName>
            <BrandName>오량주</BrandName>
            <ProductName>토스카나 캔들</ProductName>
            <ProductName2>브아 몽마르뜨</ProductName2>
          </TextBox>
        </ProductWrapper>

        <ProductWrapper>
          <ImgBox>
            <Image src={RoomImg}></Image>
          </ImgBox>

          <TextBox>
            <LineName>룸스프레이</LineName>
            <BrandName>메르디센트</BrandName>
            <ProductName>퍼퓸 룸 스프레이</ProductName>
            <ProductName2>메리브리즈</ProductName2>
          </TextBox>
        </ProductWrapper>

        <ProductWrapper>
          <ImgBox>
            <Image src={ShampooImg}></Image>
          </ImgBox>

          <TextBox>
            <LineName>샴푸</LineName>
            <BrandName>닥터그루트</BrandName>
            <ProductName>애딕트 샴푸</ProductName>
            <ProductName2>세이지 앤 씨솔트</ProductName2>
          </TextBox>
        </ProductWrapper>
      </WhiteBox>

      <Link to="/home/next-main">
        <MoveBox />
      </Link>
    </div>
  );
};

export default NProduct2;
