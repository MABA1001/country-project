import React from 'react'

function CountryCard(props) {
  return (
    <div className="card col-sm-12 col-md-6 col-lg-3 mx-3 " style={{marginTop:"20px", maxWidth:"230px"}}>
      <img src={props.countryInfo.flags.png} style={{width:"100%", height:"55%"}} className="card-img-top" alt="Card image" />
      <div className="card-body">
        <h5 className="card__title">{props.countryInfo.name.common}</h5>
        <p className="card__text">
          <ul>
            <li>Capital: {props.countryInfo.capital}</li>
            <li>Region={props.countryInfo.region}</li>
            <li>Population={props.countryInfo.population}</li>
          </ul>
        </p>
      </div>
    </div>
  )
}

export default CountryCard
