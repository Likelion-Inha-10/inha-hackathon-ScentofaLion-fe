import React from 'react';
import styled from 'styled-components';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import Button from 'components/Button';
import ResultTitle from './InnerComponents/ResultTitle';
import ColorImage from './InnerComponents/ColorImage';
import ColorInfo from './InnerComponents/ColorInfo';
import ColorProduct from './InnerComponents/ColorProduct';
import ResultETC from './InnerComponents/ResultETC';
import Header from 'components/Header';

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: content-box;
  background-color: #fffaf5;
`;

const PrintWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: content-box;
  background-color: #fffaf5;
`;

const ShareWrapper = styled.div`
  width: 90%;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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

const TestResultForms = () => {
  const onDownloadBtn = () => {
    domtoimage
      .toBlob(document.getElementById('card'), {
        quality: 0.5,
      })
      .then((blob) => {
        saveAs(blob, 'result.jpeg');
      });
  };
  return (
    <>
      <PrintWrapper id="card">
        <Header title="Mood Scent" />
        <ResultTitle />
        <ColorImage />
      </PrintWrapper>
      <ColorInfo />
      <Wrapper>
        <ColorProduct />
        <ResultETC />
        <ShareWrapper>
          <MainText>친구에게 공유하기</MainText>
          <Button
            blackButton
            shadow
            width="100"
            fontSize="17"
            marginTop="20"
            marginBottom="10"
            paddingTop="10"
            paddingBottom="10"
            paddingLeft="25"
            paddingRight="25"
            className="downBtn"
            onClick={onDownloadBtn}
          >
            테스트 결과 이미지로 저장
          </Button>
          <Button
            blackButton
            shadow
            width="100"
            fontSize="17"
            marginBottom="10"
            paddingTop="10"
            paddingBottom="10"
            paddingLeft="25"
            paddingRight="25"
            className="downBtn"
          >
            홈으로 이동
          </Button>
        </ShareWrapper>
      </Wrapper>
    </>
  );
};

export default TestResultForms;
