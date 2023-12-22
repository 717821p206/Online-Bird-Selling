import React from 'react';
import ReactDOM from 'react-dom/client';

 import App from './App'
// import FirstBird from './pages/FirstBirdDetails';
import reportWebVitals from './reportWebVitals';
// import MoreDetails from './pages/MoreDetails';
// import AddBirds from './pages/AddBirds';
import DeleteBird from './pages/DeleteBirds';
import Order from './pages/Order';
import Success from './pages/Success';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <App />
  </React.StrictMode>
);
reportWebVitals();
