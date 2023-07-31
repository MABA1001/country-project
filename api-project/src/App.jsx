import React, { useEffect, useState } from "react";
import CountryCard from "./Components/CountryCard";
import Header from "./Components/Header";
import Filter from "./Components/Filter";
import SearchBar from "./Components/SearchBar";
import "./App.css";
import SearchResult from "./Components/SearchResult";
import CardDetails from "./Components/CardDetails";

function App() {
  const [Countries, setCountries] = useState([]);
  const [filterText, setFilterText] = useState("Select by Region");
  const [result, setResult] = useState([]);
  const [page, setPage] = useState(1);
  const [details, setDetails] = useState(null);
  const [show, setShow] = useState(false);

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

  return (
    <>
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
          <Filter filteredValueSelected={onFilteredValueSelected} />
          <SearchBar setResults={setResult} />
        </div>
        {result.slice(0, 3).map((country) => (
          <SearchResult
            countryInfo={country}
            key={country.name.common}
          />
        ))}

        <div className="row my-2">
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
    className="pagination-button"
    onClick={() => selectPageHandeler(page - 1)}
    disabled={page === 1}
  >
    ◀️
  </button>
  {[...Array(Math.floor(filteredCountries.length / 12))].map((_, i) => (
    <button
      className={page === i + 1 ? "pagination-button active" : "pagination-button"}
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
    </>
  );
}

export default App;
