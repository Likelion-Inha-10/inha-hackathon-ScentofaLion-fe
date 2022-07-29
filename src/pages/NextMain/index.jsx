import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { animate } from 'components/Animation/animate';
import Header from 'components/Header';
import { useNavigate, useParams } from 'react-router-dom';
import NavigationBar from 'components/NavigationBar';
import { MdArrowBackIosNew } from 'react-icons/md';
import Blue from '../../images/NextMain/blue.jpeg';

const WeekText = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: center;
  font-family: 'Frank Ruhl Libre', serif;
  font-weight: 900;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const LeftArrowBox = styled.div`
  width: 30px;
  display: flex;
  justify-content: flex-start;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 40%;
`;
const RightArrowBox = styled.div`
  width: 30px;
  display: flex;
  justify-content: flex-end;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 40%;
`;
const MyScentText = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: center;
  font-family: 'Frank Ruhl Libre', serif;
  font-weight: 900;
  margin-top: 50px;
`;
const ColorText = styled.div`
  font-size: 48px;
  display: flex;
  justify-content: center;
  font-family: 'Frank Ruhl Libre', serif;
  font-weight: 900;
  margin-top: 10px;
  color: #4d9bc5;
`;

const KeywordBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 30px;
  margin-right: 40px;
  margin-left: 40px;
`;
const Keyword = styled.div`
  font-size: 18px;
  font-family: 'Frank Ruhl Libre', serif;
  font-weight: 900;
`;

const ImageBox = styled.div`
  width: 60%;
  height: 400px;
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.1);
  border-radius: 41px 0px 41px 41px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 41px 0px 41px 41px;
  object-fit: cover;
`;

const MiddleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
function NextMain() {
  const { userid } = useParams();
  const [userColor, setUserColor] = useState();
  let navigate = useNavigate();

  function moveToNextDetailPage() {
    navigate(`/home/${userid}/next-week`);
  }
  function moveToThisWeekPage() {
    navigate(`/home/${userid}`);
  }

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

  return (
    <motion.div
      initial={animate.initial}
      animate={animate.animate}
      exit={animate.exit}
    >
      <Header title="Mood Palette" />
      <WeekText>Next week</WeekText>

      <MiddleWrapper>
        <LeftArrowBox>
          <MdArrowBackIosNew size="25" onClick={moveToThisWeekPage} />
        </LeftArrowBox>

        <ImageBox>
          <Image src={Blue} onClick={moveToNextDetailPage}></Image>
        </ImageBox>

        <RightArrowBox />
      </MiddleWrapper>

      <MyScentText>My Scent</MyScentText>
      <ColorText>Blue</ColorText>

      <KeywordBox>
        <Keyword>#Aqua</Keyword>
        <Keyword>#Summer</Keyword>
        <Keyword>#Sky</Keyword>
      </KeywordBox>

      <NavigationBar userid={userid} color={userColor} />
    </motion.div>
  );
}

export default NextMain;
