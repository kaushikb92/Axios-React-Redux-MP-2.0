import React from "react";
import './AdminList.css'
import { Link } from 'react-router'
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import { setValue } from '../../../actions/loginActions'
import { browserHistory } from 'react-router'

class AdminList extends React.Component {
    logoutUser() {
        this.props.setValue({ id: 'clientID', val: '' })
        this.props.setValue({ id: 'password', val: '' })
        browserHistory.replace('/')
    }
    render() {
        return (
            <section className="AdminList-section h100 w100">

                <div className="row no-margin">
                    <div className="col-md-8 col-md-offset-2 admin-box-style">
                        <div className="row no-margin">
                            <h1>Welcome, Administrator !!!</h1>
                            <h5>What would you like to do today?</h5>
                        </div>
                        <div className="row details-row">
                            <div className="col-md-9 col-md-offset-2">
                                <div className="col-md-4">
                                    <label>Total Users</label>
                                    <output>15</output>
                                </div>
                                <div className="col-md-3 col-md-offset-1">
                                    <label>Total Assets</label>
                                    <output>459</output>
                                </div>
                                <div className="col-md-3 col-md-offset-1">
                                    <label>Pending Requests</label>
                                    <output>8</output>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row no-margin">
                    <div className="col-md-8 col-md-offset-2 admin-action-box-style">
                        <h3>Select a task :-</h3>
                        <div className="col-md-10 col-md-offset-1">
                            <div className="col-md-4">
                                <Link to="/userRegd"><button>Register New User</button></Link><br />
                                <Link to="/registerAsset"><button>Register New Asset</button></Link><br />
                                <Link to="#"><button>View pending Requests</button></Link><br />
                            </div>
                            <div className="col-md-3 col-md-offset-1">
                                <Link to="#"><button>View all Assets</button></Link><br />
                                <Link to="#"><button>View all Users</button></Link><br />
                                <Link to="#"><button>My Requests</button></Link><br />
                            </div>
                            <div className="col-md-3 col-md-offset-1">
                                <Link to="/adminExplorer"><button>BlockExplorer</button></Link><br />
                                <button onClick={() => this.logoutUser()}>Logout</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        )
    }

};
const mapStateToProps = (state) => {
    return {

        title: state.title
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setValue }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminList);
