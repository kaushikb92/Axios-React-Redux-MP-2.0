import React from 'react'
import './NavigationBar.css'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'

export default class NavigationBar extends React.Component {

    logoutUser() {
        this.props.setValue({ id: 'clientID', val: '' })
        this.props.setValue({ id: 'password', val: '' })
        browserHistory.replace('/')
    }

    render() {
        return (
            <section className="navigationBar-section h100">
                <nav className="navbar navbar-default nav-bar-style">
                    <ul className="nav navbar-nav">
                        <Link to="#"><button className="btn btn-primary nav-btn">My Holdings</button></Link>
                        <Link to="#"><button className="btn btn-primary nav-btn">Trade Ledger</button></Link>
                        <Link to="#"><button className="btn btn-primary nav-btn">My Requests</button></Link>
                        <Link to="#"><button className="btn btn-primary nav-btn">My Profile</button></Link>
                        <Link to="/"><button
                            onClick={() => this.props.setTrue('status')}
                            className="btn btn-primary nav-btn">Change Role</button></Link>
                        <button
                            onClick={() => this.logoutUser()}
                            className="btn btn-primary nav-btn">Logout</button>
                    </ul>

                </nav>
            </section>
        );
    }
}