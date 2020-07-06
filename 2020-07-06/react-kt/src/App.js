import React, { Component } from 'react';
import './App.css';
import AppCl from './AppCl';

// let myName = '';
// function App() {
//   let addName = (event) => {
//     myName = event.target.value;
//     console.log(myName);
//   }

//   return (
// <div className="App">
//   Hello React
//   <input type='text' onChange={addName} />
//   <button>Add Name</button>
//   <hr />
//   {myName}
//   <AppCl ></AppCl>
// </div>
//   );

class App extends Component {
  constructor() {
    super();
    this.state = { myName: '', receivedData: '' };
  }
  addName = (event) => {
    this.setState({ myName: event.target.value });
    console.log("parent state", this.state);
  }

  childData = (data) => {
    console.log("from child", data.target.value);
    this.setState({ receivedData: data.target.value });
  }

  render() {
    return (
      <div>
        <div className="App">
          Hello React <input type='text' value={this.state.parentData} onChange={this.addName} />
          <button>Add Name</button>
          <hr />
          {this.state.myName}
          <AppCl data={this.state.myName} fun={this.childData}></AppCl>
          From child = {this.state.receivedData}
        </div>
      </div>
    );
  }
}

export default App;
