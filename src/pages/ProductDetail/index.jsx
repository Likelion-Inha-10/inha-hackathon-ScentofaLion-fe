import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { animate } from 'components/Animation/animate';
import Header from 'components/Header';
import NavigationBar from 'components/NavigationBar';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const WhiteBox = styled.div`
  width: 84%;
  height: 550px;
  background-color: white;
  border-radius: 41px 0px 41px 41px;
  display: flex;
  margin-top: 20px;
  margin-left: 7%;
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
  margin-bottom: 30px;
`;

const LineName = styled.div`
  font-size: 12px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 800;
  color: #595959;
  margin-bottom: 13px;
`;

const ProductName = styled.div`
  width: 75%;
  font-size: 15px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  word-break: keep-all;
  line-height: 1.3;
  color: black;
  margin-bottom: 6px;
`;

const MoveBox = styled.div`
  width: 90%;
  height: 550px;
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
  padding-top: 10px;
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

const ProductDetail = () => {
  let productArray = [];
  const { userid } = useParams();
  const [userColor, setUserColor] = useState();
  const [productCode, setProductCode] = useState();

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

  useEffect(() => {
    axios
      .get(`https://moodpalette.b-cdn.net/product/${userColor}/`)
      .then((response) => {
        console.log(response);
        productArray = response.data;
        console.log(productArray);
        const storeCode = (
          <>
            <ProductWrapper>
              <ImgBox>
                <Image
                  src={
                    'https://moodpalette.b-cdn.net/' +
                    productArray[6].product_img
                  }
                ></Image>
              </ImgBox>

              <TextBox>
                <LineName>{productArray[6].product_type}</LineName>
                <ProductName>{productArray[6].product_name}</ProductName>
              </TextBox>
            </ProductWrapper>
            <ProductWrapper>
              <ImgBox>
                <Image
                  src={
                    'https://moodpalette.b-cdn.net/' +
                    productArray[8].product_img
                  }
                ></Image>
              </ImgBox>

              <TextBox>
                <LineName>{productArray[8].product_type}</LineName>
                <ProductName>{productArray[8].product_name}</ProductName>
              </TextBox>
            </ProductWrapper>
            <ProductWrapper>
              <ImgBox>
                <Image
                  src={
                    'https://moodpalette.b-cdn.net/' +
                    productArray[0].product_img
                  }
                ></Image>
              </ImgBox>

              <TextBox>
                <LineName>{productArray[0].product_type}</LineName>
                <ProductName>{productArray[0].product_name}</ProductName>
              </TextBox>
            </ProductWrapper>
          </>
        );
        setProductCode(storeCode);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userColor]);

  return (
    <motion.div
      initial={animate.initial}
      animate={animate.animate}
      exit={animate.exit}
    >
      <Header title="Mood Palette" />

      <WhiteBox>
        <Wrapper>
          <WeekText>This week</WeekText>
          <Underline />
        </Wrapper>
        {productCode}
      </WhiteBox>

      <Link to={`/home/${userid}`}>
        <MoveBox />
      </Link>

      <NavigationBar userid={userid} color={userColor} />
    </motion.div>
  );
};

export default ProductDetail;
