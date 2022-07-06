import React from "react";
export default function Card(props) {
  // Intl API to format numbers based on the user location
  const fm = new Intl.NumberFormat({ style: "decimal" });
  return (
    <article className="card">
      <img className="card__img" src={props.img} alt="Flag" />
      <h3 className="card__title">{props.name}</h3>
      <ul className="card__list">
        <li className="card__item">
          <span>Population:</span>&nbsp;
          {fm.format(props.population)}
        </li>
        <li className="card__item">
          <span>Region:</span>&nbsp;
          {props.region}
        </li>
        <li className="card__item">
          <span>Capital:</span>&nbsp;
          {props.capital}
        </li>
      </ul>
    </article>
  );
}
