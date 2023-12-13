import styled from "styled-components";

const RouteCardStyled = styled.article`
  width: 266px;
  height: 433px;
  .route-card {
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.secondary};
    padding-top: 8px;
    border: solid;
    border-color: ${({ theme }) => theme.colors.contour};
    border-width: 2px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;

    &__image {
      border-radius: 5px;
      object-fit: cover;
      align-self: center;
    }

    &__info {
      display: flex;
      flex-direction: row;
      justify-self: start;
      padding-left: 8px;
      padding-right: 15px;
      padding-top: 10px;
    }

    &__details {
      padding-inline-start: 7px;
      padding-inline-end: 7px;
      font-size: 1.125rem;
      font-family: ${({ theme }) => theme.typography.secondary};
    }

    &__detail {
      font-size: 1.125rem;
      font-family: ${({ theme }) => theme.typography.main};
    }
    .first-detail {
      margin-top: 6px;
    }
    .buttons {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }
  }
`;

export default RouteCardStyled;
