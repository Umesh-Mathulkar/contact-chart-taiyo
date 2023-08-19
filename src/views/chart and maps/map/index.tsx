import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { FaMapMarkerAlt } from 'react-icons/fa';
import ReactDOMServer from 'react-dom/server';
import 'leaflet/dist/leaflet.css';
import { NumericFormat } from 'react-number-format';
import Loading from '../../../components/ui/loading';
import Card from '../../../components/ui/card';
import { useCovidData } from './hook';

const MapIcon = L.divIcon({
  className: 'custom-icon',
  html: ReactDOMServer.renderToString(<FaMapMarkerAlt size={24} color={'#82976E'} />),
});

const Map: React.FC = () => {
  const { data: covidData, isLoading, isError } = useCovidData();

  if (isError) {
    return <p className='text-center text-lg font-semibold text-red-600'>Error fetching COVID-19 data</p>;
  }

  const formatNumber = (value: number) => {
    return (
      <NumericFormat value={value} thousandSeparator=',' thousandsGroupStyle='lakh' displayType='text' />
    );
  };

  return (
    <Loading isLoading={isLoading}>
      <Card title='Covid Map'>
        <MapContainer center={[20.5937, 78.9629]} zoom={4} style={{ height: '400px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {covidData?.map((item) => (
            <Marker position={[item.lat, item.lng]} key={item.country} icon={MapIcon}>
              <Popup className='popup-content'>
                <div className='bg-gray-100 py-3 pl-3 rounded'>
                  <h2 className='font-bold text-lg'>{item.country}</h2>
                </div>
                <hr />
                <div className=''>
                  <p className='text-sm'>
                    Active cases: <span className='badge bg-gray-500 text-white px-2 py-1 rounded'>{formatNumber(item.active)}</span>
                  </p>
                  <p className='text-sm'>
                    Recovered cases: <span className='badge bg-emerald-500 text-white px-2 py-1 rounded'>{formatNumber(item.recovered)}</span>
                  </p>
                  <p className='text-sm'>
                    Deaths: <span className='badge bg-red-500 text-white px-2 py-1 rounded'>{formatNumber(item.deaths)}</span>
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </Card>
    </Loading>
  );
};

export default Map;
