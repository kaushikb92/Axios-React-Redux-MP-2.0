import React from "react";
import './AdminHome.css'
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import { LogoBox } from '../../../components/Header/LogoBox/LogoBox'
import { TitleBox } from '../../../components/Header/HeaderBox/TitleBox'
import { setTitle } from '../../../actions/titleActions'

class AdminHome extends React.Component {
    constructor(props) {
        super(props);
        this.props.setTitle("Admin Home")
    }
    render() {
        return (
            <section className="adminhome-section h100 w100">
                <div className="container-fluid no-padding h100 w100">

                    <div className="row no-margin heading-box">
                        <LogoBox />
                        <TitleBox titleName={this.props.title.name} />
                    </div>

                    <div className="row no-margin body-section">
                        <div className="col-md-12 no-padding h100">
                            {this.props.children}
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {

        title: state.title
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setTitle }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminHome);
