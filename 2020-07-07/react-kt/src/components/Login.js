import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {};
    }

    login = (event) => {
        event.preventDefault();
        console.log("login data = ", this.state);
        console.log(this.props);
        if (this.state.username === 'Akhil' && this.state.password === '123') {
            this.props.history.push('/first');
        } else {
            this.props.history.push('/error');
        }
    }

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
                                            <input type="text" className="form-control" id="validationDefault01" onChange={(e) => this.setState({ username: e.target.value })} required />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="validationDefault02">Password</label>
                                            <input type="password" className="form-control" id="validationDefault02" onChange={(e) => this.setState({ password: e.target.value })} required />
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