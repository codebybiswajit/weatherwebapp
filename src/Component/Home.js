import React, { useState } from 'react';
// import cloud_img from '../Assests/weather-2-svgrepo-com.svg'

export default function Home(props) {
  const city = props.city || 'Bhubaneswar';
  const apikey = '1f50415a3ff8a91ea8c33254b7d55fe9';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
  const geocodeUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apikey}`;

  const [isLoading, setIsLoading] = useState(false);
  const [weatherDetails, setWeatherDetails] = useState(null);
  const [cityExists, setCityExists] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const geocodeResponse = await fetch(geocodeUrl);
      const geocodeData = await geocodeResponse.json();
      if (geocodeData.length === 0) {
        setCityExists(false);
        setWeatherDetails(null);
      } else {
        setCityExists(true);
        const response = await fetch(url);
        const data = await response.json();
        setWeatherDetails(data);
      }
    } catch (e) {
      alert(e.message);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className='pt-2 ps-1 bg-dark text-light rounded-bottom container-fluid d-flex flex-column background-image shadow-lg max-height'>
      <button className='btn btn-primary ms-5 me-5 mt-2 mb-2' onClick={fetchData}>
        Get current Weather
      </button>
      {!cityExists && (
        <div>
          <h6 className='text-center fs-6 text-danger'>No City Found Named {props.city}</h6>
        </div>
      )}
      {isLoading && (
        <div className="row">
          <div className="col-md-5"></div>
          <div className="col-md-2">
            <div className="spinner-border text-danger d-flex justify-content-center align-content-center" role="status">
              <span className="visually-hidden">Loading...</span>
            </div></div>
          <div className="col-md-5"></div>
        </div>
      )}
      {weatherDetails && weatherDetails.main && weatherDetails.weather && (
        <div className="row">

          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div className="row float-end">
              <p className='text-danger fs-5'>{weatherDetails.sys.country}</p>
            </div>
            <div className="fetchedData ">
              <h2>{weatherDetails.name}</h2>
              <div className="flex-div d-flex justify-content-between p-1">
                <p>Temperature: {weatherDetails.main.temp}°C</p>
                <div className="img-flex-div d-flex flex-column w-25 justify-content-center align-content-center">
                  <img src={`http://openweathermap.org/img/wn/${weatherDetails.weather[0].icon}@2x.png`} alt="cloud" />

                  <p className='text-center'>{weatherDetails.weather[0].description}</p></div></div>
            </div>
            <div className="row">
              <h3>More details</h3>
              <div className="border border-dark ms-3 mb-5 w-50 bg-primary pt-2">
                <p>Min Temp : {weatherDetails.main.temp_min}</p>
                <p>Wind Speed : {weatherDetails.wind.speed}</p>
                {weatherDetails.rain && weatherDetails.rain['1h'] !== undefined && (
                  <p>Rain: {weatherDetails.rain['1h']} mm</p>
                )}

                <p>Date-Time : {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}</p>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      )}
    </div>
  );
}
