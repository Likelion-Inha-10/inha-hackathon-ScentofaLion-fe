import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import red from './image/red.jpg';
import yellow from './image/yellow.jpg';
import green from './image/green.jpg';
import blue from './image/blue.jpg';
import black from './image/black.jpg';
import white from './image/white.jpg';
import purple from './image/purple.jpg';

const Wrapper = styled.div`
  width: 100%;
  height: 520px;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  box-sizing: content-box;
`;

const ColorMainContainer = styled.div`
  width: 280px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  vertical-align: center;
  margin-top: 70px;
`;

const ImageBox = styled.div`
  width: 280px;
  height: 360px;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.1);
  position: absolute;
  margin-top: 20px;
`;

const ImageThumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(${(props) => props.bright || 70}%);
`;

const Underline = styled.hr`
  width: 240px;
  background-color: ${(props) => props.color || 'black'};
`;

const ColorTextContainer = styled.div`
  min-width: 280px;
  min-height: 400px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  vertical-align: center;
  text-align: center;
  color: ${(props) => props.color || 'black'};
  justify-content: space-between;
`;

const ColorTitle = styled.div`
  font-size: 40px;
  font-weight: 900;
  font-family: 'Frank Ruhl Libre', serif;
  text-align: center;
  color: ${(props) => props.color || 'black'};
`;

const ColorDetail = styled.div`
  font-size: 13px;
  font-weight: 100;
  font-family: 'Noto Sans KR', sans-serif;
  text-align: center;
  line-height: 1.2;
  margin-top: 10px;
`;

const MainScent = styled.div`
  font-size: 35px;
  font-weight: 400;
  font-family: 'Frank Ruhl Libre', serif;
  text-align: center;
`;

const Plus = styled.div`
  font-size: 40px;
  font-weight: 400;
  font-family: 'Frank Ruhl Libre', serif;
  text-align: center;
  margin-top: -10px;
`;

const DetailScent = styled.div`
  font-size: 15px;
  font-weight: 400;
  font-family: 'Frank Ruhl Libre', serif;
  text-align: center;
  margin-bottom: 20px;
