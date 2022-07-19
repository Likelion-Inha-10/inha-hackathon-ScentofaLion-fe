import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './font.css';

const GlobalStyle = createGlobalStyle`
    ${reset};
    
    body{
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #FFFAF5;
        font-family:'-apple-system', 'BlinkMacSystemFont', 
        'Apple SD Gothic Neo','Inter', 'Spoqa Han Sans', 
        'Segoe UI', Sans-Serif, 'Apple Color Emoji', 'Segoe UI Emoji', 
        'Segoe UI Symbol';
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    };
`;

export default GlobalStyle;
