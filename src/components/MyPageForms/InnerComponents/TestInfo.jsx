/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { reset } from '../../../redux/actions';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from 'components/Button';
import { MdArrowForwardIos } from 'react-icons/md';

const Wrapper = styled.div`
  width: 100%;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  box-sizing: content-box;
  margin-top: 40px;
`;

const Container = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  background-color: white;
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.1);
  padding-top: 5px;
  padding-bottom: 20px;
  margin-bottom: 40px;
`;

const ButtonInnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TextWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
`;

const ButtonMainText = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  font-family: 'Noto Sans KR', sans-serif;
  text-align: left;
  color: black;
`;

const InfoWrapper = styled.div`
  width: 85%;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const InfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ColorDetail = styled.li`
  width: 90%;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  text-align: left;
  word-break: keep-all;
  line-height: 1.5;
  text-indent: -23px;
  padding-left: 20px;
  padding-right: -20px;
  margin-bottom: 10px;
`;

const mapDispatchToProps = (dispatch) => {
  return {
    onClickReset: () => dispatch(reset()),
  };
};

const TestInfo = (store) => {
  let navigate = useNavigate();

  const moveToTestPage = () => {
    store.onClickReset();
    console.log('click');
    navigate(`/home/${store.userid}/scent-test`);
  };

  const moveToTestResultPage = () => {
    store.onClickReset();
    console.log('click');
    navigate(`/home/${store.userid}/scent-test/result/${store.color}`);
  };

  return (
    <>
      <Wrapper visible={store.color === ''}>
        <Container>
          <Button
            backgroundColor="white"
            focusBackgroundColor="white"
            width="85"
            paddingTop="15"
            paddingBottom="15"
            fontSize="17"
            onClick={moveToTestPage}
          >
            <ButtonInnerWrapper>
              <TextWrapper>
                <ButtonMainText>테스트 하러가기</ButtonMainText>
              </TextWrapper>
              <MdArrowForwardIos />
            </ButtonInnerWrapper>
          </Button>
          <InfoWrapper visible={1}>
            <InfoTextContainer>
              아직 테스트를 진행하지 않았어요.
            </InfoTextContainer>
          </InfoWrapper>
        </Container>
      </Wrapper>

      <Wrapper visible={store.color !== ''}>
        <Container>
          <Button
            backgroundColor="white"
            focusBackgroundColor="white"
            width="85"
            paddingTop="15"
            paddingBottom="15"
            fontSize="17"
            onClick={moveToTestResultPage}
          >
            <ButtonInnerWrapper>
              <TextWrapper>
                <ButtonMainText>테스트 결과</ButtonMainText>
              </TextWrapper>
              <MdArrowForwardIos />
            </ButtonInnerWrapper>
          </Button>

          <InfoWrapper visible={store.color === 'red'}>
            <InfoTextContainer>
              <ColorDetail>
                사랑스러운 당신은 달콤한 매력을 잔뜩 머금고 있어요. 당신은
                넘치는 사랑을 나눠주는 따듯한 사람이군요.
              </ColorDetail>
              <ColorDetail>
                나와 비슷한 유형의 사람들은 사랑의 에너지를 풍기며 살아가요.
              </ColorDetail>
            </InfoTextContainer>
          </InfoWrapper>

          <InfoWrapper visible={store.color === 'yellow'}>
            <InfoTextContainer>
              <ColorDetail>
                에너지가 넘치는 당신, 당신의 긍정적 에너지는 태양 빛처럼
                주변인을 밝혀줍니다.
              </ColorDetail>
              <ColorDetail>
                나와 비슷한 유형의 사람들은 인생을 즐겁고 에너지 넘치게
                살아갑니다.
              </ColorDetail>
            </InfoTextContainer>
          </InfoWrapper>

          <InfoWrapper visible={store.color === 'green'}>
            <InfoTextContainer>
              <ColorDetail>
                자연의 산뜻함을 품은 당신, 당신은 활력과 성장 능력이 뛰어난
                사람이군요.
              </ColorDetail>
              <ColorDetail>
                나와 비슷한 유형의 사람들은 긍정적인 활력을 지닌 채 살아갑니다.
              </ColorDetail>
            </InfoTextContainer>
          </InfoWrapper>

          <InfoWrapper visible={store.color === 'blue'}>
            <InfoTextContainer>
              <ColorDetail>
                물과 바람 그리고 얼음. 당신 곁엔 늘 여름 하늘의 상쾌함이 맴도는
                듯 하군요. 당신의 시원함은 주변을 쾌적하게 합니다.
              </ColorDetail>
              <ColorDetail>
                나와 비슷한 유형의 사람들은 시원한 파도처럼 인생을 살아가요.
              </ColorDetail>
            </InfoTextContainer>
          </InfoWrapper>

          <InfoWrapper visible={store.color === 'black'}>
            <InfoTextContainer>
              <ColorDetail>
                모던하고 힘있는 스타일의 당신, 당신의 당찬 메시지는 주변인에게
                존중과 경청을 불러옵니다.
              </ColorDetail>
              <ColorDetail>
                나와 비슷한 유형의 사람들은 인생을 고급스럽고 우아하게
                살아갑니다.
              </ColorDetail>
            </InfoTextContainer>
          </InfoWrapper>

          <InfoWrapper visible={store.color === 'white'}>
            <InfoTextContainer>
              <ColorDetail>
                새하얀 구름과 깨끗한 이불같은 당신, 당신은 누구보다 부드럽고
                순수한 사람이군요.
              </ColorDetail>
              <ColorDetail>
                나와 비슷한 유형의 사람들은 티 없이 맑은 마음을 간직한 채
                살아갑니다.
              </ColorDetail>
            </InfoTextContainer>
          </InfoWrapper>

          <InfoWrapper visible={store.color === 'purple'}>
            <InfoTextContainer>
              <ColorDetail>
                해질녘 보랏빛 하늘을 품은 당신, 당신은 바라보고 있으면 마음이
                평화로워지는 사람이군요.
              </ColorDetail>
              <ColorDetail>
                나와 비슷한 유형의 사람들은 예술적인 상상력을 지니고 살아가요.
              </ColorDetail>
            </InfoTextContainer>
          </InfoWrapper>
        </Container>

        <Button
          whiteButton
          shadow
          width="85"
          paddingTop="15"
          paddingBottom="15"
          marginBottom="40"
          fontSize="18"
          fontWeight="600"
          onClick={moveToTestPage}
        >
          테스트 다시하기
        </Button>
      </Wrapper>
    </>
  );
};

export default connect(null, mapDispatchToProps)(TestInfo);
