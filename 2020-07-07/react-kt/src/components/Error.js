import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Error extends Component {
    render() {
        return (
            <div>
                Error Occured : <Link to='/'><button>Take me back</button></Link>
            </div>
        );
    }
}

export default Error;