import React from "react";
export default function DetailsItem(props) {
  return (
    <li className="details__item">
      <span>{props.itemName}</span>&nbsp;
      {props.itemValue}
    </li>
  );
}
