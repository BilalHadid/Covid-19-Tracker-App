import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button'
import Api from './Api/api'
import {Header} from './component/header'

function App() {
  

  return (
    <div className="App">

      <Button variant="contained" color="primary">Hello World</Button>
      {/* <Chart /> */}
      <Header />
      <Api/>
    </div>
  );
}

export default App;
