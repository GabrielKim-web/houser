import React, {Component} from 'react';
import {HashRouter} from 'react-router-dom';
import routes from "./routes";
// import axios from 'axios';
import './App.css';
// import Dashboard from './Components/Dashboard/Dashboard';
// import Wizard from './Components/Wizard/Wizard';
import Header from './Components/Header/Header';

class App extends Component {
  constructor () {
    super();

    this.state = {
      
    }
  }
  render() {
    return (
      <HashRouter>
        <div className="App">
          {routes}
          <Header />
        </div>
      </HashRouter>
    )
  }
}

export default App;
