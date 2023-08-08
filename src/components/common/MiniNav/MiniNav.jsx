import { NavLink } from "react-router-dom";
import "./miniav.css";
import SearchBar from "../SearchBar/SearchBar";

const MiniNav = (props) => {
  return (
    <>
      <nav id="mininav" className="navbar navbar-dark navbar-expand-lg text-light bg-black d-flex justify-content-center px-2 py-3 ">
          <button
            className="navbar-toggler collapsed border-0   text-light"
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

           
            </div>
          </button>
          <div
            className="collapse navbar-collapse bg-black text-center "
            id="navbarNav"
          >
            <ul className="navbar-nav ">
              {
              
              props.sec ? (
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
                  <button className="btn btn-outline-light me-2">
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
            { 
            props.searchBar? <SearchBar onSearch={''}/> 
            : <></>
            }
          </div>
         
     
      </nav>
    </>
  );
};

export default MiniNav;
