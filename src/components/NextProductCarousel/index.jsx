import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NProduct1 from './nextpage/NProduct1';
import NProduct2 from './nextpage/NProduct2';
import NProduct3 from './nextpage/NProduct3';
import NProduct4 from './nextpage/NProduct4';

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
          <NProduct1 />
          <NProduct2 />
          <NProduct3 />
          <NProduct4 />
        </StyledSlider>
      </Wrapper>
    );
  }
}
