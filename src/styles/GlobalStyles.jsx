import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './font.css';

const GlobalStyle = createGlobalStyle`
    ${reset};
    :root{
      width: 100vw;
      height: 100vh;
    }
    body{
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #FFFAF5;
        font-family: 'Noto Sans KR', sans-serif;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    };

    &::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyle;
