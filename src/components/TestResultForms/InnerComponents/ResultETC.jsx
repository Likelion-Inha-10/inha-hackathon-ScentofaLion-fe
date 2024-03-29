import React from 'react';
import Alert from 'components/Alert';
import styled from 'styled-components';
import Button from 'components/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { reset } from '../../../redux/actions';
import { connect } from 'react-redux';

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: content-box;
  margin-top: 50px;
`;

const InfoCard = styled.div`
  width: 90%;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: white;
  border-radius: 25px;
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.1);
`;

const MainText = styled.div`
  width: 100%;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 800;
  font-size: 17px;
  word-break: keep-all;
  line-height: 1.5;
  color: black;
`;

const SubText = styled.div`
  width: 100%;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 15px;
  word-break: keep-all;
  line-height: 1.5;
  color: black;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ReviewWrapper = styled.div`
  width: 90%;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ReviewButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

const mapDispatchToProps = (dispatch) => {
  return {
    onClickReset: () => dispatch(reset()),
  };
};

const ResultETC = (store) => {
  const { userid } = useParams();
  const { color } = useParams();
  let navigate = useNavigate();

  function moveToTestPage() {
    store.onClickReset();
    console.log('click');
    navigate(`/home/${userid}/scent-test`);
  }

  function moveToSubscribePage() {
    if (userid === '0') {
      return Alert('로그인이 필요합니다.');
    } else {
      navigate(`/home/${userid}/subscribe`);
    }
  }

  function moveToOtherColorPage() {
    if (userid === '0') {
      return Alert('로그인이 필요합니다.');
    } else {
      navigate(`/home/${userid}/other-color/except/${color}`);
    }
  }

  return (
    <>
      <Wrapper>
        <InfoCard>
          <MainText>
            Mood Palette는 당신에게 꼭 맞는
            <br /> 향기를 발견할 수 있도록 돕습니다.
          </MainText>
          <SubText>
            테스트 결과를 바탕으로 추천받은
            <br /> 제품들을 샘플로 직접 체험해보세요.
          </SubText>
          <Button
            blackButton
            shadow
            width="90"
            fontSize="17"
            marginTop="20"
            marginBottom="10"
            paddingTop="10"
            paddingBottom="10"
            paddingLeft="25"
            paddingRight="25"
            onClick={moveToSubscribePage}
          >
            나만의 추천 제품 구독하러 가기
          </Button>
          <Button
            blackButton
            shadow
            width="90"
            fontSize="17"
            marginBottom="10"
            paddingTop="10"
            paddingBottom="10"
            paddingLeft="25"
            paddingRight="25"
            onClick={moveToOtherColorPage}
          >
            다른 결과 유형 보기
          </Button>
          <Button
            blackButton
            shadow
            width="90"
            fontSize="17"
            paddingTop="10"
            paddingBottom="10"
            paddingLeft="25"
            paddingRight="25"
            onClick={moveToTestPage}
          >
            테스트 다시하기
          </Button>
        </InfoCard>
        <ReviewWrapper>
          <MainText>이번 테스트 어땠어요?</MainText>
          <ReviewButtonWrapper>
            <Button
              whiteButton
              shadow
              width="30"
              fontSize="17"
              paddingTop="25"
              paddingBottom="25"
            >
              😢
              <br /> 별로예요
            </Button>
            <Button
              whiteButton
              shadow
              width="30"
              fontSize="17"
              paddingTop="25"
              paddingBottom="25"
            >
              😍
              <br /> 재밌어요
            </Button>
            <Button
              whiteButton
              shadow
              width="30"
              fontSize="17"
              paddingTop="25"
              paddingBottom="25"
            >
              👍
              <br /> 정확해요
            </Button>
          </ReviewButtonWrapper>
        </ReviewWrapper>
      </Wrapper>
    </>
  );
};

export default connect(null, mapDispatchToProps)(ResultETC);
