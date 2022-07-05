import React, { useState } from "react";
import Header from "./Header";
import Filters from "./Filters";
// const ThemeContext = React.createContext(null);
function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => setDarkTheme((curr) => !curr);
  return (
    <div id={darkTheme ? "dark" : "light"}>
      <Header theme={darkTheme} toggleTheme={toggleTheme} />
      <Filters />
    </div>
  );
}
export default App;
