import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Counter1 from './components/FunComponent1';
import Counter2 from './components/FunComponent2';
import FunComponent3 from './components/FunComponent3';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <App/> */}
    <Counter1/>
    <Counter2/>
    <FunComponent3/>
  </>
);
