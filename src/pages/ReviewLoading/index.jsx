import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { animate } from 'components/Animation/animate';
import Header from 'components/Header';
import NavigationBar from 'components/NavigationBar';
import Button from 'components/Button';

const Text = styled.div`
  margin-top: 30px;
  margin-bottom: 18px;
  font-weight: bolder;
  width: 100vw;
  font-size: 18px;
  text-align: center;
  word-break: keep-all;
  line-height: 19px;
  color: black;
`;

const MainText = styled.div`
  width: 100vw;
  font-size: 12px;
  text-align: center;
  word-break: keep-all;
  font-weight: 100;
  line-height: 19px;
  color: black;
`;

const Box = styled.div`
  height: 400px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: white;
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.1);
  padding-bottom: 30px;
  margin-left: 8vw;
  margin-right: ${(props) => props.margin || 0}vw;
`;

const BoxWrapper = styled.div`
  height: 600px;
  width: 101%;
  justify-content: center;
  margin-left: 10%;
  position: relative;
`;

const BoxText = styled.div`
  width: 70%;
  font-size: 17px;
  text-align: left;
  word-break: keep-all;
  font-weight: 100;
  line-height: 19px;
  padding-bottom: 10px;
`;
const EBoxText = styled.div`
  width: 70%;
  font-size: 25px;
  font-family: 'Frank Ruhl Libre', serif;
  text-align: left;
  word-break: keep-all;
  font-weight: 900;
  line-height: 19px;
  margin-bottom: 20px;
`;

const WhiteBox = styled.div`
  width: 50%;
  height: 410px;
  background-color: white;
  border-radius: 40px;
  display: flex;
  margin-top: 31px;
  margin-left: 10%;
  flex-direction: left;

  position: absolute;
`;

const BlackBox = styled.div`
  width: 50%;
  height: 410px;
  background-color: black;
  border-radius: 40px;
  display: flex;
  margin-top: 31px;
  margin-left: 40%;
  flex-direction: right;
  position: absolute;
`;

const ReviewLoading = () => {
  return (
    <motion.div
      initial={animate.initial}
      animate={animate.animate}
      exit={animate.exit}
    >
      <Header title="Mood Palette" />
      <Text>일상을 향기로 채우다</Text>
      <MainText>
        이번주 사용후기를 알려주시면 <br />
        더욱 정확한 취향저격 제품을 추천해드려요
        <br />
        <br />
        새로운 경험을 원하신다면 <br />
        선택을 변경해보세요
      </MainText>
      <WhiteBox></WhiteBox>
      <BlackBox></BlackBox>
      <BoxWrapper>
        <Button
          marginTop="30"
          width="80"
          height="35"
          focusBackgroundColor="black"
          radius="40"
        >
          <EBoxText>Review</EBoxText>
          <BoxText>이번주 받아보신 제품은 어떠셨나요?</BoxText>
          <BoxText fontWeight="900">리뷰 작성하러 가기</BoxText>
        </Button>
        <Button width="80" height="35" radius="40">
          <EBoxText>New</EBoxText>
          <BoxText>다음주, 다른 카테고리의 제품을 받아보고 싶으신가요?</BoxText>
          <BoxText fontWeight="900">샘플 변경하러 가기</BoxText>
        </Button>
      </BoxWrapper>

      <NavigationBar></NavigationBar>
    </motion.div>
  );
};

export default ReviewLoading;
