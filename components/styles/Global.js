import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    height: 100%;
    min-height: 100%;
  }
  body {
    background-color: ${props => props.theme.white};
    font-family: -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 16px;
    height: 100%;
    min-height: 100%;
  }
  h1, h2, h3, h4, h5, h6, p, ul {
    font-size: inherit;
    margin: 0;
  }
  ul {
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  li {
    list-style: none;
  }
  #__next,
  #__next > div {
    height: 100%;
    min-height: 100%;
  }
  #__app-wrapper {
    display: grid;
    grid-template-rows: 1fr auto;
    min-height: 100%;
    height: 100%;
  }
`;

export default GlobalStyles;
