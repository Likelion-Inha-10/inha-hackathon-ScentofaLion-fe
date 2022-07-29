import React from 'react';
import Alert from 'components/Alert';
import styled from 'styled-components';
import { reset } from '../../redux/actions';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  MdOutlineHome,
  MdOutlineBrush,
  MdOutlineScience,
  MdOutlinePalette,
  MdOutlineEmojiEmotions,
} from 'react-icons/md';

const Wrapper = styled.div`
  width: 100vw;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.bgColor || 'none'};
`;

const NavigationBox = styled.div`
  width: 90%;
  height: 60px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: black;
  border-radius: 30px;
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.1);
`;

const NavigationButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  transition: 0.3s;
  &:hover {
    padding-bottom: 7px;
    transition: 0.3s;
  }
  &:focus {
    padding-bottom: 7px;
    transition: 0.3s;
  }
`;

const mapDispatchToProps = (dispatch) => {
  return {
    onClickReset: () => dispatch(reset()),
  };
};

const NavigationBar = (store) => {
  let navigate = useNavigate();

  const moveToHomePage = () => {
    if (store.userid === '0') {
      return Alert('로그인을 먼저 해주세요.');
    } else {
      navigate(`/home/${store.userid}`);
    }
  };

  const moveToOtherColorPage = () => {
    if (store.color === '') {
      if (store.userid === '0') {
        return Alert('로그인을 먼저 해주세요.');
      } else {
        return Alert('테스트를 먼저 진행해주세요.');
      }
    } else {
      navigate(`/home/${store.userid}/other-color/except/${store.color}`);
    }
  };

  const moveToTestPage = () => {
    store.onClickReset();
    if (store.userid === '0') {
      navigate('/home/login-warning');
    } else {
      navigate(`/home/${store.userid}/scent-test`);
    }
  };

  const moveToMyPage = () => {
    if (store.userid === '0') {
      return Alert('로그인을 먼저 해주세요.');
    } else {
      navigate(`/home/${store.userid}/my-page`);
    }
  };

  return (
    <Wrapper bgColor={store.bgColor}>
      <NavigationBox>
        <NavigationButton type="button" value="home" onClick={moveToHomePage}>
          <MdOutlineHome size="28px" color="white" />
        </NavigationButton>
        <NavigationButton type="button" value="test" onClick={moveToTestPage}>
          <MdOutlineBrush size="28px" color="white" />
        </NavigationButton>
        <NavigationButton
          type="button"
          value="palette"
          onClick={moveToOtherColorPage}
        >
          <MdOutlinePalette size="28px" color="white" />
        </NavigationButton>
        <NavigationButton type="button" value="review">
          <MdOutlineScience size="28px" color="white" />
        </NavigationButton>
        <NavigationButton type="button" value="myPage">
          <MdOutlineEmojiEmotions
            size="28px"
            color="white"
            onClick={moveToMyPage}
          />
        </NavigationButton>
      </NavigationBox>
    </Wrapper>
  );
};

export default connect(null, mapDispatchToProps)(NavigationBar);
