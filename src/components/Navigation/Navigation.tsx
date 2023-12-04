import { NavLink } from "react-router-dom";

const Navigation = (): React.ReactElement => {
  return (
    <>
      <ul className="navigation">
        <li>
          <NavLink to="/home"></NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
