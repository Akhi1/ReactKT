import React, { Component } from 'react';
import AppCl from './AppCl';


class FirstPage extends Component {
    constructor() {
        super();
        this.state = { myName: '', receivedData: '', data: '' };
    }
    addName = (event) => {
        this.setState({ myName: event.target.value });
        console.log("parent state", this.state);
    }
    childData = (data) => {
        console.log("from child", data.target.value);
        this.setState({ receivedData: data.target.value });
    }

    empData = () => {
        this.setState({
            data: [
                {
                    name: "Akhil",
                    place: "hyderabad"
                },
                {
                    name: "Martin",
                    place: "mumbai"
                },
                {
                    name: "Roshan",
                    place: "chennai"
                }
            ]
        });

    }

    render() {
        return (
            <div>
                <div className="App">
                    Hello React <input type='text' value={this.state.parentData} onChange={this.addName} />
                    <button onClick={this.empData}>Generate data</button>
                    <hr />
                    {this.state.myName}
                    <AppCl data={this.state.myName} fun={this.childData}></AppCl>
                    From child = {this.state.receivedData}
                </div>
                <div className="card w-50 mt-4 mx-auto">
                    {
                        // this.state.data.length > 1 &&
                        this.state.data.length > 1 ?
                            this.state.data.map((e, i) =>
                                <div key={i} className="card-body border">
                                    {e.name}<br />{e.place}
                                </div>
                            ) :
                            <div className="card-body border">
                                <p>No data, please generate data</p>
                            </div>
                    }
                </div>
            </div>
        );
    }
}

export default FirstPage;