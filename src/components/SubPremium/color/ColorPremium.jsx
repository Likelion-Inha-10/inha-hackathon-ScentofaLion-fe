import React from 'react';
import styled from 'styled-components';
import ColorSelect from 'components/ColorSelect';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';

const BottomText = styled.div`
  font-size: ${(props) => props.fontSize || 34}px;
  font-family: 'Frank Ruhl Libre', serif;
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin-left: ${(props) => props.marginLeft || 0}px;
  margin-right: ${(props) => props.marginRight || 0}px;
`;

const PremiumText = styled.div`
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
const ColorPremium = () => {
  let navigate = useNavigate();

  const moveToBack = () => {
    navigate('/home/subscribe');
  };
  const moveToNext = () => {
    navigate('/home/subscribe/premium-product');
  };
  return (
    <div>
      <PremiumText>Premium</PremiumText>
      <ColorSelect />
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

export default ColorPremium;
