import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import store, { persistor } from './store/store';
import Layout from './components/layout';
import Contact from './views/contact';
import ChartAndMap from './views/chart and maps';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Layout>
            <Routes>
              <Route index path="/" element={<Contact />} />
              <Route  path="/chart-map" element={<ChartAndMap />} />
            </Routes>
          </Layout>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
