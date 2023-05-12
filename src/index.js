import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import SampleComponent from "./components/SampleComponent"
import SampleComponent2 from './components/SampleComponent2';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <App/> */}
    <SampleComponent/>
    <SampleComponent2/>
  </>
);
