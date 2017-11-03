import React from "react";
import './userRegd.css'
import { Link } from 'react-router'
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import { setTitle } from "../../../actions/titleActions"

class userRegd extends React.Component {
    componentDidMount() {
        this.props.setTitle("User Registration");
    }
    regdRecord() {
        alert('data saved successfully');
    }


    render() {
        return (
            <section className="userRegd-section h100 w100">
                <div className="col-md-5 col-md-offset-4 userRegd-box-style">
                    <div className="row no-margin">

                        <div className="row no-margin">
                            <div className="col-md-10">
                                <h2>Please enter the Details :-</h2>
                            </div>
                        </div>

                        <div className="row no-margin">

                            <div className="col-md-10">
                                <form autoComplete="off">
                                    <div className="row no-margin">
                                        <label htmlFor="Adm-Fst-Name">First Name :</label>
                                        <input className= "userregd-input"
                                            name="fstName"
                                            id="Adm-Fst-Name"
                                            onChange={(event) => this.props.updateInputValue(event)}
                                            />
                                            <hr/>
                                        <br />
                                        <label htmlFor="Adm-Lst-Name">Last Name :</label>
                                        <input className="userregd-input"
                                            name="lstName"
                                            id="Adm-Lst-Name"
                                            onChange={(event) => this.props.updateInputValue(event)}
                                            />
                                            <hr/>
                                        <br />
                                        <label htmlFor="Adm-Regd-Mob">Mobile Number :</label>
                                        <input className="userregd-input"
                                            type="number"
                                            name="AdmMobNo"
                                            id="Adm-Regd-Mob"
                                            onChange={(event) => this.props.updateInputValue(event)}
                                            />
                                            <hr/>
                                        <br />
                                        <label htmlFor="Adm-Regd-pwd">Password :</label>
                                        <input className="userregd-input"
                                            type="password"
                                            name="Adminpwd"
                                            id="Adm-Regd-pwd"

                                            onChange={(event) => this.props.updateInputValue(event)}
                                            />
                                            <hr/>
                                        <br />
                                        <label htmlFor="Adm-Cnfrm-Pwd">Confirm Password :</label>
                                        <input className="userregd-input"
                                            type="password"
                                            name="AdmCnfrmPassword"
                                            id="Adm-Cnfrm-Pwd"
                                            onChange={(event) => this.props.updateInputValue(event)}
                                            />
                                            <hr/>
                                        <br />
                                    </div>

                                    <div className="row no-margin">
                                        <div className="col-md-offset-4">
                                            <button onClick={() => this.regdRecord()} className="btn btn-primary">Submit</button>
                                            <Link to="AdminHome"><button onClick={() => this.props.setTitle("Admin Home")} className="btn col-md-offset-1">Close</button></Link>
                                        </div>
                                    </div>

                                </form>
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
        title: state.title,

    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setTitle }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(userRegd);