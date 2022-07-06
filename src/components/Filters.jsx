import React from "react";
import SelectRegion from "./SelectRegion";
import SearchIcon from "@mui/icons-material/Search";
export default function Filters(props) {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [region, setRegion] = React.useState("");
  const handleChange = (event) => {
    setRegion(event.target.value);
    // console.log(region);
    // console.log(event.target.value);
    // props.sortByRegion(region);
    setOpenMenu(false);
  };
  return (
    <div className="filters">
      <div className="filters__cont">
        <SearchIcon className="filters__icon" />
        <input
          className="filters__input"
          type="text"
          placeholder="Search for a country..."
        />
      </div>
      <SelectRegion
        region={region}
        onChange={handleChange}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        sort={props.sort}
      />
    </div>
  );
}
