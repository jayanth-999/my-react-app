import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Apps from './components/FunComponent1';
import SampleComponent from "./components/SampleComponent"




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <App/> */}
    <SampleComponent/>
    <Apps/>
  </>
);
