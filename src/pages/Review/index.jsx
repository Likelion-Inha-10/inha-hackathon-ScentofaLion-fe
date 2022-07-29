import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from 'components/Header';
import { useParams } from 'react-router-dom';
import CandleImg from '../../images/Review/Blue_candle.png';
import BodyWashImg from '../../images/Review/Blue_bodywash.png';
import Alert from '../../components/Alert';
import NavigationBar from 'components/NavigationBar';

const WhiteBox = styled.div`
  width: 90%;
  height: 88%;
  background-color: white;
  border-radius: 41px 41px 41px 41px;
  display: flex;
  margin-top: 20px;
  margin-left: 5%;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);
  flex-direction: column;
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
  margin-bottom: 6px;
  word-break: keep-all;
  line-height: 1.2;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 40px;
  margin-top: 50px;
  margin-bottom: 80px;
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
  object-fit: cover;
`;

const KeywordWrapper = styled.div`
  width: auto;
  height: 25px;
  padding-left: 45px;
  padding-right: 30px;
  padding-bottom: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CheckBox = styled.button`
  width: 18px;
  height: 18px;
  color: black;
  background-color: white;
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 10px;
  margin-right: 10px;
`;

const Underline = styled.hr`
  width: 84%;
  margin-top: 48px;
  margin-bottom: 10px;
`;

const Review = () => {
  const { userid } = useParams();
  const [userColor, setUserColor] = useState();

  useEffect(() => {
    axios
      .get(`https://moodpalette.b-cdn.net/account/${userid}/`)
      .then((response) => {
        console.log(response);
        setUserColor(response.data.user_color);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onClickSubmit = () => {
    Alert('현재 리뷰 작성 기간이 아닙니다');
  };

  return (
    <>
      <Header title="Mood Palette" />

      <WhiteBox>
        <ProductWrapper>
          <ImgBox>
            <Image src={CandleImg} />
          </ImgBox>

          <TextBox>
            <LineName>디퓨저</LineName>
            <ProductName>포맨트 올라운드 퍼퓸 코튼키스</ProductName>
          </TextBox>
        </ProductWrapper>

        <KeywordWrapper>
          <CheckBox onClick={onClickSubmit}> </CheckBox>#시원함
          <CheckBox onClick={onClickSubmit}></CheckBox>#차가움
          <CheckBox onClick={onClickSubmit}></CheckBox>#신선함
        </KeywordWrapper>

        <KeywordWrapper>
          <CheckBox onClick={onClickSubmit}></CheckBox>#아쿠아
          <CheckBox onClick={onClickSubmit}></CheckBox>#샹쾌함
          <CheckBox onClick={onClickSubmit}></CheckBox>#청량함
        </KeywordWrapper>

        <KeywordWrapper>
          <CheckBox onClick={onClickSubmit}></CheckBox>#여름밤
          <CheckBox onClick={onClickSubmit}></CheckBox>#파도향
          <CheckBox onClick={onClickSubmit}></CheckBox>#밤바다
        </KeywordWrapper>
        <Underline />

        <ProductWrapper>
          <ImgBox>
            <Image src={BodyWashImg} />
          </ImgBox>

          <TextBox>
            <LineName>바디워시</LineName>
            <ProductName>
              아쿠아 디 파르마미르토 <br /> 디 파나레아 바디 워시
            </ProductName>
          </TextBox>
        </ProductWrapper>
        <KeywordWrapper>
          <CheckBox onClick={onClickSubmit}></CheckBox>#시원함
          <CheckBox onClick={onClickSubmit}></CheckBox>#차가움
          <CheckBox onClick={onClickSubmit}></CheckBox>#신선함
        </KeywordWrapper>

        <KeywordWrapper>
          <CheckBox onClick={onClickSubmit}></CheckBox>#아쿠아
          <CheckBox onClick={onClickSubmit}></CheckBox>#샹쾌함
          <CheckBox onClick={onClickSubmit}></CheckBox>#청량함
        </KeywordWrapper>

        <KeywordWrapper>
          <CheckBox onClick={onClickSubmit}></CheckBox>#여름밤
          <CheckBox onClick={onClickSubmit}></CheckBox>#파도향
          <CheckBox onClick={onClickSubmit}></CheckBox>#밤바다
        </KeywordWrapper>
      </WhiteBox>

      <NavigationBar color={userColor} userid={userid} />
    </>
  );
};

export default Review;
