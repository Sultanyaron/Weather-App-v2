
const apiKey = 'u9RaORaXroYFdUkpSTgfjH3Rs8ETJ2bn';
const basePath = 'https://dataservice.accuweather.com/';

export const autoCompleteEndpoint = (q) => {
    return basePath + 'locations/v1/cities/autocomplete?apikey=' + apiKey + '&q=' + q;
};

export const currentWeatherEndpoint = (cityKey) => {
    return basePath + 'currentconditions/v1/' + cityKey + '?apikey=' + apiKey;
};

export const getoLocationEndpoint = (lat, lon) => {
    return basePath + 'locations/v1/cities/geoposition/search?apikey=' + apiKey + '&q=' + lat + '%2C' + lon;
};  