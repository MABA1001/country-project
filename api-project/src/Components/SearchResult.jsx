import React from 'react'
import "../Styles/SearchBarResult.css"
export default function SearchResult(props) {
  return (
    <div className="search-results">
        <div>{props.countryInfo.name.common}</div>
    </div>
  )
};
