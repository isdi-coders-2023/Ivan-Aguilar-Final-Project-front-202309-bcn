import styled from "styled-components";

const NavigationStyled = styled.ul`
  .navigation {
    width: 100%;
    height: 55px;
    background-color: ${({ theme }) => theme.colors.tertiary};
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-content: space-around;
    align-items: flex-start;

    &__button {
      display: inline-block;
      margin-top: 2px;
      width: 110px;
      height: 40px;
      font-family: ${({ theme }) => theme.typography.tertiary};
      color: ${({ theme }) => theme.colors.contour};
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.4px;
      text-transform: uppercase;
      text-align: center;
      border-radius: 5px;
      border: 2px solid ${({ theme }) => theme.colors.contour};
      background: ${({ theme }) => theme.colors.accent};

      padding-top: 7px;
    }
  }
`;

export default NavigationStyled;
