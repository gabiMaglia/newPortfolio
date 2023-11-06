import { NavLink } from "react-router-dom";
import "./nav_bar.css";

const NavBar = () => {
  return (
    <header className="nav-container">
      <nav id="topnav" className="navbar-expand ">
        <NavLink to="/me" className="link ">
          GABRIELMAGLIA
        </NavLink>
        <NavLink className="link" to="/proyects">
          PROYECTS
        </NavLink>
        <NavLink className="link " to="/contact">
          CONTACT
        </NavLink>

        <div className="socialM p-2 gap-3 ms-auto me-4">
          {/* <button className="btn btn-outline-dark btn-floating">
          <i className="fa-sharp fa-solid fa-right-to-bracket"></i>
            
          </button>
          <button className="btn btn-outline-dark btn-floating">
            <i className="fa-solid fa-circle-half-stroke"></i>
          </button> */}
          <button className="btn btn-outline-dark btn-floating">
            <a target="blank" href="https://www.linkedin.com/in/gabriel-maglia-449577238/">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
