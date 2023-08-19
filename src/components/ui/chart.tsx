import * as React from 'react';
import Chart from 'react-apexcharts';

// Props interface for the LineChart component
interface LineChartProps {
  options: {
    chart: {
      id: string;
    };
    xaxis: {
      categories: string[];
    };
  };
  series: {
    name: string;
    data: number[];
  }[];
}

// LineChart component
const LineChart: React.FC<LineChartProps> = ({ options, series }) => {
  return (
    <Chart options={options} series={series} type="line" width={'100%'} height={320} />
  );
};

export default LineChart;
