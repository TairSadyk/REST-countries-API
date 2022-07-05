import React from "react";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";

export default function SelectRegion() {
  const [region, setRegion] = React.useState("");

  const handleChange = (event) => {
    setRegion(event.target.value);
  };

  return (
    <div>
      <label htmlFor="select-region">Filter By Region</label>
      <select id="select-region" onChange={handleChange}>
        <option value={"africe"}>Africa</option>
        <option value={"america"}>America</option>
        <option value={"asia"}>Asia</option>
        <option value={"europe"}>Europe</option>
        <option value={"oceania"}>Oceania</option>
      </select>
    </div>
    // <FormControl className="filters__select" sx={{ m: 1, minWidth: 120 }}>
    //   <InputLabel id="select-region">Filter by Region:</InputLabel>
    //   <Select
    //     labelId="select-region"
    //     id="select-region"
    //     value={region}
    //     label="Region"
    //     onChange={handleChange}
    //   >
    //     <MenuItem value={"africe"}>Africa</MenuItem>
    //     <MenuItem value={"america"}>America</MenuItem>
    //     <MenuItem value={"asia"}>Asia</MenuItem>
    //     <MenuItem value={"europe"}>Europe</MenuItem>
    //     <MenuItem value={"oceania"}>Oceania</MenuItem>
    //   </Select>
    // </FormControl>
  );
}
