import { useAppSelector } from "../../store/hooks";
import RouteCard from "../RouteCard/RouteCard";
import RoutesListStyled from "./RoutesListStyled";

const RoutesList = (): React.ReactElement => {
  const routes = useAppSelector((state) => {
    return state.routesState.routes;
  });

  return (
    <RoutesListStyled>
      {routes.map((routes) => (
        <li key={routes._id}>
          <RouteCard route={routes} />
        </li>
      ))}
    </RoutesListStyled>
  );
};

export default RoutesList;
