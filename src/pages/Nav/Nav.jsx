import React, { useContext, useEffect, useState } from "react";
import "./Nav.css";
import { navData } from "../../utils/NavData";
import { NavLink } from "react-router-dom";
import {
  FaHeart,
  FaShoppingCart,
  FaSun,
  FaMoon,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { StoreContext } from "../../context/StoreContext";
import Button from "../../component/button/Button";

const Nav = () => {
  const { theme, toggleTheme } = useContext(StoreContext);
  const [isSticky, setIsSTicky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (document.documentElement.scrollTop > 20) {
        setIsSTicky(true);
      } else {
        setIsSTicky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`nav-container ${isSticky ? "sticky" : ""} `}>
      <div className="logo-data">
        <div className="logo">
          <h2>Food</h2>
        </div>
        <div className={`nav-data ${isMobileMenuOpen ? "show" : ""} `}>
          {navData.map((item, index) => (
            <NavLink key={index} to={item.path} className="nav-link">
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="mobile-menu-icon" onClick={handleMobileMenuToggle}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      <div className="user-theme">
        <div className="theme icon">
          {theme === "dark" ? (
            <FaMoon onClick={toggleTheme} />
          ) : (
            <FaSun onClick={toggleTheme} />
          )}
        </div>
        <div className="fav icon">
          <FaHeart />
        </div>
        <div className="cart icon">
          <FaShoppingCart />
        </div>
        <div className="btn">
          <Button label={"sign in"} className={"credential-btn"} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
