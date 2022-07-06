import React from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

function Header(props) {
  return (
    <header className="header">
      <p className="header__title">Where in the world?</p>
      <div onClick={props.toggleTheme} className="header__btn">
        {props.theme ? (
          <LightModeIcon className="header__icon header__icon--dark" />
        ) : (
          <DarkModeOutlinedIcon className="header__icon header__icon--light" />
        )}
        <p className="header__text">{props.theme ? "Light" : "Dark"} Mode</p>
      </div>
    </header>
  );
}
export default Header;
