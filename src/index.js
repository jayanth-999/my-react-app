import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter1 from './components/Counter1';
import Counter2 from './components/counter2';
import RenderingProps from './components/RenderingProps';
// import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <App/> */}
    <Counter1 />
    <Counter2 />
    <RenderingProps/>
  </>
);
