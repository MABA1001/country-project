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
  const pageCount=10;
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

  function handlePageClick(data) // pagination handeling
  {
    console.log(data.selected);
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
      {filteredCountries.map(country=><CountryCard countryInfo={country} key={country.name.common}/>)}
      </div>
    </div>
    {/* <ReactPaginate breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
        /> */}
    </>
  )
}

export default App
