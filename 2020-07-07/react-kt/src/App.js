import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import { Route, BrowserRouter } from 'react-router-dom';
import FirstPage from './components/FirstPage';
import Error from './components/Error';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path='/' exact component={Login} />
          <Route path='/first' exact component={FirstPage} />
          <Route path='/error' exact component={Error} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
