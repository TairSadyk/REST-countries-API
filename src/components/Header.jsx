import React, { useState } from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";
function Header() {
  const [isDark, setIsDark] = useState(false);
  const switchMode = () => setIsDark(!isDark);
  return (
    <header className={isDark ? "header header--dark" : "header header--light"}>
      <p className="header__title">Where in the world?</p>
      <div onClick={switchMode} className="header__btn">
        {isDark ? (
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
