import styled from "styled-components";

const HomePageStyled = styled.main`
  .welcomeMessage {
    text-align: center;
    margin-top: 28px;
    font-family: ${({ theme }) => theme.typography.secondary};
    color: ${({ theme }) => theme.colors.contour};
  }
`;

export default HomePageStyled;
