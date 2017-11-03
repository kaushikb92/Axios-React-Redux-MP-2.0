import React from "react";
import './Login.css'
import LoginModal from '../Modal/LoginModal'
import validateUser from '../../../APIs/loginAPI'
import { browserHistory } from 'react-router'

export default class Login extends React.Component {

    getRole() {
        const role = validateUser(this.props.logModRed);
        if (role === 'User') {
            alert('Logged in as User');
            this.props.setTrue('status')
        }
        else if (role === 'Admin') {
            alert('Logged in as Admin');
            browserHistory.push('AdminHome');
        }
        else if (role === 'unidentified') {
            alert('Login failed');
            browserHistory.push('/');
        }

    }

    loginText() {
        return (
            <section className="login-section h100 w100">
                <div className="col-md-5 col-md-offset-1 infoBox">
                    <div className="infoBox-style" >
                        <h2> Simplified BlockChain platform to leap towards Easy trading</h2>
                    </div>
                    <div>
                        <h4>*  Swiftly turns your Illiquid assets to <b>Liquid assets</b></h4>
                        <h4>*  Deals without <b>3rd party</b> interpretation</h4>
                    </div>
                </div>
                <div className="col-md-4 col-md-offset-1 loginBox">
                    <div className="col-md-10 col-md-offset-1">
                        <form autoComplete="off">
                            <div className="whole-div">
                                <div className="clientID-div">
                                    <label htmlFor="clientID">Client ID:</label>
                                    <input
                                        id="clientID"
                                        name="clientID"
                                        value={this.props.clientID}
                                        onChange={(event) => this.props.onInputChange(event)}
                                        minLength="8"
                                        maxLength="8"
                                    />
                                    <hr />
                                </div>
                                <br />

                                <div className="pwd-div">
                                    <label htmlFor="pwd">Password:</label>
                                    <input
                                        type="Password"
                                        name="password"
                                        id="pwd"
                                        value={this.props.password}
                                        onChange={(event) => this.props.onInputChange(event)}
                                    />
                                    <hr />
                                </div>
                                <br />

                                <button
                                    disabled={!(this.props.loginModalRed.clientID && this.props.loginModalRed.password)}
                                    className="btn btn-primary col-md-offset-3"
                                    onClick={() => this.getRole()}>
                                    Login
                                    </button>
                                <br />
                                <a className="col-md-offset-4 fgt-pwd-link" onClick={() => this.props.setTrue("openFgtPwd")}>Forgot Password?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    }

    render() {

        return (
            <div>
                {
                    (!this.props.loginModalRed.status) ?
                        (
                            <div>
                                {this.loginText()}
                            </div>
                        )
                        :
                        (
                            < div >
                                <LoginModal closeModal={this.props.closeModal} />
                                {this.loginText()}
                            </div>
                        )
                }

            </div>
        );
    }
}
