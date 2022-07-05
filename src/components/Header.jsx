import React, { useState } from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function Header(props) {
  // const [isDark, setIsDark] = useState(false);
  // const switchMode = () => setIsDark(!isDark);
  return (
    <header className="header">
      <p className="header__title">Where in the world?</p>
      <div onClick={props.toggleTheme} className="header__btn">
        {props.theme ? (
          <DarkModeIcon className="header__icon header__icon--dark" />
        ) : (
          <DarkModeOutlinedIcon className="header__icon header__icon--light" />
        )}
        <p className="header__text">Dark Mode</p>
      </div>
    </header>
  );
}
export default Header;
