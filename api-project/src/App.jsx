import React, { useEffect, useState} from "react";
import CountryCard from "./Components/CountryCard";
import Header from "./Components/Header";
import Filter from "./Components/Filter";
import SearchBar from "./Components/SearchBar";
import "./App.css";
import SearchResult from "./Components/SearchResult";
import CardDetails from "./Components/CardDetails";
import { ThemeContext } from "./Components/ThemeContext";
import Sort from "./Components/sort";

function App() {
  const { toggle } = React.useContext(ThemeContext);
  const [Countries, setCountries] = useState([]);
  const [filterText, setFilterText] = useState("Select by Region");
  const [result, setResult] = useState([]);
  const [page, setPage] = useState(1);
  const [details, setDetails] = useState(null);
  const [show, setShow] = useState(false);
  const [sortedValue,setSortedValue]=useState("");
  const [resetfilter, setFilterField]=useState("");

  

  let filteredCountries = Countries.filter((country) => {
    if (filterText === "Americas") {
      return country.region === "Americas";
    } else if (filterText === "Oceania") {
      return country.region === "Oceania";
    } else if (filterText === "Asia") {
      return country.region === "Asia";
    } else if (filterText === "Europe") {
      return country.region === "Europe";
    } else if (filterText === "Africa") {
      return country.region === "Africa";
    } else {
      return country;
    }
  });

  const getCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    setCountries(await response.json());
  };

  useEffect(() => {
    getCountries();
  }, []);

  function onFilteredValueSelected(filteredValue) {
    setFilterText(filteredValue);
    setPage(1);
  }

  function selectPageHandeler(value) {
    if (value >= 1 && Math.ceil(value <= filteredCountries.length / 12)) {
      setPage(value);
    }
  }

  function cardClickedhandeler(ObjectReceived) {
    setDetails(ObjectReceived);
    setShow(true);
  }

  function crossClickHandeler(value) {
    setShow(value);
  }

  const handleClickedCountry= async (country) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${country.name.common}`);
    setCountries(await response.json());
    setFilterField(true);
  };

  const onSortedValueSelected=(sortedValue)=>{
    setSortedValue(sortedValue);
    if(sortedValue==="population")
    {
      Countries.sort((a,b)=>{
        if(a.population<b.population)
        {
          return -1;
        }
        if(a.population>b.population)
        {
          return 1;
        }
        return 0;

      })
    }
    else if(sortedValue==="Name")
    {
      Countries.sort((a,b)=>{
        const nameA = a.name.common.toUpperCase(); 
        const nameB = b.name.common.toUpperCase();
        if (nameA < nameB) {
           return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
      })
    }
  }

  return (
    <>
    <div className={toggle ? "dark" : "light"}>
      <Header />
      {show && (
        <div className="fullscreen">
          <CardDetails
            clickedCountryDetails={details}
            crossClicked={crossClickHandeler}
          />
        </div>
      )}
      <div className="container">
        <div className="top">
          <div style={{display:"flex"}}>
          <Filter filteredValueSelected={onFilteredValueSelected} reset={resetfilter} />
          <Sort sortValueSelected={onSortedValueSelected}/>
          </div>
          <SearchBar setResults={setResult} />
        </div>
        {result.slice(0, 3).map((country) => (
          <SearchResult
            countryInfo={country}
            key={country.name.common}
            clickedCountry={handleClickedCountry}
          />
        ))}

        <div className="row my-2" style={{justifyContent:'space-between'}}>
          {filteredCountries.slice(page * 12 - 12, page * 12).map((country) => (
            <CountryCard
              countryInfo={country}
              key={country.name.common}
              cardClicked={cardClickedhandeler}
            />
          ))}
        </div>
        <div className="pagination">
  <button
    className={toggle ? "dark-pg pagination-button" : "light pagination-button"}
    onClick={() => selectPageHandeler(page - 1)}
    disabled={page === 1}
  >
    ◀️
  </button>
  {[...Array(Math.floor(filteredCountries.length / 12))].map((_, i) => (
    <button
    
      className={page === i + 1 ? "pagination-button active" : "pagination-button" }
      onClick={() => selectPageHandeler(i + 1)}
      key={i}
    >
      {i + 1}
    </button>
  ))}
  <button
    className="pagination-button"
    onClick={() => selectPageHandeler(page + 1)}
    disabled={page === Math.floor(filteredCountries.length / 12)}
  >
    ▶️
  </button>
</div>
      </div>
      </div>
    </>
  );
}

export default App;
