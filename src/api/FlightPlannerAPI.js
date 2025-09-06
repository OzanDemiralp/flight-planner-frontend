import axios from 'axios';

const API_PLAN_FLIGHT_URL = 'http://localhost:8080/api/flightplan/planflight';

export const Flights = async (formData) => {
  const flightResponse = await axios.post(API_PLAN_FLIGHT_URL, formData);

  return {
    flightData: flightResponse.data,
  };
};
