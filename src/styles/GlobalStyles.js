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
    background: ${({ theme }) => theme.colors.background}, linear-gradient(
        90deg,
        var(--line) 1px,
        transparent 1px var(--size)
      )
      50% 50% / var(--size) var(--size),
    linear-gradient(var(--line) 1px, transparent 1px var(--size)) 50% 50% /
      var(--size) var(--size), hsl(210, 70%, 44%);
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
  }

  :root {
    --size: 45px;
    --line: color-mix(in lch, white, transparent 85%);
  }

  body::before {
    --size: 30px;
    --line: color-mix(in lch, ${({ theme }) => theme.colors.text}, transparent 85%);
    content: '';
    height: 100vh;
    width: 100vw;
    position: fixed;
    background: radial-gradient(4px 4px at 50% 50%,
          var(--line) 2px,
          transparent 2px var(--size)
        )
        50% 50% / var(--size) var(--size);
    mask: linear-gradient(-25deg, transparent 30%, white);
    top: 0;
    transform-style: flat;
    pointer-events: none;
    z-index: -1;
  }
`;

export default GlobalStyles;
