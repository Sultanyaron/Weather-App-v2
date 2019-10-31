const apiKey = process.env.REACT_APP_API_KEY;
const basePath = 'https://dataservice.accuweather.com/';

export const autoCompleteEndpoint = (q) => {
    return basePath + 'locations/v1/cities/autocomplete?apikey=' + apiKey + '&q=' + q;
};

export const currentWeatherEndpoint = (cityKey) => {
    console.log(apiKey);
    
    return basePath + 'currentconditions/v1/' + cityKey + '?apikey=' + apiKey;
};

export const getoLocationEndpoint = (lat, lon) => {
    return basePath + 'locations/v1/cities/geoposition/search?apikey=' + apiKey + '&q=' + lat + '%2C' + lon;
};  

export const forecastEndpoint = (cityKey) => {
    return basePath + 'forecasts/v1/daily/5day/' + cityKey + '?apikey=' + apiKey + '&metric=true';
};