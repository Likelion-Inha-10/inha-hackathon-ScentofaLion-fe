import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: content-box;
  background-color: #fffaf5;
  position: fixed;
  z-index: 20;
`;

const Title = styled.div`
  width: 85%;
  margin-top: 60px;
  font-size: 25px;
  font-weight: 900;
  font-family: 'Frank Ruhl Libre', serif;
  text-align: left;
  color: black;
`;

const Underline = styled.hr`
  width: 85%;
  margin-top: 15px;
`;

const Header = (title) => {
  return (
    <Wrapper>
      <Title>{title.title}</Title>
      <Underline />
    </Wrapper>
  );
};

Header.title = {
  title: PropTypes.node.isRequired,
};

export default Header;
