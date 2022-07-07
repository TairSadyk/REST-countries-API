import React from "react";
export default function Details(props) {
  return (
    <aside className="details">
      <button className="details__btn-back">Back</button>
      <img src={props.img} alt="flag" className="details__img" />
      <div className="details__text">
        <h2 className="details__heading">{props.country}</h2>
        <ul className="details__list">
          <li className="details__item">
            <span>Native Name</span>&nbsp;
            {props.natName}
          </li>
          <li className="details__item">
            <span>Population:</span>&nbsp;
            {props.pop}
          </li>
          <li className="details__item">
            <span>Region:</span>&nbsp;
            {props.reg}
          </li>
          <li className="details__item">
            <span>Sub Region:</span>&nbsp;
            {props.subReg}
          </li>
          <li className="details__item">
            <span>Capital:</span>&nbsp;
            {props.cap}
          </li>
          <li className="details__item">
            <span>Top Level Domain:</span>&nbsp;
            {props.tld}
          </li>
          <li className="details__item">
            <span>Currencies:</span>&nbsp;
            {props.curr}
          </li>
          <li className="details__item">
            <span>Languages:</span>&nbsp;
            {props.lang}
          </li>
        </ul>
        <div className="details__border-countries">
          <p className="details__paragraph">Border Countries</p>
          <div className="details__btns">
            {/* <button className="details__btn-country">{props.border}</button> */}
            {props.borders.map((border, i) => (
              <button key={"countryBtn" + i} className="details__btn-country">
                {border}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
