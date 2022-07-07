import React, { useEffect, useState } from "react";
//import components
import Header from "./Header";
import Filters from "./Filters";
import Card from "./Card";
import Details from "./Details";
export default function App() {
  // initilize darkTheme state
  const [darkTheme, setDarkTheme] = useState(false);
  // initilize countries state to fetch API data
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState({});

  const [showDetails, setShowDetails] = useState(false);
  // dark&light theme functionality
  const toggleTheme = () => setDarkTheme((curr) => !curr);
  const getCountriesInfo = async function (request = "all") {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/${request}`);
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);
      const data = await response.json();
      setCountries(data);
    } catch (err) {
      console.error(`${err} 💀`);
    }
  };
  //side effect for getting REST countries API data
  useEffect(() => {
    getCountriesInfo();
  }, []);
  const sortByRegion = (region) => {
    getCountriesInfo(`region/${region}`);
  };
  const searchCountry = (country) => {
    country ? getCountriesInfo(`name/${country}`) : getCountriesInfo();
  };
  const handleDetailsShow = (name) => {
    setShowDetails(true);
    setCountry(getCountriesInfo(`name/${name}`));
  };
  return (
    //set an ID for the parent element for elements that are affected by the theme switching
    <div id={darkTheme ? "dark" : "light"}>
      {/* pass darkTheme state and toggleTheme function ot Header component */}
      <Header theme={darkTheme} toggleTheme={toggleTheme} />
      {showDetails ? (
        <Details
          img="https://flagcdn.com/w320/mt.png"
          country="SOmething"
          natName="Belgie"
          reg={country.region}
          subReg="Western Europe"
          cap="Brussels"
          tld=".be"
          curr="Europe"
          lang="Dutch,French"
          borders={["Germany", "France", "Netherland"]}
        />
      ) : (
        <>
          <Filters sort={sortByRegion} search={searchCountry} />
          {/* create grid div with 4 columns */}
          <div className="grid">
            {/* map through fetched countries */}
            {countries.map((coun, i) => {
              // destructure country data
              const {
                flags: { png: img },
                name: { common: country },
                population: pop,
                region: reg,
                capital: cap,
              } = coun;
              return (
                // pass destructured data to Card component and return card for each country
                <Card
                  key={"country" + i}
                  img={img}
                  name={country}
                  population={pop}
                  region={reg}
                  capital={cap}
                  showDetails={handleDetailsShow}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
