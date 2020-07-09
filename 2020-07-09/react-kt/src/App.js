import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import FirstPage from './components/FirstPage/FirstPage';
import SecondPage from './components/SecondPage/SecondPage';
import Error from './components/Error';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path='/' exact component={Login} />
          <Route path='/first' exact component={FirstPage} />
          <Route path='/second' exact component={SecondPage} />
          <Route path='/error' exact component={Error} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
