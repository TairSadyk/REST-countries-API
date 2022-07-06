import React from "react";
import DropdownLabel from "./DropdownLabel";
import DropdownInput from "./DropdownInput";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardControlKeyIcon from "@mui/icons-material/KeyboardControlKey";

export default function SelectRegion(props) {
  const regions = ["africa", "america", "asia", "europe", "oceania"];
  const hideStyle = {
    visibility: "none",
    opacity: "0",
    pointerEvents: "none",
  };
  const showStyle = {
    visibility: "visible",
    opacity: "1",
    pointerEvents: "visible",
  };

  // const [region, setRegion] = React.useState("");

  const handleClick = () => props.setOpenMenu(!props.openMenu);
  // const handleChange = (event) => {
  //   setRegion(event.target.value);
  //   setOpenMenu(false);
  // };
  const capitalize = (input) => input[0].toUpperCase() + input.slice(1);

  return (
    <div className="filters__dropdown-menu">
      <div className="filters__btn" onClick={handleClick}>
        <p className="filters__btn-text">
          {props.region ? capitalize(props.region) : "Filter by Region"}
        </p>
        {props.openMenu ? (
          <KeyboardControlKeyIcon className="filters__btn-icon" />
        ) : (
          <KeyboardArrowDownIcon className="filters__btn-icon" />
        )}
      </div>
      <div className="dropdown" style={props.openMenu ? showStyle : hideStyle}>
        {regions.map((reg, i) => {
          return (
            <>
              <DropdownLabel key={"lab" + i} id={reg} name={capitalize(reg)} />
              <DropdownInput
                key={"inp" + i}
                id={reg}
                value={reg}
                onChange={props.onChange}
                sort={props.sort}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}
