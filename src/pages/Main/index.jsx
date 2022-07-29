import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { motion } from 'framer-motion';
import { animate } from 'components/Animation/animate';
import Header from 'components/Header';
import NavigationBar from 'components/NavigationBar';
import { MdArrowBackIosNew } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';
import Alert from 'components/Alert';
import red from '../../images/ColorTheme//red.jpg';
import yellow from '../../images/ColorTheme//yellow.jpg';
import green from '../../images/ColorTheme//green.jpg';
import blue from '../../images/ColorTheme//blue.jpg';
import black from '../../images/ColorTheme//black.jpg';
import white from '../../images/ColorTheme//white.jpg';
import purple from '../../images/ColorTheme//purple.jpg';
import unknown from '../../images/ColorTheme//unknown.jpg';
import { useNavigate, useParams } from 'react-router-dom';

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
  color: ${(props) => props.color || 'black'};
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

const Wrapper = styled.div`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
`;

function Main() {
  let navigate = useNavigate();
  const { userid } = useParams();
  const [userColor, setUserColor] = useState();
  const [isSubscibe, setIsSubscribe] = useState();

  useEffect(() => {
    console.log(userid);
    axios
      .get(`http://172.104.110.207:8000/account/${userid}/`)
      .then((response) => {
        console.log(response);
        setUserColor(response.data.user_color);
        setIsSubscribe(response.data.sub_date);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function moveToDetailPage() {
    if (isSubscibe === null) {
      return Alert('아직 구독을 하지 않으셨어요.');
    } else {
      navigate(`/home/${userid}/product-detail`);
    }
  }

  function moveToLastWeekPage() {
    navigate(`/home/${userid}/last-main`);
  }

  function moveToNextWeekPage() {
    navigate(`/home/${userid}/next-main`);
  }

  return (
    <motion.div
      initial={animate.initial}
      animate={animate.animate}
      exit={animate.exit}
    >
      <Header title="Mood Palette" />
      <WeekText>This week</WeekText>

      <Wrapper visible={userColor === ''}>
        <MiddleWrapper>
          <ImageBox>
            <Image src={unknown} onClick={moveToDetailPage}></Image>
          </ImageBox>
        </MiddleWrapper>
        <MyScentText>My Scent</MyScentText>
        <ColorText>Unknown</ColorText>
        <KeywordBox>
          <Keyword>#Please</Keyword>
          <Keyword>#Do test</Keyword>
          <Keyword>#First</Keyword>
        </KeywordBox>
      </Wrapper>

      <Wrapper visible={userColor === 'red'}>
        <MiddleWrapper>
          <LeftArrowBox>
            <MdArrowBackIosNew size="25" onClick={moveToLastWeekPage} />
          </LeftArrowBox>
          <ImageBox>
            <Image src={red} onClick={moveToDetailPage}></Image>
          </ImageBox>
          <RightArrowBox>
            <MdArrowForwardIos size="25" onClick={moveToNextWeekPage} />
          </RightArrowBox>
        </MiddleWrapper>
        <MyScentText>My Scent</MyScentText>
        <ColorText color="#F0213B">Red</ColorText>
        <KeywordBox>
          <Keyword>#Lovely</Keyword>
          <Keyword>#Flower</Keyword>
          <Keyword>#Cherry</Keyword>
        </KeywordBox>
      </Wrapper>

      <Wrapper visible={userColor === 'yellow'}>
        <MiddleWrapper>
          <LeftArrowBox>
            <MdArrowBackIosNew size="25" onClick={moveToLastWeekPage} />
          </LeftArrowBox>
          <ImageBox>
            <Image src={yellow} onClick={moveToDetailPage}></Image>
          </ImageBox>
          <RightArrowBox>
            <MdArrowForwardIos size="25" onClick={moveToNextWeekPage} />
          </RightArrowBox>
        </MiddleWrapper>
        <MyScentText>My Scent</MyScentText>
        <ColorText color="#FFD700">Yellow</ColorText>
        <KeywordBox>
          <Keyword>#Honey</Keyword>
          <Keyword>#Citrus</Keyword>
          <Keyword>#Fruity</Keyword>
        </KeywordBox>
      </Wrapper>

      <Wrapper visible={userColor === 'green'}>
        <MiddleWrapper>
          <LeftArrowBox>
            <MdArrowBackIosNew size="25" onClick={moveToLastWeekPage} />
          </LeftArrowBox>
          <ImageBox>
            <Image src={green} onClick={moveToDetailPage}></Image>
          </ImageBox>
          <RightArrowBox>
            <MdArrowForwardIos size="25" onClick={moveToNextWeekPage} />
          </RightArrowBox>
        </MiddleWrapper>
        <MyScentText>My Scent</MyScentText>
        <ColorText color="#339A53">Green</ColorText>
        <KeywordBox>
          <Keyword>#Pine</Keyword>
          <Keyword>#Woody</Keyword>
          <Keyword>#Chypre</Keyword>
        </KeywordBox>
      </Wrapper>

      <Wrapper visible={userColor === 'blue'}>
        <MiddleWrapper>
          <LeftArrowBox>
            <MdArrowBackIosNew size="25" onClick={moveToLastWeekPage} />
          </LeftArrowBox>
          <ImageBox>
            <Image src={blue} onClick={moveToDetailPage}></Image>
          </ImageBox>
          <RightArrowBox>
            <MdArrowForwardIos size="25" onClick={moveToNextWeekPage} />
          </RightArrowBox>
        </MiddleWrapper>
        <MyScentText>My Scent</MyScentText>
        <ColorText color="#2878A2">Blue</ColorText>
        <KeywordBox>
          <Keyword>#Aqua</Keyword>
          <Keyword>#Sky</Keyword>
          <Keyword>#Summer</Keyword>
        </KeywordBox>
      </Wrapper>

      <Wrapper visible={userColor === 'black'}>
        <MiddleWrapper>
          <LeftArrowBox>
            <MdArrowBackIosNew size="25" onClick={moveToLastWeekPage} />
          </LeftArrowBox>
          <ImageBox>
            <Image src={black} onClick={moveToDetailPage}></Image>
          </ImageBox>
          <RightArrowBox>
            <MdArrowForwardIos size="25" onClick={moveToNextWeekPage} />
          </RightArrowBox>
        </MiddleWrapper>
        <MyScentText>My Scent</MyScentText>
        <ColorText color="black">Black</ColorText>
        <KeywordBox>
          <Keyword>#Musk</Keyword>
          <Keyword>#Leather</Keyword>
          <Keyword>#Deep</Keyword>
        </KeywordBox>
      </Wrapper>

      <Wrapper visible={userColor === 'white'}>
        <MiddleWrapper>
          <LeftArrowBox>
            <MdArrowBackIosNew size="25" onClick={moveToLastWeekPage} />
          </LeftArrowBox>
          <ImageBox>
            <Image src={white} onClick={moveToDetailPage}></Image>
          </ImageBox>
          <RightArrowBox>
            <MdArrowForwardIos size="25" onClick={moveToNextWeekPage} />
          </RightArrowBox>
        </MiddleWrapper>
        <MyScentText>My Scent</MyScentText>
        <ColorText color="#828282">White</ColorText>
        <KeywordBox>
          <Keyword>#Cozy</Keyword>
          <Keyword>#Soap</Keyword>
          <Keyword>#Pure</Keyword>
        </KeywordBox>
      </Wrapper>

      <Wrapper visible={userColor === 'purple'}>
        <MiddleWrapper>
          <LeftArrowBox>
            <MdArrowBackIosNew size="25" onClick={moveToLastWeekPage} />
          </LeftArrowBox>
          <ImageBox>
            <Image src={purple} onClick={moveToDetailPage}></Image>
          </ImageBox>
          <RightArrowBox>
            <MdArrowForwardIos size="25" onClick={moveToNextWeekPage} />
          </RightArrowBox>
        </MiddleWrapper>
        <MyScentText>My Scent</MyScentText>
        <ColorText color="#7B78B8">Purple</ColorText>
        <KeywordBox>
          <Keyword>#Herb</Keyword>
          <Keyword>#Jasmine</Keyword>
          <Keyword>#Berries</Keyword>
        </KeywordBox>
      </Wrapper>
      <NavigationBar color={userColor} userid={userid} />
    </motion.div>
  );
}

export default Main;
