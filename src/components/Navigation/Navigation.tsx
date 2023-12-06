import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = (): React.ReactElement => {
  return (
    <NavigationStyled>
      <ul className="navigation">
        <li>
          <NavLink className="navigation__button" aria-label="home" to="/home">
            Home
          </NavLink>
        </li>
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
