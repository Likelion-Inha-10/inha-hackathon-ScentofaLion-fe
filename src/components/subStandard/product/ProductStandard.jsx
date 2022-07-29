import React, { useState } from 'react';
import axios from 'axios';
import Alert from 'components/Alert';
import styled from 'styled-components';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Button from 'components/Button';
import { useNavigate, useParams } from 'react-router-dom';

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10%;
  margin-top: 185px;
  width: 80%;
  height: 10%;
  justify-content: space-between;
  position: fixed;
  bottom: 100px;
`;

const BottomText = styled.div`
  font-size: ${(props) => props.fontSize || 34}px;
  font-family: 'Frank Ruhl Libre', serif;
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin-left: ${(props) => props.marginLeft || 0}px;
  margin-right: ${(props) => props.marginRight || 0}px;
`;

const BackWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const TextBox = styled.div`
  font-size: ${(props) => props.fontSize || 34}px;
  font-family: 'Frank Ruhl Libre', serif;
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin-left: ${(props) => props.marginLeft || 0}px;
  margin-right: ${(props) => props.marginRight || 0}px;
  margin-bottom: 10px;
`;

const Explain = styled.div`
  font-size: 15px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 800;
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;

const ColorContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ColorWrapper = styled.div`
  width: 95vw;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20%;
`;

