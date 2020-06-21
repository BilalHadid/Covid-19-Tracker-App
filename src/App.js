import React, { Fragment } from 'react';
import './App.css';
import {Header} from './component/Header'
import {Chart} from './component/Chart'
import { Cards } from './component/card'

function App() {
  return (
    <Fragment>
    <div className="App">
      <Header />
     
    </div>
     <div>
       <h2>COVID 19 Tracker</h2>
     <Cards/>
     <Chart/>
     </div>
     </Fragment>
  );
}

export default App;
