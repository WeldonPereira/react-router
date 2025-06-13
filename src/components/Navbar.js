import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return <nav>
    <NavLink to="/">HOME</NavLink>
    <NavLink to="/about">ABOUT</NavLink>
  </nav>;
};

export default Navbar;
