import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          TekSkill
        </Link>
        <div className="navbar-nav">
          <NavLink className="nav-link " aria-current="page" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/list">
            List
          </NavLink>
          <NavLink className="nav-link" to="/input">
            Register
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
