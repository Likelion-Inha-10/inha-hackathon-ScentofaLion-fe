import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { animate } from 'components/Animation/animate';
import Header from 'components/Header';
import NavigationBar from 'components/NavigationBar';
import Button from 'components/Button';
import { useNavigate, useParams } from 'react-router-dom';
import Alert from 'components/Alert';

const Wrapper = styled.div`
  width: 100vw;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

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

const Container = styled.div`
  width: 80%;
  height: 410px;
  overflow: hidden;
`;

const BoxWrapper = styled.div`
  height: 600px;
  width: 80%;
  justify-content: center;
  position: absolute;
  top: 270px;
  overflow: hidden;
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
  margin-left: 30%;
  flex-direction: right;
  position: absolute;
`;

const BackWrapper = styled.div`
  width: 100%;
  height: 100px;
  overflow: hidden;
`;

const ReviewLoading = () => {
  let navigate = useNavigate();
  const { userid } = useParams();
  const [userColor, setUserColor] = useState();

  useEffect(() => {
    axios
      .get(`http://172.104.110.207:8000/account/${userid}/`)
      .then((response) => {
        console.log(response);
        setUserColor(response.data.user_color);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const moveToReviewPage = () => {
    navigate(`/home/${userid}/review`);
  };
  const moveToSampleChangePage = () => {
    return Alert('현재 샘플 변경 기간이 아닙니다.');
  };

  return (
    <motion.div
      initial={animate.initial}
      animate={animate.animate}
      exit={animate.exit}
    >
      <Header title="Mood Palette" />
      <Wrapper>
        <Text>일상을 향기로 채우다</Text>
        <MainText>
          이번주 사용후기를 알려주시면 <br />
          더욱 정확한 취향저격 제품을 추천해드려요
          <br />
          <br />
          새로운 경험을 원하신다면 <br />
          선택을 변경해보세요
        </MainText>
        <Container>
          <BackWrapper>
            <WhiteBox></WhiteBox>
            <BlackBox></BlackBox>
          </BackWrapper>
          <BoxWrapper>
            <Button
              marginTop="30"
              width="100"
              height="35"
              focusBackgroundColor="black"
              radius="40"
              onClick={moveToReviewPage}
            >
              <EBoxText>Review</EBoxText>
              <BoxText>이번주 받아보신 제품은 어떠셨나요?</BoxText>
              <BoxText fontWeight="900">리뷰 작성하러 가기</BoxText>
            </Button>
            <Button
              backgroundColor="black"
              fontColor="white"
              focusBackgroundColor="black"
              width="100"
              height="35"
              radius="40"
              onClick={moveToSampleChangePage}
            >
              <EBoxText>New</EBoxText>
              <BoxText>
                다음주, 다른 카테고리의 제품을 받아보고 싶으신가요?
              </BoxText>
              <BoxText fontWeight="900">샘플 변경하러 가기</BoxText>
            </Button>
          </BoxWrapper>
        </Container>
      </Wrapper>
      <NavigationBar userid={userid} color={userColor} />
    </motion.div>
  );
};

export default ReviewLoading;
