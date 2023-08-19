// Importing necessary functions and libraries
import { useQuery } from 'react-query';
import axios from 'axios';
import { ChartApiEndpoint } from '../../../services/chartServices'; // Make sure this import is correctly defined

// Interface representing the structure of cases data
interface CasesData {
  [date: string]: {
    cases: number;
    deaths: number;
    recovered: number;
  };
}

// Custom hook for fetching and filtering cases data
export function useCasesData() {
  // Use the useQuery hook to fetch cases data
  return useQuery<CasesData, Error>('casesData', () =>
    axios
      .get(ChartApiEndpoint) // Fetch data from the specified API endpoint
      .then((res) => {
        // Filter data to include points for every 6 months
        const data = res.data;
        const filteredData: CasesData = {};

        const dates = Object.keys(data.cases);
        for (let i = 0; i < dates.length; i++) {
          const currentDate = new Date(dates[i]);
          const isFirstOfMonth = currentDate.getDate() === 1;
          const isFirstOfYear = currentDate.getMonth() === 0 && isFirstOfMonth;

          // Include data points for the first day of every 6 months
          if (isFirstOfMonth && (isFirstOfYear || currentDate.getMonth() % 6 === 0)) {
            filteredData[dates[i]] = {
              cases: data.cases[dates[i]],
              deaths: data.deaths[dates[i]],
              recovered: data.recovered[dates[i]],
            };
          }
        }

        return filteredData;
      })
  );
}
