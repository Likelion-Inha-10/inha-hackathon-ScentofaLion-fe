import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'components/Button';
import { connect } from 'react-redux';
import { testButtonIncrement } from '../../redux/actions';

const formFadeIn = keyframes`
  100% {
    opacity: 1
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 80vh;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  box-sizing: content-box;
  opacity: 0;
  animation-name: ${(props) => (props.visible ? formFadeIn : '')};
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

const MainTitle = styled.div`
  width: 80%;
  padding-top: 15vh;
  font-family: 'Frank Ruhl Libre', serif;
  font-size: 35px;
  font-weight: 900;
  text-align: center;
  color: black;
`;

const SubTitle = styled.div`
  width: 80%;
  padding-top: 5vh;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.4;
  text-align: center;
  color: black;
`;

const TestTitle = styled.div`
  width: 80%;
  padding-top: ${(props) => props.paddingTop || 80}px;
  padding-top: 5vh;
  font-size: 25px;
  font-weight: 900;
  text-align: center;
  line-height: 1.4;
  word-break: keep-all;
  color: black;
`;

const TestForms = (state) => {
  const { userid } = useParams();
  const stepValue = state.value;
  const [test1, setTest1] = useState({ a: 0, b: 0 });
  const [test2, setTest2] = useState({ a: 0, b: 0, c: 0 });
  const [test3, setTest3] = useState({ a: 0, b: 0 });
  const [test4, setTest4] = useState({ a: 0, b: 0, c: 0 });
  const [test5, setTest5] = useState({ a: 0, b: 0, c: 0 });
  const [test6, setTest6] = useState({ a: 0, b: 0 });
  const [test7, setTest7] = useState({ a: 0, b: 0, c: 0, d: 0 });

  const buttonClick1 = (e) => {
    if (e.target.value === 'test1A') {
      setTest1({ a: 1, b: 0 });
    }
    if (e.target.value === 'test1B') {
      setTest1({ a: 0, b: 1 });
    }
  };

  const buttonClick2 = (e) => {
    if (e.target.value === 'test2A') {
      setTest2({ a: 1, b: 0, c: 0 });
    }
    if (e.target.value === 'test2B') {
      setTest2({ a: 0, b: 1, c: 0 });
    }
    if (e.target.value === 'test2C') {
      setTest2({ a: 0, b: 0, c: 1 });
    }
  };

  const buttonClick3 = (e) => {
    if (e.target.value === 'test3A') {
      setTest3({ a: 1, b: 0 });
    }
    if (e.target.value === 'test3B') {
      setTest3({ a: 0, b: 1 });
    }
  };

  const buttonClick4 = (e) => {
    if (e.target.value === 'test4A') {
      setTest4({ a: 1, b: 0, c: 0 });
    }
    if (e.target.value === 'test4B') {
      setTest4({ a: 0, b: 1, c: 0 });
    }
    if (e.target.value === 'test4C') {
      setTest4({ a: 0, b: 0, c: 1 });
    }
  };

  const buttonClick5 = (e) => {
    if (e.target.value === 'test5A') {
      setTest5({ a: 1, b: 0, c: 0 });
    }
    if (e.target.value === 'test5B') {
      setTest5({ a: 0, b: 1, c: 0 });
    }
    if (e.target.value === 'test5C') {
      setTest5({ a: 0, b: 0, c: 1 });
    }
  };

  const buttonClick6 = (e) => {
    if (e.target.value === 'test6A') {
      setTest6({ a: 1, b: 0 });
    }
    if (e.target.value === 'test6B') {
      setTest6({ a: 0, b: 1 });
    }
  };

  const buttonClick7 = (e) => {
    if (e.target.value === 'test7A') {
      setTest7({ a: 1, b: 0, c: 0, d: 0 });
      moveToResultPage();
    }
    if (e.target.value === 'test7B') {
      setTest7({ a: 0, b: 1, c: 0, d: 0 });
      moveToResultPage();
    }
    if (e.target.value === 'test7C') {
      setTest7({ a: 0, b: 0, c: 1, d: 0 });
      moveToResultPage();
    }
    if (e.target.value === 'test7D') {
      setTest7({ a: 0, b: 0, c: 0, d: 1 });
      moveToResultPage();
    }
  };

  let colorScore = {
    redScore: 0,
    yellowScore: 0,
    greenScore: 0,
    blueScore: 0,
    blackScore: 0,
    whiteScore: 0,
    purpleScore: 0,
  };

  let navigate = useNavigate();

  const moveToResultPage = () => {
    test1Result();
    test2Result();
    test3Result();
    test4Result();
    test5Result();
    test7Result();

    console.log(colorScore);
    let colorArray = [
      'red',
      'yellow',
      'green',
      'blue',
      'black',
      'white',
      'purple',
    ];
    let resultColor = colorArray[Math.floor(Math.random() * (7 - 0)) + 0];
    navigate(`/home/${userid}/scent-test/result/${resultColor}`);
  };

  const test1Result = () => {
    if (test1.a === 1) {
      colorScore.blueScore++;
      colorScore.blackScore++;
      colorScore.purpleScore++;
    }
    if (test1.b === 1) {
      colorScore.redScore++;
      colorScore.yellowScore++;
      colorScore.greenScore++;
      colorScore.whiteScore++;
    }
  };

  const test2Result = () => {
    if (test2.a === 1) {
      colorScore.blueScore++;
      colorScore.greenScore++;
    }
    if (test2.b === 1) {
      colorScore.blackScore++;
      colorScore.whiteScore++;
    }
    if (test2.c === 1) {
      colorScore.redScore++;
      colorScore.yellowScore++;
      colorScore.purpleScore++;
    }
  };

  const test3Result = () => {
    if (test3.a === 1) {
      colorScore.blueScore++;
      colorScore.redScore++;
      colorScore.yellowScore++;
      colorScore.whiteScore++;
    }
    if (test3.b === 1) {
      colorScore.blackScore++;
      colorScore.purpleScore++;
      colorScore.greenScore++;
    }
  };

  const test4Result = () => {
    if (test4.a === 1) {
      colorScore.whiteScore++;
      colorScore.yellowScore++;
      colorScore.greenScore++;
    }
    if (test4.b === 1) {
      colorScore.redScore++;
      colorScore.purpleScore++;
    }
    if (test4.c === 1) {
      colorScore.blueScore++;
      colorScore.blackScore++;
    }
  };

  const test5Result = () => {
    if (test5.a === 1) {
      colorScore.redScore++;
      colorScore.yellowScore++;
      colorScore.greenScore++;
      colorScore.whiteScore++;
      colorScore.purpleScore++;
    }
    if (test5.b === 1) {
      colorScore.greenScore++;
      colorScore.blueScore++;
      colorScore.blackScore++;
      colorScore.whiteScore++;
      colorScore.purpleScore++;
    }
    if (test5.c === 1) {
      colorScore.redScore++;
      colorScore.yellowScore++;
      colorScore.greenScore++;
      colorScore.blueScore++;
      colorScore.blackScore++;
      colorScore.whiteScore++;
      colorScore.purpleScore++;
    }
  };

  const test7Result = () => {
    if (test7.a === 1) {
      colorScore.redScore++;
      colorScore.yellowScore++;
    }
    if (test7.b === 1) {
      colorScore.greenScore++;
    }
    if (test7.c === 1) {
      colorScore.blueScore++;
      colorScore.whiteScore++;
    }
    if (test7.d === 1) {
      colorScore.blackScore++;
      colorScore.purpleScore++;
    }
  };

  return (
    <>
      <Wrapper visible={stepValue === 0}>
        <MainTitle>Per/scent</MainTitle>
        <SubTitle>
          나만의 컬러 <br /> 나만의 향을 <br /> Per/scent로 알아봐요
        </SubTitle>
        <Button
          shadow
          blackButton
          width="85"
          height="12"
          marginTop="120"
          fontSize="18"
          fontWeight="400"
          onClick={() => {
            setTimeout(() => {
              state.onClickTest();
            }, 500);
          }}
        >
          테스트 시작하기
        </Button>
      </Wrapper>

      <Wrapper visible={stepValue === 1}>
        <TestTitle>
          어느날 눈을 떠보니
          <br /> 아기사자가 된 당신! 🦁
          <br /> 이때 당신의 반응은?
        </TestTitle>
        <Button
          shadow
          clicked
          isClicked={test1.a}
          width="85"
          height="12"
          marginTop="70"
          fontSize="18"
          fontWeight="800"
          value="test1A"
          onClick={(e) => {
            buttonClick1(e);
            setTimeout(() => {
              state.onClickTest();
            }, 500);
          }}
        >
          난 언제나 이런 새 삶을 원했어!
          <br /> 아기사자가 되어 세상을 헤집어보자!
        </Button>
        <Button
          shadow
          clicked
          isClicked={test1.b}
          width="85"
          height="12"
          marginTop="20"
          fontSize="18"
          fontWeight="800"
          value="test1B"
          onClick={(e) => {
            buttonClick1(e);
            setTimeout(() => {
              state.onClickTest();
            }, 500);
          }}
        >
          안돼… 이런 익숙지 않은 몸…
          <br /> 잡아먹힐지도 몰라!
        </Button>
      </Wrapper>

      <Wrapper visible={stepValue === 2}>
        <TestTitle>
          이… 이곳은 😱
          <br /> 우리집 방구석이 아니다!
          <br /> 여기가 어디지?
        </TestTitle>
        <Button
          shadow
          clicked
          isClicked={test2.a}
          width="85"
          height="12"
          marginTop="50"
          fontSize="18"
          fontWeight="800"
          value="test2A"
          onClick={(e) => {
            buttonClick2(e);
            setTimeout(() => {
              state.onClickTest();
            }, 500);
          }}
        >
          고요한 바람소리만 귓가를 맴돈다.
        </Button>
        <Button
          shadow
          clicked
          isClicked={test2.b}
          width="85"
          height="12"
          marginTop="20"
          fontSize="18"
          fontWeight="800"
          value="test2B"
          onClick={(e) => {
            buttonClick2(e);
            setTimeout(() => {
              state.onClickTest();
            }, 500);
          }}
        >
          빵빵거리며 지나가는 자동차와
          <br /> 어디론가 바삐 걸어가는 사람들.
        </Button>
        <Button
          shadow
          clicked
          isClicked={test2.c}
          width="85"
          height="12"
          marginTop="20"
          fontSize="18"
          fontWeight="800"
          value="test2C"
          onClick={(e) => {
            buttonClick2(e);
            setTimeout(() => {
              state.onClickTest();
            }, 500);
          }}
        >
          저 멀리 동산을 가득 채우는
          <br /> 알록달록한 과일과 꽃이 보인다.
        </Button>
      </Wrapper>

      <Wrapper visible={stepValue === 3}>
        <TestTitle>
          가만히 서있을 수는
          <br /> 없어! 일단 앞으로
          <br /> 걸어나가려 한다.🔥
        </TestTitle>
        <Button
          shadow
          clicked
          isClicked={test3.a}
          width="85"
          height="12"
          marginTop="70"
          fontSize="18"
          fontWeight="800"
          value="test3A"
          onClick={(e) => {
            buttonClick3(e);
            setTimeout(() => {
              state.onClickTest();
            }, 500);
          }}
        >
          밝은 곳으로 걸어가자.
          <br /> 누군가 도와줄거야.
        </Button>
        <Button
          shadow
          clicked
          isClicked={test3.b}
          width="85"
          height="12"
          marginTop="20"
          fontSize="18"
          fontWeight="800"
          value="test3B"
          onClick={(e) => {
            buttonClick3(e);
            setTimeout(() => {
              state.onClickTest();
            }, 500);
          }}
        >
          어두운 곳으로 걸어가야해.
          <br /> 잡혀갈지도 몰라.
        </Button>
      </Wrapper>

      <Wrapper visible={stepValue === 4}>
        <TestTitle paddingTop={40}>
          하염없이 걷다보니
          <br /> 배가 고프다. 🤤
          <br /> 이 때 누군가가 당신에게
          <br /> 잘 차려진 식사를 대접한다.
        </TestTitle>
        <Button
          shadow
          clicked
          isClicked={test4.a}
          width="85"
          height="12"
          marginTop="50"
          fontSize="18"
          fontWeight="800"
          value="test4A"
          onClick={(e) => {
            buttonClick4(e);
            setTimeout(() => {
              state.onClickTest();
            }, 500);
          }}
        >
          하얀 식탁보 위에 가지런히 놓인 빵과 꿀.
          <br /> 진한 녹차도 준비되어 있다.
        </Button>
        <Button
          shadow
          clicked
          isClicked={test4.b}
          width="85"
          height="12"
          marginTop="20"
          fontSize="18"
          fontWeight="800"
          value="test4B"
          onClick={(e) => {
            buttonClick4(e);
            setTimeout(() => {
              state.onClickTest();
            }, 500);
          }}
        >
          알록달록 식탁보 위의 딸기케이크.
          <br /> 음료는… 프룬주스?
        </Button>
        <Button
          shadow
          clicked
          isClicked={test4.c}
          width="85"
          height="12"
          marginTop="20"
          fontSize="18"
          fontWeight="800"
          value="test4C"
          onClick={(e) => {
            buttonClick4(e);
            setTimeout(() => {
              state.onClickTest();
            }, 500);
          }}
        >
          아이스박스 위에 얼음으로 가득 찬 바스켓.
          <br /> 든든한 볶음밥과 시원한 콜라가 놓여있다.
        </Button>
      </Wrapper>

      <Wrapper visible={stepValue === 5}>
        <TestTitle paddingTop={30}>
          정신없이 허기진 배를 채우고
          <br /> 의문의 조력자에게
          <br /> 감사인사를 건넨다. 😀
          <br /> 그런데 이 사람 이상한 모자를 쓰고, 포대자루도 들고 있다.
        </TestTitle>
        <Button
          shadow
          clicked
          isClicked={test5.a}
          width="85"
          height="12"
          marginTop="50"
          fontSize="18"
          fontWeight="800"
          value="test5A"
          onClick={(e) => {
            buttonClick5(e);
            setTimeout(() => {
              state.onClickTest();
            }, 500);
          }}
        >
          삐에로 모자다.
          <br /> 코를 찌르는 사자우리 냄새가 난다.
        </Button>
        <Button
          shadow
          clicked
          isClicked={test5.b}
          width="85"
          height="12"
          marginTop="20"
          fontSize="18"
          fontWeight="800"
          value="test5B"
          onClick={(e) => {
            buttonClick5(e);
            setTimeout(() => {
              state.onClickTest();
            }, 500);
          }}
        >
          양봉업자 모자다.
          <br /> 과한 바닐라향에 속이 더부룩해진다.
        </Button>
        <Button
          shadow
          clicked
          isClicked={test5.c}
          width="85"
          height="12"
          marginTop="20"
          fontSize="18"
          fontWeight="800"
          value="test5C"
          onClick={(e) => {
            buttonClick5(e);
            setTimeout(() => {
              state.onClickTest();
            }, 500);
          }}
        >
          몰라 그냥 도망간다.
        </Button>
      </Wrapper>

      <Wrapper visible={stepValue === 6}>
        <TestTitle>
          얼마나 도망쳤을까…
          <br /> 풍경이 바뀌어 주변을 둘러보니 온통 하얀색에 일곱개의 문이
          덩그러니 놓여있다. 🚪
        </TestTitle>
        <Button
          shadow
          clicked
          isClicked={test6.a}
          width="85"
          height="12"
          marginTop="70"
          fontSize="18"
          fontWeight="800"
          value="test6A"
          onClick={(e) => {
            buttonClick6(e);
            setTimeout(() => {
              state.onClickTest();
            }, 500);
          }}
        >
          궁금해. 어서 열어봐야겠다.
        </Button>
        <Button
          shadow
          clicked
          isClicked={test6.b}
          width="85"
          height="12"
          marginTop="20"
          fontSize="18"
          fontWeight="800"
          value="test6B"
          onClick={(e) => {
            buttonClick6(e);
            setTimeout(() => {
              state.onClickTest();
            }, 500);
          }}
        >
          또 무슨 일이 기다리고 있을 지 몰라.
          <br /> 경계하며 조심스럽게 문을 연다.
        </Button>
      </Wrapper>

      <Wrapper visible={stepValue === 7}>
        <TestTitle paddingTop={50}>
          문고리가 굳게 잠겨있다. 🗝️
          <br /> 열쇠는… 내 주머니 안에 있다고?
        </TestTitle>
        <Button
          shadow
          clicked
          isClicked={test7.a}
          width="85"
          height="12"
          marginTop="50"
          fontSize="18"
          fontWeight="800"
          value="test7A"
          onClick={(e) => {
            setTimeout(() => {
              buttonClick7(e);
              state.onClickTest();
            }, 500);
          }}
        >
          설탕으로 만든 열쇠를 꺼낸다.
        </Button>
        <Button
          shadow
          clicked
          isClicked={test7.b}
          width="85"
          height="12"
          marginTop="20"
          fontSize="18"
          fontWeight="800"
          value="test7B"
          onClick={(e) => {
            setTimeout(() => {
              buttonClick7(e);
              state.onClickTest();
            }, 500);
          }}
        >
          나무로 된 열쇠를 꺼낸다.
        </Button>
        <Button
          shadow
          clicked
          isClicked={test7.c}
          width="85"
          height="12"
          marginTop="20"
          fontSize="18"
          fontWeight="800"
          value="test7C"
          onClick={(e) => {
            setTimeout(() => {
              buttonClick7(e);
              state.onClickTest();
            }, 500);
          }}
        >
          하얀 보자기에 쌓여있는
          <br /> 도자기 열쇠를 꺼낸다
        </Button>
        <Button
          shadow
          clicked
          isClicked={test7.d}
          width="85"
          height="12"
          marginTop="20"
          fontSize="18"
          fontWeight="800"
          value="test7D"
          onClick={(e) => {
            setTimeout(() => {
              buttonClick7(e);
              state.onClickTest();
            }, 500);
          }}
        >
          철문에 어울리는 열쇠를 꺼낸다.
        </Button>
      </Wrapper>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    value: state.counter.step,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickTest: () => dispatch(testButtonIncrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestForms);
