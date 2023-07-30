import { useEffect, useState } from "react"
import CountryCard from "./Components/CountryCard"
import Header from "./Components/Header"
import Filter from "./Components/Filter";

function App() {

  const [Countries, setCountries]=useState([]);
  let [filterText, setFilterText]=useState("Select by Region");

  const itemsPerPage=8;

  let filteredCountries= Countries.filter((country)=>{
    if(filterText==="Americas")
    {
      return country.region==='Americas';
    }
    else if(filterText==="Oceania")
    {
      return country.region==='Oceania';
    }
    else if(filterText==="Asia")
    {
      return country.region==='Asia';
    }
    
    else if(filterText==="Europe")
    {
      return country.region==='Europe';
    }
    else if(filterText==="Africa")
    {
      return country.region==='Africa';
    }
    else{
      return country;
    }
  });
  const getCountries= async()=>{
    const response = await fetch("https://restcountries.com/v3.1/all");
    setCountries(await response.json()); 
  }

  useEffect(() => {
    getCountries();
  },[itemsPerPage]);

  function onFilteredValueSelected(filteredValue){
    setFilterText(filteredValue);
  }
 
  return (
    <>
    <Header/>
    <Filter filteredValueSelected={onFilteredValueSelected}/>
    <div className="container">
      <div className="row">
      {filteredCountries.map(country=><CountryCard countryInfo={country} key={country.name.common}/>)}
      </div>
    </div>
    </>
  )
}

export default App
