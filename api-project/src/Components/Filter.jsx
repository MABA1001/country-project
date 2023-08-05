import React from 'react';
import '../Styles/filter.css';
import { ThemeContext } from "./ThemeContext";

export default function Filter(props) {
  const filterValueChangeHandeler = (event) => {
    props.filteredValueSelected(event.target.value);
    props.reset?event.target.value='All':""
  };
  const { toggle} = React.useContext(ThemeContext);
  return (
      <select className={toggle ? "darkStyle filter-select":"filter-select"} onChange={filterValueChangeHandeler} >
        <option value='All'>ALL</option>
        <option value='Africa'>Africa</option>
        <option value='Americas'>America</option>
        <option value='Asia'>Asia</option>
        <option value='Oceania'>Oceania</option>
        <option value='Europe'>Europe</option>
      </select>
    
  );
}
