import React from "react";
import DetailsItem from "./DetailsItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
export default function Details(props) {
  const fm = new Intl.NumberFormat({ style: "decimal" });
  const ItemsArr = [
    ["Native Name:", props.natName],
    ["Population:", fm.format(props.pop)],
    ["Region:", props.reg],
    ["Sub Region:", props.subreg],
    ["Capital:", props.cap],
    ["Top Level Domain:", props.tld],
    ["Currencies:", props.curr],
    ["Languages:", props.lang],
  ];
  return (
    <aside className="details">
      <button className="details__btn-back" onClick={props.return}>
        &larr; Back
      </button>
      <img src={props.img} alt="flag" className="details__img" />
      <div className="details__text">
        <h2 className="details__heading">{props.country}</h2>
        <ul className="details__list">
          {ItemsArr.map((item, i) => {
            return (
              <DetailsItem
                key={"DetailsListItem" + i}
                itemName={item[0]}
                itemValue={item[1]}
              />
            );
          })}
        </ul>
        <div className="details__border-countries">
          <p className="details__paragraph">Border Countries:</p>
          <div className="details__btns">
            {/* <button className="details__btn-country">{props.border}</button> */}
            {props.borders ? (
              props.borders.map((border, i) => (
                <button
                  onClick={(e) => props.getNeighbour(e.target.innerText)}
                  key={"countryBtn" + i}
                  className="details__btn-country"
                >
                  {border}
                </button>
              ))
            ) : (
              <p>No neigbors</p>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
