import { useEffect, useState } from "react"
import CountryCard from "./Components/CountryCard"
import Header from "./Components/Header"
import Filter from "./Components/Filter";
import ReactPaginate from 'react-paginate';
import SearchBar from "./Components/SearchBar";
import "./App.css"
import SearchResult from "./Components/SearchResult";

function App() {

  const [Countries, setCountries]=useState([]);
  let [filterText, setFilterText]=useState("Select by Region");
  const [result,setResult]=useState([]);
  const[page,setPage]=useState(1);



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
  },[]);

  function onFilteredValueSelected(filteredValue){
    setFilterText(filteredValue);
    setPage(1);
  }

  function selectPageHandeler(value)
  {
    if(value>=1&& Math.ceil(value<=filteredCountries.length/12))
    {
      setPage(value);
    }
    
  }
  return (
    <>
    <Header/>
    <div className="container">
      <div className="top">
      <Filter filteredValueSelected={onFilteredValueSelected}/>
      <SearchBar setResults={setResult}/>
      </div>
      {result.slice(0,3).map(country=><SearchResult countryInfo={country} key={country.name.common}/>)}
      <div className="row">
      {filteredCountries.slice(page*12-12,page*12).map(country=><CountryCard countryInfo={country} key={country.name.common}/>)}
      </div>
      <div className="pagination">{/*pagination here*/}
        <span onClick={()=>selectPageHandeler(page-1)}>◀️</span>
        {[...Array(Math.floor(filteredCountries.length/12))].map((_,i)=>{
          return<span className={page===i+1?"active":""} onClick={()=>selectPageHandeler(i+1)} key={i}>{i+1}</span>;
        })}
        <span onClick={()=>selectPageHandeler(page+1)}>▶️</span> 
      </div>
    </div>
    </>
  )
}
export default App
