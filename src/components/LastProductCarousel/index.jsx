import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Product1 from './lastpage/Product1';
import Product2 from './lastpage/Product2';
import Product3 from './lastpage/Product3';
import Product4 from './lastpage/Product4';

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
          <Product1 />
          <Product2 />
          <Product3 />
          <Product4 />
        </StyledSlider>
      </Wrapper>
    );
  }
}
