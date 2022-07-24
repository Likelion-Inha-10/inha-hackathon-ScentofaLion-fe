import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LandingInner1 from './InnerPages/LandingInner1';
import LandingInner2 from './InnerPages/LandingInner2';
import LandingInner3 from './InnerPages/LandingInner3';

const Wrapper = styled.div`
  width: 100vw;
`;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none; // 슬라이드 클릭시 파란선을 제거하기 위해서 작성
  }
`;

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      infinite: false,
    };
    return (
      <Wrapper>
        <StyledSlider {...settings}>
          <LandingInner1 />
          <LandingInner2 />
          <LandingInner3 />
        </StyledSlider>
      </Wrapper>
    );
  }
}
