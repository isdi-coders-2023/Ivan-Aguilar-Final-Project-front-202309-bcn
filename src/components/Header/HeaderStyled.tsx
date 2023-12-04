import styled from "styled-components";

const HeaderStyled = styled.header`
  .header-container {
    height: 177px;
    background-color: ${({ theme }) => theme.colors.tertiary};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    &__appTitle {
      font-family: ${({ theme }) => theme.typography.tertiary};
      color: ${({ theme }) => theme.colors.accent};
      text-align: center;
      width: 145px;
      height: 76px;
      -webkit-text-stroke: 2px black;
      text-transform: uppercase;
      font-size: 2.125rem;
      font-style: normal;
      font-weight: 400;
      line-height: 35.5px;
      letter-spacing: -0.68px;
    }
  }
`;

export default HeaderStyled;
