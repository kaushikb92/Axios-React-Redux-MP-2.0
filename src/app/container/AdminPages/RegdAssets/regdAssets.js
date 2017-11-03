import React from "react";
import './regdAssets.css'
import { Link } from 'react-router'
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import { setTitle } from "../../../actions/titleActions"
import { updateInputValue } from "../../../actions/adminActions"
import classNames from 'classnames'

class regdAssets extends React.Component {
    componentDidMount() {
        this.props.setTitle("Asset Registration");
    }
    render() {
        var AdmncustomAssetType = classNames({ 'custom-div': this.props.AdminReducer.AstRegdSubType !== 'Custom/User-Defined' })
        let assetTypes = this.props.AdminReducer.assetTypeList.map((assets, i) => {
            return <option key={i}>{assets}</option>
        });
        let subAssetTypes = this.props.AdminReducer.subTypesList[this.props.AdminReducer.AstRegdType].subTypes.map((subAssets, i) => {
            console.log(subAssets);
            return <option key={i}>{subAssets}</option>
        })
        return (
            <section className="regdAssets-section h100 w100">
                <div className="col-md-6 col-md-offset-3 regdAssets-box-style">
                    <div className="row no-margin">
                        <div><h3>Please enter the Details :-</h3></div>
                        <form autoComplete="off">
                            <div>
                                <label htmlFor="Admn-ast-regd-name">Security Name :</label>
                                <input
                                    name="astRegdName"
                                    id="Admn-ast-regd-Name"
                                    onChange={(event) => this.props.updateInputValue(event)}
                                />
                                <br />
                                <label htmlFor="Admn-regd-ast-type">Asset type :</label>
                                <select
                                    id="Admn-regd-ast-type"
                                    name="AstRegdType"
                                    onChange={(event) => this.props.updateInputValue(event)}>{assetTypes}</select>

                                <br />
                                <label htmlFor="Admn-regd-ast-subType">Sub-type :</label>
                                <select
                                    id="Admn-regd-ast-subType"
                                    name="AstRegdSubType"
                                    onChange={(event) => this.props.updateInputValue(event)}>{subAssetTypes}</select>
                                <br />
                                <div className={AdmncustomAssetType}>
                                    <label htmlFor="custom-asset-type">Custom Asset Type:</label>
                                    <input
                                        id="Admn-custom-asset-type"
                                        name="AdmncustomAssetType"
                                        onChange={(event) => this.props.onInputChange(event)}>
                                    </input>
                                </div>
                                <label htmlFor="Admn-Mrkt-price">Market Price :</label>
                                <input
                                    type="number"
                                    name="AstRegdMktPr"
                                    id="Admn-Mrkt-price"
                                    onChange={(event) => this.props.updateInputValue(event)}
                                />
                                <br />
                                <label htmlFor="Admn-ast-regd-cmpnyName">Company Name :</label>
                                <input
                                    name="AstRegdCmpnyName"
                                    id="Admn-ast-regd-cmpnyName"
                                    onChange={(event) => this.props.updateInputValue(event)}
                                />
                                <br />
                                <label htmlFor="Admn-ast-regd-addr">Address :</label>
                                <input
                                    name="astRegdAddr"
                                    id="Admn-ast-regd-addr"
                                    onChange={(event) => this.props.updateInputValue(event)}
                                />
                                <br />
                            </div>
                            <br />
                            <button className="btn btn-primary">Submit</button>
                            <Link to="AdminHome"><button onClick={() => this.props.setTitle("Admin Home")} className="btn col-md-offset-1">Close</button></Link>
                        </form>
                    </div>
                </div>
            </section>
        )
    }

};


const mapStateToProps = (state) => {
    return {
        title: state.title,
        AdminReducer: state.AdminReducer

    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setTitle, updateInputValue }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(regdAssets);