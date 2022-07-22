import React from 'react';
import styled from 'styled-components';

const BarContainer = styled.div`
  width: 75%;
  height: 5px;
  display: flex;
  align-items: center;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.1);
`;

const Bar = styled.div`
  width: ${(props) => props.width || 0}%;
  height: 100%;
  transition: width 1s;
  border-radius: 3px;
  background-color: black;
  overflow: hidden;
`;

const ProgressBar = (width) => {
  return (
    <BarContainer>
      <Bar width={width.width} />
    </BarContainer>
  );
};

export default ProgressBar;
