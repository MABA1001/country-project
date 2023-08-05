import React, { useState } from 'react'
import { ThemeContext } from "./ThemeContext";
import "../Styles/searchBar.css"

export default function SearchBar({setResults}) {
    const [input, setInput]=useState("");
    const fetchData=(value)=>{
        fetch('https://restcountries.com/v3.1/all').then(response=>response.json()).then(json=>{
            const results=json.filter((country)=>{
                return value && country && country.name.common && country.name.common.toLowerCase().includes(value.toLowerCase())
            })
            setResults(results);
        })
    }
    const handleChange=(value)=>{
        setInput(value);
        fetchData(value);
    }
    const { toggle} = React.useContext(ThemeContext);
  return (
    
      <div className="col-md-5" >
        <div className="search" style={{height: '100%'}}>
          <input style={{height: '100%'}} type="text" className={toggle ? "darkBar form-control":"form-control"} value={input} placeholder="Search Country name" 
          onChange={(e)=>handleChange(e.target.value)}/>
        </div>
      </div>

  )
}