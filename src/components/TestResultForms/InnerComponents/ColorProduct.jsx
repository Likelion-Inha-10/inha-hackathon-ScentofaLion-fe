import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';

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
`;

const ColorProduct = () => {
  return (
    <>
      <Wrapper>
        <ProductCard>
          <MainText>어울리는 향기를 추천해드려요</MainText>
          <Button
            blackButton
            shadow
            width="90"
            fontSize="17"
            marginTop="20"
            marginBottom="10"
            paddingTop="10"
            paddingBottom="10"
            paddingLeft="25"
            paddingRight="25"
          >
            추천 제품 더보기
          </Button>
        </ProductCard>
      </Wrapper>
    </>
  );
};

export default ColorProduct;
