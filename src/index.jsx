import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoute from './routes/AppRoute';
import './style/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoute />
  </React.StrictMode>
);
