import React, { useState } from 'react';
import axios from 'axios';
import Alert from 'components/Alert';
import styled from 'styled-components';
import ColorSelect from 'components/ColorSelect';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom';

const BottomText = styled.div`
  font-size: ${(props) => props.fontSize || 34}px;
  font-family: 'Frank Ruhl Libre', serif;
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin-left: ${(props) => props.marginLeft || 0}px;
  margin-right: ${(props) => props.marginRight || 0}px;
`;

const StandardText = styled.div`
  font-size: 34px;
  font-family: 'Frank Ruhl Libre', serif;
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10%;
  width: 80%;
  height: 10%;
  justify-content: space-between;
  position: fixed;
  bottom: 90px;
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

const ColorStandard = () => {
  const handwash = 'True';
  const diffuser = 'True';
  const handcream = 'True';
  const softner = 'True';
  const perfume = 'False';
  const candle = 'False';
  const room = 'False';
  const bodylotion = 'False';
  const shampoo = 'False';
  const rinse = 'False';
  const bodywash = 'False';
  const bodymist = 'False';
  const { userid } = useParams();
  const { subprice } = useParams();
  let subscribeTitle =
    subprice === '3900'
      ? 'Basic'
      : subprice === '5900'
      ? 'Standard'
      : 'Premium';
  const [userColor, setUserColor] = useState(null);
  let navigate = useNavigate();

  const moveToBack = () => {
    navigate(`/home/${userid}/subscribe`);
  };
  const moveToNext = () => {
    if (userColor === null) {
      return Alert('구독할 색상을 선택해주세요.');
    } else {
      if (subprice === '3900') {
        let price = 3900;
        let user_color = userColor;
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

        navigate(`/home/${userid}/subscribe/${subprice}/${userColor}/done`);
      } else {
        navigate(`/home/${userid}/subscribe/${subprice}/${userColor}`);
      }
    }
  };
  return (
    <div>
      <StandardText>{subscribeTitle}</StandardText>
      <ColorSelect setUserColor={setUserColor} />
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

export default ColorStandard;
