import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import SampleComponent from './Components/EventHandlerAndBind';
import ParentComponent from './Components/ParentComponent';
import ListComponent from './Components/listComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}

   <SampleComponent></SampleComponent>
   <br></br>
   <hr></hr>
   <ParentComponent></ParentComponent>
   <br></br>
   <hr></hr>
   <ListComponent></ListComponent>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
