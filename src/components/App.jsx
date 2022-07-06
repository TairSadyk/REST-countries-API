import React, { useEffect, useState } from "react";
import Header from "./Header";
import Filters from "./Filters";
import Card from "./Card";
// const ThemeContext = React.createContext(null);
function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [countries, setCountries] = useState([]);

  // countriesData.slice(0, 20).forEach((country) => console.log(country.name));

  const toggleTheme = () => setDarkTheme((curr) => !curr);
  useEffect(() => {
    const getCountriesInfo = async function () {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/all`);
        if (!response.ok)
          throw new Error(`Country not found (${response.status})`);
        const data = await response.json();
        setCountries(data);
        // console.log(countries);
      } catch (err) {
        console.error(`${err} 💀`);
      }
    };
    getCountriesInfo();
  }, []);
  console.log(countries);
  return (
    <div id={darkTheme ? "dark" : "light"}>
      <Header theme={darkTheme} toggleTheme={toggleTheme} />
      <Filters />
      <div className="grid">
        {countries &&
          countries.map((country) => {
            return (
              <Card
                img={country.flags["png"]}
                name={country.name["common"]}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            );
          })}
      </div>
    </div>
  );
}
export default App;
