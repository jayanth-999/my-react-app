import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import ParentComponent from './components/PureComponent';
import FragmentAndRefs from './components/FragmentAndRefs';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <App/> */}
   <ParentComponent/>
   <hr/>
   <br/>
   <FragmentAndRefs/>
  </>
);
