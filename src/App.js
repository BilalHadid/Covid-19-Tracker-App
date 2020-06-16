import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button'
import {Chart} from './component/chart'

function App() {
  

  return (
    <div className="App">
      <Button variant="contained" color="primary">Hello World</Button>
      <Chart />
    </div>
  );
}

export default App;
