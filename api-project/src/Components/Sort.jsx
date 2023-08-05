import React from 'react';
import '../Styles/filter.css';
import { ThemeContext } from "./ThemeContext";

export default function Sort(props) {

const sortValueChangeHandler=(event)=>{
    props.sortValueSelected(event.target.value)
}
const { toggle} = React.useContext(ThemeContext);
  return (

    <select className={toggle ? "darkStyle filter-select":"filter-select"} onChange={sortValueChangeHandler} defaultValue="non">
      <option value='non' disabled>Sort By</option>
      <option value='Name'>Name</option>
      <option value='population'>Population</option>
    </select>

  
  );
}
