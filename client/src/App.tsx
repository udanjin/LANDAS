import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/Router';

export default function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}