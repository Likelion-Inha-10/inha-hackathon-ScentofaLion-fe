import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: content-box;
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

const Header = () => {
  return (
    <Wrapper>
      <Title>Scent Test</Title>
      <Underline />
    </Wrapper>
  );
};

export default Header;
