import React from "react";
import { LogoBox } from '../../components/Header/LogoBox/LogoBox'
import { TitleBox } from '../../components/Header/HeaderBox/TitleBox'
import SecurityMaster from '../SecurityMaster/SecurityMaster'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import { setTitle } from '../../actions/titleActions'
import { setValue, setTrue } from '../../actions/loginActions'
import './Home.css'
import classNames from 'classnames'

class Home extends React.Component {
    render() {
        var overlay = classNames({ 'bg': (this.props.SecMasRed.openAssetReqt || this.props.SecMasRed.OpenModal) })
        return (
            <section className="home-section h100 w100">
                <div className="container-fluid no-padding h100 w100">
                    <div className={overlay}></div>
                    <div className="row no-margin heading-box">
                        <LogoBox />
                        <TitleBox titleName={this.props.title.name} />
                    </div>

                    <div className="row no-margin body-section">
                        <div className="col-md-12 no-padding h100">
                            <div className="col-md-2 no-padding h100">
                                <NavigationBar 
                                setTrue={this.props.setTrue}
                                setValue={this.props.setValue}/>
                            </div>
                            <div className="col-md-10 h100">
                                {this.props.children}
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        title: state.title,
        SecMasRed: state.SecMasRed,
        logModRed: state.logModRed
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setTitle, setValue, setTrue }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
