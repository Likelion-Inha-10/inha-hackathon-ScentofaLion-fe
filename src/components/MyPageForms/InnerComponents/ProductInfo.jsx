/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import productImg from './product.png';

const Wrapper = styled.div`
  width: 100%;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  box-sizing: content-box;
  margin-top: 40px;
`;

const ContainerTitle = styled.div`
  width: 75%;
  font-size: 18px;
  font-weight: 600;
  font-family: 'Noto Sans KR', sans-serif;
  text-align: left;
  color: black;
`;

const NotSubscribeContainer = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 25px;
  background-color: white;
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.1);
  font-size: 17px;
  font-weight: 600;
  font-family: 'Noto Sans KR', sans-serif;
  margin-top: 20px;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: left;
  overflow: scroll;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const ProductBox = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  background-color: white;
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.1);
  padding-bottom: 30px;
  margin-left: 8vw;
  margin-right: ${(props) => props.margin || 0}vw;
`;

const ImageContainer = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 25px;
  overflow: hidden;
`;

const ImageBox = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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

const ProductInfo = (props) => {
  let productArray = [];
  const [productCode, setProductCode] = useState();
  useEffect(() => {
    axios
      .get(`http://172.104.110.207:8000/product/white/`)
      .then((response) => {
        console.log(response);
        productArray = response.data;
        console.log(productArray);
        const storeCode = (
          <ProductBox>
            <ImageContainer>
              <ImageBox src={productArray[1].product_img} />
            </ImageContainer>
            <ProductTitle>{productArray[1].product_type}</ProductTitle>
            <ProductName>{productArray[1].product_name}</ProductName>
          </ProductBox>
        );
        setProductCode(storeCode);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Wrapper visible={props.subPrice === null}>
        <ContainerTitle>구독 제품 목록</ContainerTitle>
        <NotSubscribeContainer>
          아직 구독을 하지 않았어요.
        </NotSubscribeContainer>
      </Wrapper>

      <Wrapper visible={props.subPrice !== null}>
        <ContainerTitle>구독 제품 목록</ContainerTitle>
        <Container>
          {productCode}
          <ProductBox>
            <ImageContainer>
              <ImageBox src={productImg} />
            </ImageContainer>
            <ProductTitle>디퓨저</ProductTitle>
            <ProductName>포맨트 올라운드 퍼퓸 코튼키스</ProductName>
          </ProductBox>
          <ProductBox margin="8">
            <ImageContainer>
              <ImageBox src={productImg} />
            </ImageContainer>
            <ProductTitle>디퓨저</ProductTitle>
            <ProductName>포맨트 올라운드 퍼퓸 코튼키스</ProductName>
          </ProductBox>
        </Container>
      </Wrapper>
    </>
  );
};

export default ProductInfo;
