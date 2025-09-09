import axios from 'axios';

const API_CITIES = 'http://localhost:8080/api/flightplan/planflight';

export const Cities = async (formData) => {
  const citiesResponse = await axios.post(API_CITIES, formData);

  return {
    citiesData: citiesResponse.data,
  };
};
