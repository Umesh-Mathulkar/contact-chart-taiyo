// Importing necessary libraries and components
import * as React from 'react';
import { useCasesData } from './hook';
import LineChart from '../../../components/ui/chart';
import Card from '../../../components/ui/card';
import Loading from '../../../components/ui/loading';

// ApexChart component
const ApexChart: React.FC = () => {
  // Use the custom hook to fetch cases data
  const { data, isLoading, isError } = useCasesData();

  // State to manage chart options and series data
  const [options, setOptions] = React.useState({
    chart: {
      id: 'apexchart-example'
    },
    xaxis: {
      categories: [] as string[]
    },
    yaxis: {
      labels: {
        formatter: (value: number) =>
          `${(value / 100000).toLocaleString()}L`
      }
    }
  });

  const [series, setSeries] = React.useState([
    {
      name: 'Cases',
      data: [] as number[]
    },
    {
      name: 'Deaths',
      data: [] as number[]
    },
    {
      name: 'Recovered',
      data: [] as number[]
    }
  ]);

  // Update chart options and series when data changes
  React.useEffect(() => {
    if (data) {
      // Extract dates and data values from fetched data
      const dates = Object.keys(data).map((date) => {
        const d = new Date(date);
        return `${d.toLocaleString('default', { month: 'short' })} ${d.getFullYear()}`;
      });
      const cases = Object.values(data).map((entry) => entry.cases);
      const deaths = Object.values(data).map((entry) => entry.deaths);
      const recovered = Object.values(data).map((entry) => entry.recovered);

      // Update options with dates
      setOptions((prevOptions) => ({
        ...prevOptions,
        xaxis: {
          categories: dates
        }
      }));

      // Update series with data values
      setSeries([
        {
          name: 'Cases',
          data: cases
        },
        {
          name: 'Deaths',
          data: deaths
        },
        {
          name: 'Recovered',
          data: recovered
        }
      ]);
    }
  }, [data]);

  // Render the Loading component while data is being fetched
  return (
    <Loading isLoading={isLoading}>
      {/* Wrap the LineChart component with a Card */}
      <Card title='Covid Statistics' >
        <LineChart options={options} series={series} />
      </Card>
    </Loading>
  );
};

export default ApexChart;
