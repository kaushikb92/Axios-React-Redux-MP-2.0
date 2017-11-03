import React from "react"
import { LogoBox } from '../../components/Header/LogoBox/LogoBox'
import { TitleBox } from '../../components/Header/HeaderBox/TitleBox'
import { connect } from "react-redux"
import { setTitle } from "../../actions/titleActions"
import { updateInput, setFalse, setTrue } from "../../actions/loginActions"
import { bindActionCreators } from 'redux';
import './App.css'
import Login from '../../components/Login/LoginBox/Login'
import classNames from 'classnames'
import ForgotPassword from '../../components/ForgotPassword/ForgotPassword'

class App extends React.Component {
    componentWillMount() {
        this.props.setTitle("Welcome");
    }
    render() {
        var overlay = classNames({ 'bg': this.props.logModRed.status })
        return (
            <section className="App-Section h100 w100">
                <div className="container-fluid no-padding h100 w100">
                    <div className={overlay}></div>
                    <div className="row no-margin heading-box">
                        <LogoBox />
                        <TitleBox titleName={this.props.title.name} />
                    </div>

                    {
                        !this.props.logModRed.openFgtPwd ?
                            (

                                <div className="row no-margin body-section">
                                    <div className="col-md-12">
                                        <Login
                                            logModRed={this.props.logModRed}
                                            setTrue={this.props.setTrue}
                                            loginModalRed={this.props.logModRed}
                                            onInputChange={(event) => this.props.updateInput(event)}
                                            closeModal={this.props.setFalse}
                                        />
                                    </div>
                                </div>
                            )
                            :
                            (
                                <div>
                                    <ForgotPassword
                                        setTitle={this.props.setTitle}
                                        goHome={this.props.setFalse}
                                        onInputChange={(event) => this.props.updateInput(event)}
                                        loginModalRed={this.props.logModRed}
                                    />
                                </div>
                            )
                    }
                </div>
            </section>
        );
    }
}


const mapStateToProps = (state) => {
    return {

        title: state.title,
        logModRed: state.logModRed
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setTitle, updateInput, setFalse, setTrue }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