const ProductStandard = () => {
  let navigate = useNavigate();
  const { userid } = useParams();
  const { subprice } = useParams();
  const { color } = useParams();
  const handwash = 'True';
  const diffuser = 'True';
  const handcream = 'True';
  const softner = 'True';
  const perfume = subprice === '9900' ? 'True' : 'False';
  const [candle, setCandle] = useState('False');
  const [room, setRoom] = useState('False');
  const [bodylotion, setBodylotion] = useState('False');
  const [shampoo, setShampoo] = useState('False');
  const [rinse, setRinse] = useState('False');
  const [bodywash, setBodywash] = useState('False');
  const [bodymist, setBodymist] = useState('False');
  let subscribeCount = subprice === '5900' ? 2 : 3;
  let subscribeTitle =
    subprice === '3900'
      ? 'Basic'
      : subprice === '5900'
      ? 'Standard'
      : 'Premium';

  const moveToBack = () => {
    navigate(`/home/${userid}/subscribe/${subprice}`);
  };

  const moveToNext = () => {
    let selectedCounter =
      (candle === 'True' ? 1 : 0) +
      (room === 'True' ? 1 : 0) +
      (bodylotion === 'True' ? 1 : 0) +
      (shampoo === 'True' ? 1 : 0) +
      (rinse === 'True' ? 1 : 0) +
      (bodywash === 'True' ? 1 : 0) +
      (bodymist === 'True' ? 1 : 0);
    if (selectedCounter > subscribeCount) {
      return Alert(`제품을 ${subscribeCount}개만 선택해주세요.`);
    } else if (selectedCounter < subscribeCount) {
      return Alert(`제품을 ${subscribeCount}개 선택해주세요.`);
    } else {
      let user_color = color;
      let price = subprice === '5900' ? 5900 : 9900;

      axios
        .patch(`http://172.104.110.207:8000/account/${userid}/`, {
          user_color,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });

      axios
        .post(`http://172.104.110.207:8000/sub/${userid}/`, {
          price,
          diffuser,
          handwash,
          handcream,
          softner,
          perfume,
          shampoo,
          rinse,
          bodywash,
          candle,
          room,
          bodymist,
          bodylotion,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.message);
        });

      navigate(`/home/${userid}/subscribe/${subprice}/${color}/done`);
      return Alert('구독이 완료되었습니다.');
    }
  };

  const changeCandle = () => {
    if (candle === 'True') {
      setCandle('False');
    } else {
      setCandle('True');
    }
  };

  const changeRoom = () => {
    if (room === 'True') {
      setRoom('False');
    } else {
      setRoom('True');
    }
  };

  const changeBodylotion = () => {
    if (bodylotion === 'True') {
      setBodylotion('False');
    } else {
      setBodylotion('True');
    }
  };

  const changeShampoo = () => {
    if (shampoo === 'True') {
      setShampoo('False');
    } else {
      setShampoo('True');
    }
  };

  const changeRinse = () => {
    if (rinse === 'True') {
      setRinse('False');
    } else {
      setRinse('True');
    }
  };

  const changeBodywash = () => {
    if (bodywash === 'True') {
      setBodywash('False');
    } else {
      setBodywash('True');
    }
  };

  const changeBodymist = () => {
    if (bodymist === 'True') {
      setBodymist('False');
    } else {
      setBodymist('True');
    }
  };

  return (
    <div>
      <Wrapper>
        <TextBox>{subscribeTitle}</TextBox>
        <TextBox>Select Products</TextBox>
        <Explain>구독할 제품을 {subscribeCount}개 선택해주세요</Explain>
      </Wrapper>

      <ColorContainer>
        <ColorWrapper>
          <Button
            width="40"
            fontSize="18"
            backgroundColor="white"
            fontColor="black"
            paddingTop="10"
            paddingBottom="10"
            radius="25"
            shadow
            onClick={changeCandle}
            clicked
            isClicked={candle === 'True' ? 1 : 0}
          >
            캔들
          </Button>

          <Button
            width="40"
            fontSize="18"
            backgroundColor="white"
            fontColor="black"
            paddingTop="10"
            paddingBottom="10"
            radius="25"
            shadow
            onClick={changeRoom}
            clicked
            isClicked={room === 'True' ? 1 : 0}
          >
            룸스프레이
          </Button>

          <Button
            width="40"
            fontSize="18"
            backgroundColor="white"
            fontColor="black"
            paddingTop="10"
            paddingBottom="10"
            radius="25"
            marginTop="25"
            shadow
            onClick={changeBodylotion}
            clicked
            isClicked={bodylotion === 'True' ? 1 : 0}
          >
            바디로션
          </Button>

          <Button
            width="40"
            fontSize="18"
            backgroundColor="white"
            fontColor="black"
            paddingTop="10"
            paddingBottom="10"
            radius="25"
            marginTop="25"
            shadow
            onClick={changeShampoo}
            clicked
            isClicked={shampoo === 'True' ? 1 : 0}
          >
            샴푸
          </Button>

          <Button
            width="40"
            fontSize="18"
            backgroundColor="white"
            fontColor="black"
            paddingTop="10"
            paddingBottom="10"
            radius="25"
            marginTop="25"
            shadow
            onClick={changeRinse}
            clicked
            isClicked={rinse === 'True' ? 1 : 0}
          >
            린스
          </Button>

          <Button
            width="40"
            fontSize="18"
            backgroundColor="white"
            fontColor="black"
            paddingTop="10"
            paddingBottom="10"
            radius="25"
            marginTop="25"
            shadow
            onClick={changeBodywash}
            clicked
            isClicked={bodywash === 'True' ? 1 : 0}
          >
            바디워시
          </Button>

          <Button
            width="40"
            fontSize="18"
            backgroundColor="white"
            fontColor="black"
            paddingTop="10"
            paddingBottom="10"
            radius="25"
            marginTop="25"
            shadow
            onClick={changeBodymist}
            clicked
            isClicked={bodymist === 'True' ? 1 : 0}
          >
            바디미스트
          </Button>
        </ColorWrapper>
      </ColorContainer>

      <BottomWrapper>
        <BackWrapper onClick={moveToBack}>
          <AiOutlineArrowLeft />
          <BottomText fontSize="25" marginLeft="20">
            {' '}
            Back
          </BottomText>
        </BackWrapper>

        <NextWrapper onClick={moveToNext}>
          <BottomText fontSize="25" marginRight="20">
            {' '}
            Next
          </BottomText>
          <AiOutlineArrowRight />
        </NextWrapper>
      </BottomWrapper>
    </div>
  );
};

export default ProductStandard;
