import React from "react";

// Importing necessary components and libraries
import Map from "./map";
import { QueryClient, QueryClientProvider } from 'react-query';
import ApexChart from "./chart";

// Creating a new QueryClient instance
const queryClient = new QueryClient();

// ChartAndMap component
const ChartAndMap: React.FC = () => {
    return (
        <div className="w-full">
            {/* Wrap components with QueryClientProvider to enable React Query */}
            <QueryClientProvider client={queryClient}>
                {/* Render the Map component */}
                <Map />

                {/* Render the ApexChart component */}
                <ApexChart />
            </QueryClientProvider>
        </div>
    );
}

export default ChartAndMap;
