import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  box-sizing: content-box;
  margin-top: 30px;
`;

const Container = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ProfileColorRed = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: linear-gradient(to top, #f0213b 0%, rgba(0, 0, 0, 0) 100%);
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.1);
`;

const ProfileColorYellow = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: linear-gradient(to top, #ffd700 0%, rgba(0, 0, 0, 0) 100%);
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.1);
`;

const ProfileColorGreen = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: linear-gradient(to top, #339a53 0%, rgba(0, 0, 0, 0) 100%);
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.1);
`;

const ProfileColorBlue = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: linear-gradient(to top, #2878a2 0%, rgba(0, 0, 0, 0) 100%);
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.1);
`;

const ProfileColorBlack = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: linear-gradient(to top, black 0%, rgba(0, 0, 0, 0) 100%);
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.1);
`;

const ProfileColorWhite = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: linear-gradient(to top, white 0%, rgba(0, 0, 0, 0) 100%);
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.1);
`;

const ProfileColorPurple = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: linear-gradient(to top, #7b78b8 0%, rgba(0, 0, 0, 0) 100%);
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.1);
`;

const TextWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
`;

const ProfileTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  font-family: 'Noto Sans KR', sans-serif;
  color: black;
`;

const ColorText = styled.div`
  font-size: 45px;
  font-weight: 900;
  font-family: 'Frank Ruhl Libre', serif;
  color: ${(props) => props.color || 'black'};
  margin-top: 5px;
`;

const Profile = () => {
  const { color } = useParams('color');

  return (
    <>
      <Wrapper visible={color === 'red'}>
        <Container>
          <ProfileColorRed />
          <TextWrapper>
            <ProfileTitle>Moody님의 향기</ProfileTitle>
            <ColorText color={'#F0213B'}>{color.toUpperCase()}</ColorText>
          </TextWrapper>
        </Container>
      </Wrapper>

      <Wrapper visible={color === 'yellow'}>
        <Container>
          <ProfileColorYellow />
          <TextWrapper>
            <ProfileTitle>Moody님의 향기</ProfileTitle>
            <ColorText color={'#FFD700'}>{color.toUpperCase()}</ColorText>
          </TextWrapper>
        </Container>
      </Wrapper>

      <Wrapper visible={color === 'green'}>
        <Container>
          <ProfileColorGreen />
          <TextWrapper>
            <ProfileTitle>Moody님의 향기</ProfileTitle>
            <ColorText color={'#339A53'}>{color.toUpperCase()}</ColorText>
          </TextWrapper>
        </Container>
      </Wrapper>

      <Wrapper visible={color === 'blue'}>
        <Container>
          <ProfileColorBlue />
          <TextWrapper>
            <ProfileTitle>Moody님의 향기</ProfileTitle>
            <ColorText color={'#2878a2'}>{color.toUpperCase()}</ColorText>
          </TextWrapper>
        </Container>
      </Wrapper>

      <Wrapper visible={color === 'black'}>
        <Container>
          <ProfileColorBlack />
          <TextWrapper>
            <ProfileTitle>Moody님의 향기</ProfileTitle>
            <ColorText color={'black'}>{color.toUpperCase()}</ColorText>
          </TextWrapper>
        </Container>
      </Wrapper>

      <Wrapper visible={color === 'white'}>
        <Container>
          <ProfileColorWhite />
          <TextWrapper>
            <ProfileTitle>Moody님의 향기</ProfileTitle>
            <ColorText color={'#828282'}>{color.toUpperCase()}</ColorText>
          </TextWrapper>
        </Container>
      </Wrapper>

      <Wrapper visible={color === 'purple'}>
        <Container>
          <ProfileColorPurple />
          <TextWrapper>
            <ProfileTitle>Moody님의 향기</ProfileTitle>
            <ColorText color={'#7B78B8'}>{color.toUpperCase()}</ColorText>
          </TextWrapper>
        </Container>
      </Wrapper>
    </>
  );
};

export default Profile;
