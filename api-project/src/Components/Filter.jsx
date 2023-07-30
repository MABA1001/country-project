import React from 'react'

export default function Filter(props) {

    const filterValueChangeHandeler=(event)=>{
        props.filteredValueSelected(event.target.value);
    }

  return (
    <div className='Filter-area'onChange={filterValueChangeHandeler}>
        <select name="isAvailable">
            <option value="All">Filter By Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Oceania">Oceania</option>
            <option value="Europe">Europe</option>
        </select>
      
    </div>
  )
}
