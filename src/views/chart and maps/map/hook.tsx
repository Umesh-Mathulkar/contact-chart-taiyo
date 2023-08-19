// Importing necessary functions and libraries
import { useQuery } from 'react-query';
import axios from 'axios';
import { MapApiEndpoint } from '../../../services/chartServices'; // Make sure this import is correctly defined

// Interface representing the structure of Covid data
interface CovidData {
  country: string;
  active: number;
  recovered: number;
  deaths: number;
  lat: number;
  lng: number;
}

// Interface representing the structure of the Covid API response
interface CovidApiResponse {
  country: string;
  active: number;
  recovered: number;
  deaths: number;
  countryInfo: {
    lat: number;
    long: number;
  };
}

// Custom hook for fetching and processing Covid data
export function useCovidData() {
  // Use the useQuery hook to fetch Covid data
  return useQuery<CovidData[], Error>('covidData', () =>
    axios
      .get(MapApiEndpoint) // Fetch data from the specified API endpoint
      .then((response) => {
        // Process the fetched data into the desired format
        const data: CovidApiResponse[] = response.data;
        const processedData = data.map((item) => ({
          country: item.country,
          active: item.active,
          recovered: item.recovered,
          deaths: item.deaths,
          lat: item.countryInfo.lat,
          lng: item.countryInfo.long,
        }));
        return processedData;
      })
  );
}
