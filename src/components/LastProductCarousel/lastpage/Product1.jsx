import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import { Link, useParams } from 'react-router-dom';
import WashImg from '../../../images/LastMain/purple_handwash.png';
import DiffuserImg from '../../../images/LastMain/purple_diffuser.png';
import CreamImg from '../../../images/LastMain/purple_handcream.png';

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

const Product1 = () => {
  const { userid } = useParams();

  return (
    <div>
      <Header title="Mood Palette" />

      <WhiteBox>
        <Wrapper>
          <WeekText>Last week</WeekText>
          <Underline />
        </Wrapper>

        <ProductWrapper>
          <ImgBox>
            <Image src={DiffuserImg}></Image>
          </ImgBox>

          <TextBox>
            <LineName>디퓨저</LineName>

            <ProductName>Art Box 허브타임 실내 디퓨저</ProductName>
          </TextBox>
        </ProductWrapper>

        <ProductWrapper>
          <ImgBox>
            <Image src={WashImg}></Image>
          </ImgBox>

          <TextBox>
            <LineName>핸드워시</LineName>

            <ProductName>
              그린코스 보타니컬테라피 포밍 핸드워시 프렌치 라벤더
            </ProductName>
          </TextBox>
        </ProductWrapper>

        <ProductWrapper>
          <ImgBox>
            <Image src={CreamImg}></Image>
          </ImgBox>

          <TextBox>
            <LineName>핸드크림</LineName>

            <ProductName>데일리 비건 핸드 세이버</ProductName>
          </TextBox>
        </ProductWrapper>
      </WhiteBox>

      <Link to={`/home/${userid}/last-main`}>
        <MoveBox />
      </Link>
    </div>
  );
};

export default Product1;
