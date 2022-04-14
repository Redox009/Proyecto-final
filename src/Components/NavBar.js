
import { Link , NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/categoria/chicas">chicas</NavLink>
      <NavLink to="/categoria/medianas">medianas</NavLink>
      <NavLink to="/categoria/grandes">grandes</NavLink>
    </nav>
  );
};


export default NavBar;
