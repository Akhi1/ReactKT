import React, { Component } from 'react';
import { Line, Doughnut } from "react-chartjs-2";

class SecondPage extends Component {
    constructor() {
        super();
        this.state = { line: null, available: false };
    }

    labelArray = ['India', 'Germany', 'Iran', 'Sweden', 'Norway']
    dataArray = [100, 32, 48, 122, 90]

    generate = (labelArray, dataArray) => {
        console.log("function aarguements", labelArray, dataArray);
        this.setState({ available: true });
        this.setState({
            line: {
                labels: labelArray,
                datasets: [{
                    label: '# of Votes',
                    data: dataArray,
                    fill: false,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            }
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="ml-4 col-5">
                        {this.state.available === true &&
                            <Line data={this.state.line}></Line>
                        }
                    </div>
                    <div className="ml-4 col-5">
                        {this.state.available === true &&
                            <Doughnut data={this.state.line}></Doughnut>
                        }
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12 text-center">
                        <button className="btn btn-sm rounded-0 btn-success" onClick={() => this.generate(this.labelArray, this.dataArray)}>Generate Data</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SecondPage;