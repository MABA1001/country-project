import React, { useState } from 'react'
import "../Styles/countryCard.css"
import { ThemeContext } from "./ThemeContext";

function CountryCard(props) {
  const { toggle } = React.useContext(ThemeContext);
  function clickEventHandeler()
  {
    props.cardClicked(props.countryInfo)
  }
  return (
    <div className={toggle ? "darkCountry card col-sm-12 col-md-6 col-lg-3" : "light card col-sm-12 col-md-6 col-lg-3 m"} style={{marginTop:"20px", width:"300px"}} onClick={clickEventHandeler}>
      <img src={props.countryInfo.flags.png} style={{width:"100%", height:"55%"}} className="card-img-top" alt="Card image" />
      <div className="card-body">
        <h5 className="card__title">{props.countryInfo.name.common}</h5>
        <p className="card__text">
          <ul  >
            <li className={toggle?"darkish":null}>Capital: <span className='info1'>{props.countryInfo.capital}</span></li>
            <li className={toggle?"darkish":null}>Region:  <span className='info2'>{props.countryInfo.region}</span></li>
            <li className={toggle?"darkish":null}>Population: <span className='info3'>{props.countryInfo.region}</span></li>
          </ul>
        </p>
      </div>
    </div>
  )
}

export default CountryCard
