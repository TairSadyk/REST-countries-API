import React from "react";
import DropdownLabel from "./DropdownLabel";
import DropdownInput from "./DropdownInput";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function SelectRegion() {
  const hideStyle = { visibility: "none", opacity: "0", pointerEvents: "none" };
  const showStyle = {
    visibility: "visible",
    opacity: "1",
    pointerEvents: "visible",
  };
  const regions = ["africa", "america", "asia", "europe", "oceania"];
  const [region, setRegion] = React.useState("");
  const [openMenu, setOpenMenu] = React.useState(false);
  const handleClick = () => setOpenMenu(!openMenu);
  const handleChange = (event) => {
    setRegion(event.target.value);
    setOpenMenu(false);
  };
  const capitalize = (input) => input[0].toUpperCase() + input.slice(1);

  return (
    <div className="filters__dropdown-menu">
      <div className="filters__btn" onClick={handleClick}>
        <p className="filters__btn-text">
          {region ? capitalize(region) : "Filter by Region"}
        </p>
        <KeyboardArrowDownIcon className="filters__btn-icon" />
      </div>
      <div className="dropdown" style={openMenu ? showStyle : hideStyle}>
        {regions.map((region, i) => {
          return (
            <DropdownLabel
              key={"lab" + i}
              id={region}
              name={capitalize(region)}
            />
          );
        })}
        {regions.map((region, i) => (
          <DropdownInput
            key={"inp" + i}
            id={region}
            value={region}
            onChange={handleChange}
          />
        ))}

        {/* <label className="dropdown__label" htmlFor="africa">
          Africa
        </label>
        <input
          name="region"
          className="dropdown__option"
          type="radio"
          id="africa"
          value="africa"
          onChange={handleChange}
        />
        <label className="dropdown__label" htmlFor="america">
          America
        </label>
        <input
          name="region"
          className="dropdown__option"
          type="radio"
          id="america"
          value="america"
          onChange={handleChange}
        />
        <label className="dropdown__label" htmlFor="asia">
          Asia
        </label>
        <input
          name="region"
          className="dropdown__option"
          type="radio"
          id="asia"
          value="asia"
          onChange={handleChange}
        />
        <label className="dropdown__label" htmlFor="europe">
          Europe
        </label>
        <input
          name="region"
          className="dropdown__option"
          type="radio"
          id="europe"
          value="europe"
          onChange={handleChange}
        />
        <label className="dropdown__label" htmlFor="oceania">
          Oceania
        </label>
        <input
          name="region"
          className="dropdown__option"
          type="radio"
          id="oceania"
          value="oceania"
          onChange={handleChange}
        /> */}
      </div>
    </div>
  );
}
