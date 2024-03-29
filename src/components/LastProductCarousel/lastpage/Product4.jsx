import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import { Link, useParams } from 'react-router-dom';
import MistImg from '../../../images/LastMain/purple_bodymist.png';
import FabricImg from '../../../images/LastMain/purple_softner.png';
import PerFumeImg from '../../../images/LastMain/purple_perfume.png';

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

const Product4 = () => {
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
            <Image src={MistImg}></Image>
          </ImgBox>

          <TextBox>
            <LineName>바디미스트</LineName>

            <ProductName>
              터치 소울에어리 퍼퓸 올 오버 바디스프레이그린부케
            </ProductName>
          </TextBox>
        </ProductWrapper>

        <ProductWrapper>
          <ImgBox>
            <Image src={FabricImg}></Image>
          </ImgBox>

          <TextBox>
            <LineName>섬유유연제</LineName>

            <ProductName>
              다우니 초고농축 섬유유연제 퍼플 화이트티와 릴리향
            </ProductName>
          </TextBox>
        </ProductWrapper>

        <ProductWrapper>
          <ImgBox>
            <Image src={PerFumeImg}></Image>
          </ImgBox>

          <TextBox>
            <LineName>향수</LineName>

            <ProductName>아리아나그란데 알이엠 오 드 퍼퓸</ProductName>
          </TextBox>
        </ProductWrapper>
      </WhiteBox>

      <Link to={`/home/${userid}/last-main`}>
        <MoveBox />
      </Link>
    </div>
  );
};

export default Product4;
