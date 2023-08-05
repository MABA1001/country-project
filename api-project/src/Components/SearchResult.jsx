import React from 'react'
import "../Styles/SearchBarResult.css"
export default function SearchResult(props) {
  function clickEventHandeler()
  {
    props.clickedCountry(props.countryInfo);
  }
  return (
    <div className="search-results" onClick={clickEventHandeler}>
        <div >{props.countryInfo.name.common} </div>
    </div>
  )
};
