import React, { Component } from 'react';
import AppCl from './AppCl';


class FirstPage extends Component {
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

export default FirstPage;