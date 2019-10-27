
const apiKey = 'u9RaORaXroYFdUkpSTgfjH3Rs8ETJ2bn';
const basePath = 'https://dataservice.accuweather.com/';

export const autoCompleteEndPoint = (q) => {
    return basePath + 'locations/v1/cities/autocomplete?apikey=' + apiKey + '&q=' + q;
};