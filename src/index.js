// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import 'core-js/stable';
import 'regenerator-runtime/runtime'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
  <Provider store={store}>
<BrowserRouter>
<App />
</BrowserRouter>
</Provider>
</React.StrictMode>
 
);

