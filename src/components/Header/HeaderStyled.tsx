import styled from "styled-components";

const HeaderStyled = styled.header`
  .header-container {
    width: 100%;
    height: 132px;
    background-color: ${({ theme }) => theme.colors.tertiary};
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;

    &__logo {
      width: 114px;
      height: 108px;
    }

    &__appTitle {
      font-family: ${({ theme }) => theme.typography.tertiary};
      color: ${({ theme }) => theme.colors.accent};
      text-align: center;
      width: 145px;
      height: 85px;
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
