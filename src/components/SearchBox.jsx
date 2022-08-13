import React, { useEffect } from "react";
import { debounce } from "../helperFunctions/debounce";

const SearchBox = ({
  cityname,
  setCityName,
  searchCityFunc,
  toCityNameUrl,
  setToCityNameUrl,
  setShowSearchResult,
}) => {
  useEffect(() => {
    setShowSearchResult(true);
    setToCityNameUrl(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=3&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    );
  }, [cityname]);

  useEffect(() => {
    searchCityFunc();
  }, [toCityNameUrl]);
  return (
    <>
      <input
        value={cityname}
        onChange={(e) => setCityName(() => e.target.value)}
        placeholder="Enter city name"
        // onKeyUp={debounce(searchCityFunc, 1000)}
      />
    </>
  );
};

export default SearchBox;
