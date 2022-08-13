import React from "react";

const IndiCitySearch = ({city,setLat,setLon,setShowSearchResult}) => {

    function finalizeCity(lan,lon) {
        setLat(lan);
        setLon(lon);
        setShowSearchResult(false);
    }

    return(
        <div style={{display:"flex"}}>
            <p onClick={() => finalizeCity(city.lat, city.lon)}>
                {city && city.name},{city && city.state}, {city && city.country},  {city && city.lat},{city && city.lon}
            </p>
        </div>
    );
}

export default IndiCitySearch;