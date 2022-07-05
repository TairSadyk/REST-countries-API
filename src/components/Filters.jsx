import React from "react";
import SelectRegion from "./SelectRegion";
import SearchIcon from "@mui/icons-material/Search";
export default function Filters() {
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
      <SelectRegion />
    </div>
  );
}
