import { NavLink } from "react-router-dom";
import "./miniav.css";

const MiniNav = (props) => {
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg text-light bg-black ">
        <div className="container-fluid ">
          <button
            className="navbar-toggler container-fluid collapsed border-0  text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="toggle-cont d-flexcontainer-fluid ">
              <div className="hamburger-menu d-flex gap-2">
                <h4>Menu</h4>
                <span className="navbar-toggler-icon"></span>
              </div>

              <div className="d-flex gap-2 align-content-center">
                <span className="fa-sharp fa-solid fa-right-to-bracket p-1"></span>
                <h4>Log-in</h4>
              </div>
            </div>
          </button>
          <div
            className="collapse navbar-collapse p-0 m-0 g-0 bg-black"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {props.sec ? (
                props.sec.map((item) => (
                  <li className="nav-item ps-4" key={Math.random()}>
                    {" "}
                    <NavLink
                      to={`${item.link}`}
                      className="nav-link "
                      style={({ isActive }) => ({
                        color: isActive ? "white" : "grey",
                      })}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))
              ) : (
                <div className="nav-item-social ps-4">
                  <button className="btn btn-outline-light  me-2">
                    <i className="fa-brands fa-instagram"></i>
                  </button>
                  <button className="btn btn-outline-light me-2">
                    <i className="fa-solid fa-envelopes-bulk"></i>
                  </button>
                  <button className="btn btn-outline-light me-2">
                    <i className="fa-brands fa-whatsapp"></i>
                  </button>
                  <button className="btn btn-outline-light me-2">
                    <i className="fa-brands fa-instagram"></i>
                  </button>
                  <button className="btn btn-outline-light me-2">
                    <i className="fa-brands fa-facebook"></i>
                  </button>
                  <button className="btn btn-outline-light me-2">
                    <i className="fa-brands fa-twitter"></i>
                  </button>
                </div>
              )}
            </ul>
          </div>
          <div id="login-expand" className="d-none gap-2 align-content-center ">
            <span className="fa-sharp fa-solid fa-right-to-bracket p-1"></span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MiniNav;
