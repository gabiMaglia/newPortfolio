import { NavLink } from "react-router-dom";
import "./miniav.css";
import SearchBar from "../SearchBar/SearchBar";
import SocialMediaBtn from "../Button/SocialMediaBtn";

const MiniNav = (props) => {
  return (
    <>
      <nav
        id="mininav"
        className="navbar navbar-dark navbar-expand-lg text-light bg-black d-flex justify-content-center px-2 py-3 "
      >
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
            {props.contact ? (
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
            ) : props.sec ? (
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
            ) : props.buttons ? (
              props.buttons.map((item, key) => (
                <li className=" ps-4" key={key}>
                  <i className="nav-link ">{item.name}</i>
                </li>
              ))
            ) : (
              <></>
            )}
          </ul>
          {props.searchBar ? <SearchBar onSearch={""} /> : <></>}
        </div>
      </nav>
    </>
  );
};

export default MiniNav;
