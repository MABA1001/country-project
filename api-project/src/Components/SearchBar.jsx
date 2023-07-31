import React, { useState } from 'react'

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
  return (
    <div class="container">
    <div class="row height d-flex justify-content-right align-items-right">
      <div class="col-md-5" style={{marginLeft:"51%"}}>
        <div class="search">
          <i class="fa fa-search"></i>
          <input type="text" class="form-control" value={input} placeholder="Search Country name" 
          onChange={(e)=>handleChange(e.target.value)}/>
        </div>
      </div>
      
    </div>
</div>
  )
}
