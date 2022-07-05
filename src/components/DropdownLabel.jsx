import React from "react";
export default function DropdownLabel(props) {
  return (
    <label className="dropdown__label" htmlFor={props.id}>
      {props.name}
    </label>
  );
}
