import styled, { css } from 'styled-components';

const Button = styled.button`
  width: ${(props) => props.width || 100}%;
  height: ${(props) => props.height || 100}%;
  background-color: ${(props) => props.backgroundColor || 'white'};
  font-size: ${(props) => props.fontSize || 25}px;
  font-weight: ${(props) => props.fontWeight || 400};
  color: ${(props) => props.fontColor || 'black'};
  border-radius: ${(props) => props.radius || 25}px;
  margin-top: ${(props) => props.marginTop || 0}px;
  margin-bottom: ${(props) => props.marginBottom || 0}px;
  padding-left: ${(props) => props.paddingLeft || 0}px;
  padding-right: ${(props) => props.paddingRight || 0}px;
  padding-top: ${(props) => props.paddingTop || 0}px;
  padding-bottom: ${(props) => props.paddingBottom || 0}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  font-family: 'Noto Sans KR', sans-serif;
  word-break: keep-all;
  transition: 0.3s;

  &:focus {
    background-color: ${(props) => props.focusBackgroundColor || 'black'};
    color: ${(props) => props.focusFontColor || 'white'};
    transition: 0.3s;
  }

  ${(props) =>
    props.blackButton &&
    css`
      background-color: black;
      color: white;
      &:focus {
        background-color: white;
        color: black;
        transition: 0.3s;
      }
    `}

  ${(props) =>
    props.whiteButton &&
    css`
      background-color: white;
      color: black;
      &:focus {
        background-color: black;
        color: white;
        transition: 0.3s;
      }
    `}

  ${(props) =>
    props.shadow &&
    css`
      box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.1);
    `}

  ${(props) =>
    props.otherFont &&
    css`
      font-family: 'Frank Ruhl Libre', serif;
    `}

  ${(props) =>
    props.clicked &&
    css`
      background-color: ${(props) =>
        props.isClicked === 1 ? 'black' : 'white'};
      color: ${(props) => (props.isClicked === 1 ? 'white' : 'black')};
    `}
`;

export default Button;