`;

const ColorImage = () => {
  const { color } = useParams();

  return (
    <>
      <Wrapper visible={color === 'red'}>
        <ColorMainContainer>
          <ImageBox>
            <ImageThumbnail src={red} />
          </ImageBox>
          <ColorTextContainer color="white">
            <ColorTitle color="#F0213B">FRUITY</ColorTitle>
            <div>
              <ColorDetail>
                사랑스러운 빨강의 이미지를
                <br /> 가지고 계신 당신,
              </ColorDetail>
              <ColorDetail>
                딸기와 체리같은 달콤한 향기로움이
                <br /> 고유의 이미지를 더욱 돋보이게
                <br /> 해줄 수 있을 거예요.
              </ColorDetail>
            </div>
            <Underline color="white" />
            <div>
              <MainScent>STRAWBERRY</MainScent>
              <Plus>+</Plus>
              <DetailScent>LOVELY + FLOWER + CHERRY</DetailScent>
            </div>
            <ColorTitle color="#F0213B">RED</ColorTitle>
          </ColorTextContainer>
        </ColorMainContainer>
      </Wrapper>

      <Wrapper visible={color === 'yellow'}>
        <ColorMainContainer>
          <ImageBox>
            <ImageThumbnail src={yellow} bright="90" />
          </ImageBox>
          <ColorTextContainer color="#0B4262">
            <ColorTitle color="#FFD700">JOYFUL</ColorTitle>
            <div>
              <ColorDetail>
                상큼한 노란빛의 이미지를
                <br /> 가지고 계신 당신,
              </ColorDetail>
              <ColorDetail>
                꿀, 레몬같은 새콤달콤한 향기로움이
                <br /> 고유의 이미지를 더욱 돋보이게
                <br /> 해줄 수 있을 거예요.
              </ColorDetail>
            </div>
            <Underline color="#0B4262" />
            <div>
              <MainScent>LEMON</MainScent>
              <Plus>+</Plus>
              <DetailScent>HONEY + CITRUS + FRUITY</DetailScent>
            </div>
            <ColorTitle color="#FFD700">YELLOW</ColorTitle>
          </ColorTextContainer>
        </ColorMainContainer>
      </Wrapper>

      <Wrapper visible={color === 'green'}>
        <ColorMainContainer>
          <ImageBox>
            <ImageThumbnail src={green} />
          </ImageBox>
          <ColorTextContainer color="white">
            <ColorTitle color="#74B88A">FRESH</ColorTitle>
            <div>
              <ColorDetail>
                싱그러운 초록의 이미지를
                <br /> 가지고 계신 당신,
              </ColorDetail>
              <ColorDetail>
                숲 속 같은 싱그러운 향기로움이
                <br /> 고유의 이미지를 더욱 돋보이게
                <br /> 해줄 수 있을 거예요.
              </ColorDetail>
            </div>
            <Underline color="white" />
            <div>
              <MainScent>FOREST</MainScent>
              <Plus>+</Plus>
              <DetailScent>PINE + WOODY + CHYPRE</DetailScent>
            </div>
            <ColorTitle color="#74B88A">GREEN</ColorTitle>
          </ColorTextContainer>
        </ColorMainContainer>
      </Wrapper>

      <Wrapper visible={color === 'blue'}>
        <ColorMainContainer>
          <ImageBox>
            <ImageThumbnail src={blue} />
          </ImageBox>
          <ColorTextContainer color="white">
            <ColorTitle color="#4D9BC5">COOL</ColorTitle>
            <div>
              <ColorDetail>
                시원한 파랑의 이미지를
                <br /> 가지고 계신 당신,
              </ColorDetail>
              <ColorDetail>
                여름 하늘의 상쾌한 향기로움이
                <br /> 고유의 이미지를 더욱 돋보이게
                <br /> 해줄 수 있을 거예요.
              </ColorDetail>
            </div>
            <Underline color="white" />
            <div>
              <MainScent>OCEAN</MainScent>
              <Plus>+</Plus>
              <DetailScent>AQUA + SKY + SUMMER</DetailScent>
            </div>
            <ColorTitle color="#4D9BC5">BLUE</ColorTitle>
          </ColorTextContainer>
        </ColorMainContainer>
      </Wrapper>

      <Wrapper visible={color === 'black'}>
        <ColorMainContainer>
          <ImageBox>
            <ImageThumbnail src={black} />
          </ImageBox>
          <ColorTextContainer color="white">
            <ColorTitle color="#828282">MODERN</ColorTitle>
            <div>
              <ColorDetail>
                모던한 검정의 이미지를
                <br /> 가지고 계신 당신,
              </ColorDetail>
              <ColorDetail>
                시나몬, 머스크같은 미들톤의 향기로움이
                <br /> 고유의 이미지를 더욱 돋보이게
                <br /> 해줄 수 있을 거예요.
              </ColorDetail>
            </div>
            <Underline color="white" />
            <div>
              <MainScent>CINNAMON</MainScent>
              <Plus>+</Plus>
              <DetailScent>MUSK + LEATHER + DEEP</DetailScent>
            </div>
            <ColorTitle color="#828282">BLACK</ColorTitle>
          </ColorTextContainer>
        </ColorMainContainer>
      </Wrapper>

      <Wrapper visible={color === 'white'}>
        <ColorMainContainer>
          <ImageBox>
            <ImageThumbnail src={white} bright="100" />
          </ImageBox>
          <ColorTextContainer color="black">
            <ColorTitle color="#828282">SNOW</ColorTitle>
            <div>
              <ColorDetail>
                깨끗한 하양의 이미지를
                <br /> 가지고 계신 당신,
              </ColorDetail>
              <ColorDetail>
                새하얀 이불같은 비누의 향기로움이
                <br /> 고유의 이미지를 더욱 돋보이게
                <br /> 해줄 수 있을 거예요.
              </ColorDetail>
            </div>
            <Underline color="black" />
            <div>
              <MainScent>WHITE MUSK</MainScent>
              <Plus>+</Plus>
              <DetailScent>COZY + SOAP + PURE</DetailScent>
            </div>
            <ColorTitle color="#828282">WHITE</ColorTitle>
          </ColorTextContainer>
        </ColorMainContainer>
      </Wrapper>

      <Wrapper visible={color === 'purple'}>
        <ColorMainContainer>
          <ImageBox>
            <ImageThumbnail src={purple} />
          </ImageBox>
          <ColorTextContainer color="white">
            <ColorTitle color="#EDBBEF">SERENE</ColorTitle>
            <div>
              <ColorDetail>
                평화로운 보랏빛의 이미지를
                <br /> 가지고 계신 당신,
              </ColorDetail>
              <ColorDetail>
                라벤더와 허브같은 차분한 향기로움이
                <br /> 고유의 이미지를 더욱 돋보이게
                <br /> 해줄 수 있을 거예요.
              </ColorDetail>
            </div>
            <Underline color="white" />
            <div>
              <MainScent>LAVENDER</MainScent>
              <Plus>+</Plus>
              <DetailScent>HERB + JASMINE + BERRIES</DetailScent>
            </div>
            <ColorTitle color="#EDBBEF">PURPLE</ColorTitle>
          </ColorTextContainer>
        </ColorMainContainer>
      </Wrapper>
    </>
  );
};

export default ColorImage;
