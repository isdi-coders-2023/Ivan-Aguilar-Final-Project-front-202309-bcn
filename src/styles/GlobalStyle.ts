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
    font-size: 1.125rem;
  }

  ul,li {
    list-style: none;
    margin: 0;
    padding-left: 0;
    text-align: justify;
  }
  
  dl, dd {
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
    cursor: pointer;
    width: 40px;
    height: 40px; 
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
