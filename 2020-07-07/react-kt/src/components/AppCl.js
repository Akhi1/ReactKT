import React, { Component } from 'react';

class AppCl extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        console.log(this.props.data);
        console.log("child props = ", this.props);
        return (
            <div className='App' style={{ backgroundColor: 'yellow' }}>
                Data to render {this.props.data}<br />
                <input type='text' value={this.state.parentData} onChange={this.props.fun} />
            </ div>
        );
    }
}

export default AppCl;