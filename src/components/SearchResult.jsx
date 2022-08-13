import React from 'react';
import IndiCitySearch from './IndiCitySearch';

const SearchResult = ({citySearchRes,setLat,setLon,setShowSearchResult}) => {
    return(
        <div>
            {
                citySearchRes && citySearchRes.map(city => <IndiCitySearch city={city} setLat={setLat} setLon={setLon} setShowSearchResult={setShowSearchResult} />)
            }
        </div>
    );
}

export default SearchResult;