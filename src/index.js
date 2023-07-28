import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { store, persistor } from './redux/store';
import { ErrorBoundary } from 'react-error-boundary';
import { ChakraProvider } from '@chakra-ui/react';
import Notiflix from 'notiflix';

import './index.css';
Notiflix.Notify.init();

function ErrorFallback({ error }) {
  return <div>Ошибка: {error.message}</div>;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <BrowserRouter basename="/">
          <PersistGate loading={null} persistor={persistor}>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <App />
            </ErrorBoundary>
          </PersistGate>
        </BrowserRouter>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
