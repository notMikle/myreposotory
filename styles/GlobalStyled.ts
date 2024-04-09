import {createGlobalStyle} from 'styled-components';
import {theme} from '@/styles/theme';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Nunito Sans", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.secondaryText};
  }

  a {
    text-decoration: none;
    color: ${theme.colors.secondaryText};
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: none;
  }

  section {
    background-color: ${theme.colors.primaryBG};
    padding: 50px 0;
  }

  h3 {
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 1px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
  }

`