// Importing necessary libraries and components
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { FaMapMarkerAlt } from 'react-icons/fa';
import ReactDOMServer from 'react-dom/server';
import 'leaflet/dist/leaflet.css';
import { NumericFormat } from 'react-number-format';
import Loading from '../../../components/ui/loading';
import Card from '../../../components/ui/card';
import { useCovidData } from './hook'; // Import the custom hook here

// Define a custom Leaflet icon for markers
const MapIcon = L.divIcon({
  className: 'custom-icon',
  html: ReactDOMServer.renderToString(<FaMapMarkerAlt size={24} color={' #82976E'} />),
});

// Map component
const Map: React.FC = () => {
  // Use the custom hook to fetch Covid data
  const { data: covidData, isLoading, isError } = useCovidData();

  // Display an error message if there's an error
  if (isError) {
    return <p className='text-center text-lg font-semibold text-red-600'>Error fetching COVID-19 data</p>;
  }

  // Function to format numbers using react-number-format
  const formatNumber = (value: number) => {
    return (
      <NumericFormat value={value} thousandSeparator=',' thousandsGroupStyle='lakh' displayType='text' />
    );
  };

  // Render the Loading component while data is being fetched
  return (
    <Loading isLoading={isLoading}>
      {/* Wrap the map inside a Card component */}
      <Card title='Covid Map'>
        <MapContainer center={[20.5937, 78.9629]} zoom={4} style={{ height: '400px', width: '100%' }}>
          {/* Add the OpenStreetMap tile layer */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Map each Covid data item to a Marker */}
          {covidData?.map((item) => (
            <Marker position={[item.lat, item.lng]} key={item.country} icon={MapIcon}>
              {/* Popup with Covid data */}
              <Popup>
                <h2 className='font-bold text-lg'>{item.country}</h2>
                <p className='text-sm'>Active cases: {formatNumber(item.active)}</p>
                <p className='text-sm'>Recovered cases: {formatNumber(item.recovered)}</p>
                <p className='text-sm'>Deaths: {formatNumber(item.deaths)}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </Card>
    </Loading>
  );
};

export default Map;
