import "./Navbar.scss";
import { images } from "../../constants";
import { links } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <span className="logoName"> {"< PRINCE />"}  </span>
        {/* <img src={images.myname} alt="logo" /> */}
      </div>
      <ul className="app__navbar-link">
        {links.map((link) => {
          return (
            <li key={`link-${link}`} className="app__flex p-text">
              <div></div>
              <a href={`#${link}`}>{link}</a>
            </li>
          );
        })}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        <div
          
          onClick={() => setToggle(false)}
          className={toggle ? "showSideNav" : ""}
        >
          {<HiX onClick={() => setToggle(false)} />}
          <ul>
            {links.map((link) => {
              return (
                <li key={link}>
                  <a href={`#${link}`} onClick={() => setToggle(false)}>
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
