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
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  box-sizing: content-box;
  background-color: yellow;
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

const InfoCard = styled.div`
  width: 90%;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 25px;
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.1);
  margin-top: 50px;
`;

const InfoDetailWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoDetail = styled.li`
  width: 100%;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  word-break: keep-all;
  line-height: 1.5;
  text-indent: -20px;
  padding-left: 20px;
  padding-right: -20px;
  margin-bottom: 10px;
  color: ${(props) => props.color || 'black'};
`;

const InfoColorTitle = styled.div`
  font-size: 35px;
  font-weight: 800;
  font-family: 'Frank Ruhl Libre', serif;
  text-align: center;
  color: ${(props) => props.color || 'black'};
  margin-top: 30px;
  margin-bottom: 30px;
`;

const InfoColorSubtitle = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  text-align: center;
  line-height: 1.5;
  color: ${(props) => props.color || 'black'};
`;

const ColorInfo = () => {
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
        <InfoCard>
          <InfoDetailWrapper>
            <InfoDetail>
              사랑스러운 당신은 달콤한 매력을 잔뜩 머금고 있어요. 당신은 넘치는
              사랑을 나눠주는 따듯한 사람이군요.
            </InfoDetail>
            <InfoDetail>
              당신의 열정적인 분위기는 주변인의 마음에 불을 지펴요.
            </InfoDetail>
            <InfoDetail>
              어딜가나 눈에 띄고 행동이 앞서는 당신. 그렇게 끊임없이 도전하세요.
              당신의 열정이 언젠가 밝게 빛날테니까요.
            </InfoDetail>
            <InfoDetail>
              당신에게는 향긋하고 달콤한 과일의 향기가 나요. 때로는 상큼함도요.
            </InfoDetail>
            <InfoDetail>
              당신은 주변인에게 마성의 매력을 풍기고 있어요. 빨강 Mood Palette를
              사용해보세요. 당신의 사랑스러운 향기와 잘어울려요.
            </InfoDetail>
            <InfoDetail>
              때로는 공격적으로 보일 수도 있어요. 당신에게 필요한 처방은
              시각보다 후각! 후각을 활용해 당신의 Mood를 건네보아요.
            </InfoDetail>
            <InfoColorTitle color="#F0213B">FRUITY RED</InfoColorTitle>
            <InfoColorSubtitle>
              나와 비슷한 유형의 사람들은
              <br />
              사랑의 에너지를 풍기며 살아가요.
            </InfoColorSubtitle>
          </InfoDetailWrapper>
        </InfoCard>
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
        <InfoCard>
          <InfoDetailWrapper>
            <InfoDetail>
              에너지가 넘치는 당신, 당신의 긍정적 에너지는 태양 빛처럼 주변인을
              밝혀줍니다.
            </InfoDetail>
            <InfoDetail>
              서로 도우며 살고 싶다는 이상을 가지고 살아갑니다. 낙천적이며
              쾌활합니다.
            </InfoDetail>
            <InfoDetail>
              창의력과 도전정신이 강해 흥미로운 일은 한 번쯤 시도해 보는 편.
              무엇이든 지금 고민중이라면 Just Do It. 좋은 경험이 될거에요.
            </InfoDetail>
            <InfoDetail>
              당신에게는 꿀처럼 달달한 향기가 나요. 때로는 레몬처럼 상큼하기도
              하구요.
            </InfoDetail>
            <InfoDetail>
              당신은 주변인에게 따스한 햇살이자 과즙 넘치는 열매입니다. 노란
              Mood Palette를 사용해보세요! 당신의 긍정에너지에 딱 과하지도
              부족하지도 않을 만큼 어우러질거에요.
            </InfoDetail>
            <InfoDetail>
              때로는 애정부족이나 겁쟁이 혹은 성격이 급한 사람으로 보일 수
              있어요. 당신에게 필요한 처방은 시각보다 후각! 후각을 활용해 당신의
              Mood를 건네보아요.
            </InfoDetail>
            <InfoColorTitle color="#FFD700">JOYFUL YELLOW</InfoColorTitle>
            <InfoColorSubtitle>
              나와 비슷한 유형의 사람들은
              <br />
              인생을 즐겁고 에너지 넘치게 살아갑니다.
            </InfoColorSubtitle>
          </InfoDetailWrapper>
        </InfoCard>
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
        <InfoCard>
          <InfoDetailWrapper>
            <InfoDetail>
              자연의 산뜻함을 품은 당신, 당신은 활력과 성장 능력이 뛰어난
              사람이군요.
            </InfoDetail>
            <InfoDetail>
              주변인은 당신을 신뢰하는 경향이 강합니다. 주변인에게 당신은
              편안하며 너그럽고 활력 넘치는 사람입니다.
            </InfoDetail>
            <InfoDetail>
              성장 및 회복능력이 뛰어나 모든 일에 덤비고 보는 편, 잘하고 있어요!
              의구심은 떨쳐버리고 지금처럼 앞으로 나아가주세요.
            </InfoDetail>
            <InfoDetail>
              당신에게는 숲 속의 싱그러운 우디 향기가 나요. 시프레의 온화함도요.
            </InfoDetail>
            <InfoDetail>
              당신은 주변인에게 울창한 숲이자 아늑한 오두막입니다. 초록 Mood
              Palette를 사용해보세요! 당신의 싱그러운 향기와 잘어울려요.
            </InfoDetail>
            <InfoDetail>
              때로는 구두쇠로 보일 수 있어요. 당신에게 필요한 처방은 시각보다
              후각! 후각을 활용해 당신의 Mood를 건네보아요.
            </InfoDetail>
            <InfoColorTitle color="#339A53">FOREST GREEN</InfoColorTitle>
            <InfoColorSubtitle>
              나와 비슷한 유형의 사람들은
              <br />
              긍정적인 활력을 지닌 채 살아갑니다.
            </InfoColorSubtitle>
          </InfoDetailWrapper>
        </InfoCard>
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
        <InfoCard>
          <InfoDetailWrapper>
            <InfoDetail>
              물과 바람 그리고 얼음. 당신 곁엔 늘 여름 하늘의 상쾌함이 맴도는 듯
              하군요. 당신의 시원함은 주변을 쾌적하게 합니다.
            </InfoDetail>
            <InfoDetail>
              당신의 시원하고 자신있는 분위기는 주변인에게 편안함과 즐거움을
              줘요.
            </InfoDetail>
            <InfoDetail>
              항상 쾌적하고 안정적인 당신. 당신의 냉정한 판단은 모든 일을
              시원시원하게 풀어낼거에요. 이제 보여주세요, 당신의 영향력을.
            </InfoDetail>
            <InfoDetail>
              당신에게는 산뜻하고 차가운 아쿠아의 향기가 나요. 때로는
              드라이함도요.
            </InfoDetail>
            <InfoDetail>
              당신은 주변인에게 여름 바다의 파도와 같아요. 파랑 Mood Palette를
              사용해보세요. 당신의 쿨한 향기와 잘어울려요.
            </InfoDetail>
            <InfoDetail>
              때로는 차가워보일 수 있어요. 당신에게 필요한 처방은 시각보다 후각!
              후각을 활용해 당신의 Mood를 건네보아요.
            </InfoDetail>
            <InfoColorTitle color="#2878A2">COOL BLUE</InfoColorTitle>
            <InfoColorSubtitle>
              나와 비슷한 유형의 사람들은
              <br />
              시원한 파도처럼 인생을 살아가요.
            </InfoColorSubtitle>
          </InfoDetailWrapper>
        </InfoCard>
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
        <InfoCard>
          <InfoDetailWrapper>
            <InfoDetail>
              모던하고 힘있는 스타일의 당신, 당신의 당찬 메시지는 주변인에게
              존중과 경청을 불러옵니다.
            </InfoDetail>
            <InfoDetail>
              리더쉽이 강한 당신은 주변인의 행동을 이끌어내는 신비한 능력이
              있어요.
            </InfoDetail>
            <InfoDetail>
              자립심과 도전정신이 강해 흥미로운 일은 한 번쯤 시도해 보는 편.
              무엇이든 좋아요. 당신이 관심을 가졌다는 것만으로 그 일은 이미
              가치있는 일일테니까.
            </InfoDetail>
            <InfoDetail>
              당신에게는 시나몬의 달짝지근한 향기가 나요. 때로는 불처럼
              스파이시하기도 하구요.
            </InfoDetail>
            <InfoDetail>
              당신은 주변인에게 든든한 지원군이자 질긴 가죽벨트입니다. 검정 Mood
              Palette를 사용해보세요! 당신의 모던함에 더없이 완벽한 아이템이
              될거에요.
            </InfoDetail>
            <InfoDetail>
              때로는 어둠이나 반항아 혹은 긴장을 주는 사람으로 보일 수 있어요.
              당신에게 필요한 처방은 시각보다 후각! 후각을 활용해 당신의 Mood를
              건네보아요.
            </InfoDetail>
            <InfoColorTitle color="black">MODERN DARK</InfoColorTitle>
            <InfoColorSubtitle>
              나와 비슷한 유형의 사람들은
              <br />
              인생을 고급스럽고 우아하게 살아갑니다.
            </InfoColorSubtitle>
          </InfoDetailWrapper>
        </InfoCard>
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
        <InfoCard>
          <InfoDetailWrapper>
            <InfoDetail>
              새하얀 구름과 깨끗한 이불같은 당신, 당신은 누구보다 부드럽고
              순수한 사람이군요.
            </InfoDetail>
            <InfoDetail>
              당신의 순수한 마음은 주변 사람들에게 긍정적 가치관을 전파합니다.
            </InfoDetail>
            <InfoDetail>
              무엇이든 깔끔하고 정직하게 끝맺고 싶어하는 편이에요. 그러니 두려워
              마세요. 당신은 무엇이든 잘 해낼 수 있을 겁니다.
            </InfoDetail>
            <InfoDetail>
              당신에게는 비누처럼 포근한 향기가 나요. 때로는 새하얀 눈송이처럼
              산뜻하기도 하구요.
            </InfoDetail>
            <InfoDetail>
              당신은 주변인에게 순수한 눈꽃이자 부드러운 이불입니다. 하얀 Mood
              Palette를 사용해보세요! 당신의 순수한 마음이 편안함을 느끼는
              향기일거에요.
            </InfoDetail>
            <InfoDetail>
              때로는 고독하거나 차가운 사람으로 보일 수 있어요. 당신에게 필요한
              처방은 시각보다 후각! 후각을 활용해 당신의 Mood를 건네보아요.
            </InfoDetail>
            <InfoColorTitle color="#828282">SNOW WHITE</InfoColorTitle>
            <InfoColorSubtitle>
              나와 비슷한 유형의 사람들은
              <br />티 없이 맑은 마음을 간직한 채 살아갑니다.
            </InfoColorSubtitle>
          </InfoDetailWrapper>
        </InfoCard>
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
        <InfoCard>
          <InfoDetailWrapper>
            <InfoDetail>
              해질녘 보랏빛 하늘을 품은 당신, 당신은 바라보고 있으면 마음이
              평화로워지는 사람이군요.
            </InfoDetail>
            <InfoDetail>
              당신의 차분한 분위기는 주변인의 지친 마음을 정화해주는 듯 해요.
            </InfoDetail>
            <InfoDetail>
              신비로운 마법을 부린 듯 별 다른 이유없이 매혹적인 당신. 무언가
              창조해내는 능력도 뛰어나기 때문에 걱정마세요. 언젠가 마법처럼 술술
              풀릴거에요.
            </InfoDetail>
            <InfoDetail>
              당신에게는 자스민과 라벤더의 달콤한 향기가 나요. 때로는 허브의
              차분함도요.
            </InfoDetail>
            <InfoDetail>
              당신은 주변인에게 보랏빛 노을이자 편안한 꿈이에요. 보라 Mood
              Palette를 사용해보세요. 당신의 차분한 향기와 잘어울려요.
            </InfoDetail>
            <InfoDetail>
              때로는 오만하게 보일 수도 있어요. 당신에게 필요한 처방은 시각보다
              후각! 후각을 활용해 당신의 Mood를 건네보아요.
            </InfoDetail>
            <InfoColorTitle color="#7B78B8">SERENE PURPLE</InfoColorTitle>
            <InfoColorSubtitle>
              나와 비슷한 유형의 사람들은
              <br />
              예술적인 상상력을 지니고 살아가요.
            </InfoColorSubtitle>
          </InfoDetailWrapper>
        </InfoCard>
      </Wrapper>
    </>
  );
};

export default ColorInfo;
