import React, { useState } from "react";
import Header from "./Header";
import Filters from "./Filters";
import Card from "./Card";
// const ThemeContext = React.createContext(null);
function App() {
  const getCountriesInfo = async function (request) {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/${request}`);
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);
      const data = await response.json();
      return data.slice(0, 12);
    } catch (err) {
      console.error(`${err} 💀`);
    }
  };
  window.addEventListener("load", () => getCountriesInfo("all"));

  // countriesData.slice(0, 20).forEach((country) => console.log(country.name));
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => setDarkTheme((curr) => !curr);
  return (
    <div id={darkTheme ? "dark" : "light"}>
      <Header theme={darkTheme} toggleTheme={toggleTheme} />
      <Filters />
      <div className="grid">
        {window.addEventListener("load", async function () {
          const countries = await getCountriesInfo("all");
          console.log(countries);
          return countries.map(async (country) => {
            <Card
              img={country.flags["png"]}
              country={country.name["official"]}
              population={country.population}
              region={country.region}
              capital={country.capital[0]}
            />;
          });
        })}

        {/* <Card
          img="https://flagcdn.com/w320/cy.png"
          country="Cyprus"
          population={1207361}
          region="Europe"
          capital="Nicosia"
        />
        <Card
          img="https://flagcdn.com/w320/cy.png"
          country="Cyprus"
          population={1207361}
          region="Europe"
          capital="Nicosia"
        /> */}
      </div>
    </div>
  );
}
export default App;
