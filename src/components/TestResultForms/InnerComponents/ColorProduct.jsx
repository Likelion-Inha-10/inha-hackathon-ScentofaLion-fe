import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

// 제품이 담길 부분은 추후에 api 연동시에 작성 예정

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: content-box;
  margin-top: 50px;
`;

const ProductCard = styled.div`
  width: 90%;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: white;
  border-radius: 25px;
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.1);
`;

const MainText = styled.div`
  width: 100%;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 800;
  font-size: 17px;
  word-break: keep-all;
  line-height: 1.5;
  color: black;
  margin-bottom: 20px;
`;

const ProductInfoBox = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 25px;
  overflow: hidden;
`;

const ImageBox = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductTitle = styled.div`
  width: 70%;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Noto Sans KR', sans-serif;
  text-align: left;
  color: #828282;
`;

const ProductName = styled.div`
  width: 70%;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Noto Sans KR', sans-serif;
  text-align: left;
  line-height: 1.2;
  word-break: keep-all;
  color: black;
  margin-top: 10px;
`;

const ColorProduct = () => {
  let productArray = [];
  const { color } = useParams();
  const [productCode, setProductCode] = useState();

  useEffect(() => {
    axios
      .get(`/product/${color}/`)
      .then((response) => {
        console.log(response);
        productArray = response.data;
        console.log(productArray);
        const storeCode = (
          <>
            <ProductInfoBox>
              <ImageContainer>
                <ImageBox
                  src={
                    'https://moodpalette.b-cdn.net/' +
                    productArray[6].product_img
                  }
                />
              </ImageContainer>
              <TextWrapper>
                <ProductTitle>{productArray[6].product_type}</ProductTitle>
                <ProductName>{productArray[6].product_name}</ProductName>
              </TextWrapper>
            </ProductInfoBox>
            <ProductInfoBox>
              <ImageContainer>
                <ImageBox
                  src={
                    'https://moodpalette.b-cdn.net/' +
                    productArray[0].product_img
                  }
                />
              </ImageContainer>
              <TextWrapper>
                <ProductTitle>{productArray[0].product_type}</ProductTitle>
                <ProductName>{productArray[0].product_name}</ProductName>
              </TextWrapper>
            </ProductInfoBox>
            <ProductInfoBox>
              <ImageContainer>
                <ImageBox
                  src={
                    'https://moodpalette.b-cdn.net/' +
                    productArray[8].product_img
                  }
                />
              </ImageContainer>
              <TextWrapper>
                <ProductTitle>{productArray[8].product_type}</ProductTitle>
                <ProductName>{productArray[8].product_name}</ProductName>
              </TextWrapper>
            </ProductInfoBox>
          </>
        );
        setProductCode(storeCode);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Wrapper>
        <ProductCard>
          <MainText>어울리는 향기를 추천해드려요</MainText>
          {productCode}
        </ProductCard>
      </Wrapper>
    </>
  );
};

export default ColorProduct;
