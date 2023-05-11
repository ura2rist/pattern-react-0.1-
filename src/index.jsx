import './style.scss';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import { Provider } from 'react-redux';
import { store } from './reducers';
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={ store }>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
);