import React, { Component } from 'react';
// import FetchAPI from './api/FetchAPI';
import AxiosAPI from './api/AxiosAPI';

class Login extends Component {
    constructor() {
        super();
        this.state = {};
    }

    login = async (event) => {
        event.preventDefault();
        console.log("login data = ", this.state);
        // FetchAPI(this.state).then(resp => {
        //     console.log("login response = ", resp);
        //     if (resp.token != null) {
        //         this.props.history.push('/first');
        //     } else {
        //         this.props.history.push('/error');
        //     }
        // });
        const response = await AxiosAPI.post('/api/login', this.state)
        console.log(response.data);
        if (response.data.token != null) {
            this.props.history.push('/first');
        } else {
            this.props.history.push('/error');
        }
    }

    // onPickUpInput = (event) => {
    //     this.setState({ [event.target.name]: event.target.value });
    // }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 center-card mt-4">
                        <div className="card mt-4" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <h5 className="card-title text-center">LOGIN</h5>
                                <hr />
                                <form id="login-form" onSubmit={this.login}>
                                    <div className="form-row">
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="validationDefault01">Username</label>
                                            <input type="text" name="email" className="form-control" id="validationDefault01" onChange={(e) => this.setState({ email: e.target.value })} required />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="validationDefault02">Password</label>
                                            <input type="password" name="password" className="form-control" id="validationDefault02" onChange={(e) => this.setState({ password: e.target.value })} required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="invalidCheck2" required />
                                            <label className="form-check-label" htmlFor="invalidCheck2">
                                                Agree to terms and conditions
                                    </label>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary w-100">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;