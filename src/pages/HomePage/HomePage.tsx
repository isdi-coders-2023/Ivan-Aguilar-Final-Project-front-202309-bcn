import HomePageStyled from "./HomePageStyled";

const HomePage = (): React.ReactElement => {
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
