import axios from 'axios';

const API_CITIES = 'http://localhost:8080/api/flightplan/cities';

export const Cities = async () => {
  const citiesResponse = await axios.get(API_CITIES);

  return {
    citiesData: citiesResponse.data,
  };
};
