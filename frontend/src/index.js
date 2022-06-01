import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MoralisProvider } from "react-moralis";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MoralisProvider
      serverUrl='https://ujwb1som3llq.usemoralis.com:2053/server'
      appId='TPzse1a4T6YsxrbB5Em4weILu5cR0AUplKU43QsZ'
    >
      <App />
    </MoralisProvider>
  </React.StrictMode>
);

