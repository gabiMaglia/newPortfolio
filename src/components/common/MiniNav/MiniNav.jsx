import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./miniav.css";
import SocialMediaBtn from "../Button/SocialMediaBtn";

const MiniNav = (props) => {
  const { pathname } = useLocation();

  return (

      <nav
        id="mininav"
        className="navbar navbar-dark navbar-expand-lg text-light bg-black d-flex justify-content-center px-2 py-3 "
      >
        <button
          className="navbar-toggler collapsed border-0 text-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="toggle-cont d-flex container-fluid ">
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
            {pathname === "/contact" ? (
              <div className="nav-item-social ps-4">
                {props.contact.map((item, key) => (
                  <i key={key}>
                    <SocialMediaBtn
                      mode={item.mode}
                      fontAwsome={item.fontAwsome}
                      href={item.link}
                    />
                  </i>
                ))}
              </div>
            ) : pathname.startsWith("/me") ? (
              props.sec.map((item, key) => (
                <li className="nav-item ps-4" key={key}>
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
            ) : pathname === "/proyects" ? (
              props.buttons.map((item, key) => (
                <li className=" ps-4" key={key}>
                  <i
                    className="nav-link"
                    category={item.category}
                    onClick={props.handleSort}
                  >
                    {item.name}
                  </i>
                </li>
              ))
            ) : (
              <></>
            )}
          </ul>
        </div>
      </nav>


  );
};

export default MiniNav;
