import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
  }

  #root {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .app-container {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
  }
`;

export default GlobalStyles;

