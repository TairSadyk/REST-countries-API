import React from "react";
export default function DropdownInput(props) {
  return (
    <input
      name="region"
      className="dropdown__option"
      type="radio"
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      onClick={() => props.sort(props.value)}
    />
  );
}
