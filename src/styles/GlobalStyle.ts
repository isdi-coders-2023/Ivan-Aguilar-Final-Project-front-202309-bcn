import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.typography.main};
    background-color: ${({ theme }) => theme.colors.main};
  }

  h1,
  h2,
  h3 {
    margin: 0;
  }

  ul,li {
    list-style: none;
    margin: 0;
  }

  img {
    max-width: 100%;
  }

  button {
    border: none;
    font: inherit;
    background-color:inherit ;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    font: inherit;
    color: inherit;
    cursor: pointer;
  }

  input, textarea {
    border: none;
    font: inherit;
  }
`;

export default GlobalStyle;
