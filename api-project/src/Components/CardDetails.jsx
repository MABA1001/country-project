import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import '../Styles/details.css';
import { ThemeContext } from "./ThemeContext";


const CardDetails = (props) => {
  function clickHandeler() {
    props.crossClicked(false);
  }
  const { toggle } = React.useContext(ThemeContext);
  return (
    <>
      {props.clickedCountryDetails ? (
        <div className={toggle ? "details dark":"details"}>
          <div className='card card-d'>
            <button className='close-button' onClick={clickHandeler}>
              <AiFillCloseCircle size={30}  />
            </button>
            <div className='details-content'>
              <div className='details-image'>
                <img
                  src={props.clickedCountryDetails.flags.png}
                  alt='Country Flag'
                />
              </div>
              <div className='details-info' >
                <h2>{props.clickedCountryDetails.name.common}</h2>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>
                    <strong>Official Name:</strong>{' '}
                    {props.clickedCountryDetails.name.official}
                  </li>
                  <li className='list-group-item'>
                    <strong>Area:</strong> {props.clickedCountryDetails.area}
                  </li>
                  <li className='list-group-item'>
                    <strong>Capital:</strong>{' '}
                    {props.clickedCountryDetails.capital}
                  </li>
                  <li className='list-group-item'>
                    <strong>TimeZone:</strong>{' '}
                    {props.clickedCountryDetails.timezones}
                  </li>
                  <li className='list-group-item'>
                    <strong>Region:</strong>{' '}
                    {props.clickedCountryDetails.region}
                  </li>
                  <li className='list-group-item'>
                    <strong>Subregion:</strong>{' '}
                    {props.clickedCountryDetails.subregion}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CardDetails;
