import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import { loadRoutesActionCreator } from "../../store/features/routes/routesSlice";
import routesMocks from "../../mocks/routesMocks";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadRoutesActionCreator(routesMocks));
  }, [dispatch]);

  return (
    <HomePageStyled>
      <h2 className="welcomeMessage">
        Hi, I'm Anju! <br></br>
        Let me take you to explore the island.
      </h2>
    </HomePageStyled>
  );
};

export default HomePage;
