import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import { Link, useParams } from 'react-router-dom';
import ConditionerImg from '../../../images/NextMain/blue_rinse.png';
import LotionImg from '../../../images/NextMain/blue_bodylotion.png';
import BodyWashImg from '../../../images/NextMain/blue_bodywash.png';

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
  height: 40px;
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

const NProduct3 = () => {
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
            <Image src={ConditionerImg}></Image>
          </ImgBox>

          <TextBox>
            <LineName>린스</LineName>

            <ProductName>LOMA 리브 인 컨디셔너</ProductName>
          </TextBox>
        </ProductWrapper>

        <ProductWrapper>
          <ImgBox>
            <Image src={BodyWashImg}></Image>
          </ImgBox>

          <TextBox>
            <LineName>바디워시</LineName>

            <ProductName>
              아쿠아 디 파르마 미르토 디파나레아 바디워시
            </ProductName>
          </TextBox>
        </ProductWrapper>

        <ProductWrapper>
          <ImgBox>
            <Image src={LotionImg}></Image>
          </ImgBox>

          <TextBox>
            <LineName>바디로션</LineName>

            <ProductName>줄라이미 퍼퓸 바디로션 우디 앤 머스크</ProductName>
          </TextBox>
        </ProductWrapper>
      </WhiteBox>

      <Link to={`/home/${userid}/next-main`}>
        <MoveBox />
      </Link>
    </div>
  );
};

export default NProduct3;
