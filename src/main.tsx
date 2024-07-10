import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { StyledEngineProvider } from '@mui/material';
import ErrorBoundary from './components/shared/ErrorboundaryFallback/ErrorboundaryFallback.tsx';
import SuspenseWithFallback from './components/shared/SuspenseWithFallback/SuspenseWithFallback.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './redux/store.ts';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <StyledEngineProvider injectFirst>
          <ErrorBoundary>
            <Routes>
              <Route
                element={
                  <SuspenseWithFallback>
                    <App />
                  </SuspenseWithFallback>
                }
                path="/*"
              />
            </Routes>
          </ErrorBoundary>
        </StyledEngineProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
