import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <div className="header-container">
        <img
          className="header-container__logo"
          src="./images/logo.webp"
          width="114"
          height="108"
          alt="logo of meet mauritius app"
        />
        <h1 className="header-container__appTitle">meet mauritius</h1>
      </div>
    </HeaderStyled>
  );
};

export default Header;
