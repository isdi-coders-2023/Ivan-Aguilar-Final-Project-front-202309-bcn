import { useAppSelector } from "../../store/hooks";
import RoutesListStyled from "./RoutesListStyled";

const RoutesList = (): React.ReactElement => {
  const routes = useAppSelector((state) => {
    return state.routesState.routes;
  });

  return (
    <RoutesListStyled>
      {routes.map((routes) => (
        <li key={routes._id}></li>
      ))}
    </RoutesListStyled>
  );
};

export default RoutesList;
