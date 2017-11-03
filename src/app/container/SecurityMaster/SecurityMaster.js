import React from "react";
import { setTitle } from "../../actions/titleActions"
import { updateInputValue, selectedAssetData, setTrue, setFalse, setValue } from "../../actions/smActions"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import './SecurityMaster.css'
import { Link, withRouter } from 'react-router'
import AssetRegdReqt from '../../components/AssetRegdReqt/AssetRegdReqt'
import AssetRegistration from '../../components/AssetRegistration/AssetRegistration'
import { Pagination } from 'react-bootstrap';
import { push } from 'react-router-redux';

class SecurityMaster extends React.Component {
    constructor(props) {
        super();
        props.setTitle("SecurityMaster");
    }
    securityMaster() {
        const per_page = 10;
        let assetCount = 0;
        let noAssets = false;
        this.props.SecMasRed.assetsList.map((list, i) => {
            if (!(this.props.SecMasRed.assetType === '--Select Type--')) {
                if (this.props.SecMasRed.assetType === list.assetType) {
                    assetCount++;
                }
            }
            else {
                assetCount = this.props.SecMasRed.assetsList.length;
            }
        });
        const pages = Math.ceil(assetCount / per_page);
        const current_page = this.props.page;
        const start_offset = (current_page - 1) * per_page;
        let start_count = 0;
        let categoryOptions = this.props.SecMasRed.assetTypeList.map((category, i) => {
            return <option key={i} >{category}</option>
        });
        let self = this;
        return (
            <div className="row no-margin">
                <div className="row no-margin">
                    <div className="col-md-4"><h3>Please select an Asset from List:</h3></div>
                    <div className="col-md-4 col-md-offset-4 assetType-div-style">
                        <label id="asset-type-label" htmlFor="asset-type">Asset Type :</label>
                        <select
                            ref="category"
                            id="asset-type"
                            name="assetType"
                            onChange={(event) => this.props.updateInputValue(event)}>
                            {categoryOptions}
                        </select>
                    </div>
                </div>
                <div className="row no-margin">
                    <div className="col-md-12 no-padding">
                        <table className="table table-bordered table-hover table-responsive table-position">
                            <thead>
                                <tr>
                                    <th>Security ID</th>
                                    <th>Security type</th>
                                    <th>Company Name</th>
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                 (assetCount !== 0) ?
                                        (
                                      (this.props.SecMasRed.assetType === '--Select Type--') ?
                                        (
                                            (this.props.SecMasRed.assetsList.map((details, i) => {
                                                if (i >= start_offset && start_count < per_page) {
                                                    start_count++;
                                                    return (
                                                        <tr value={self.selected} name="selected" onClick={() => self.props.selectedAssetData(details)} key={i}>
                                                            <td >{details.securityID}</td>
                                                            <td >{details.securityType}</td>
                                                            <td >{details.companyName}</td>
                                                            <td >{details.address}</td>
                                                        </tr>
                                                    );
                                                }
                                            })
                                            
                                            )
                                        )
                                        :
                                        (
                                            (this.props.SecMasRed.assetsList.map((details, i) => {
                                                if (this.props.SecMasRed.assetType === details.assetType) {
                                                    if (i >= start_offset && start_count < per_page) {
                                                        start_count++;
                                                        return (
                                                            <tr value={self.selected} name="selected" onClick={() => self.props.selectedAssetData(details)} key={i}>
                                                                <td >{details.securityID}</td>
                                                                <td >{details.securityType}</td>
                                                                <td >{details.companyName}</td>
                                                                <td >{details.address}</td>
                                                            </tr>
                                                        );
                                                    }
                                                }
                                            })
                                            )
                                        )
                                    )
                                     :
                                        (
                                            noAssets = true
                                        )

                                }
                            </tbody>
                        </table>
                        <div>
                        {
                            (noAssets === true) ?
                                    (
                                        <div className="noAssetmsg"><h1> No assets Available </h1></div>
                                    ) :
                                   (
                                  <Pagination className="assets-pagination pull-right no-margin" bsSize="medium" maxButtons={10} first last next prev boundaryLinks
                                  items={pages} activePage={current_page} onSelect={this.changePage.bind(this)} />
                                   )
                        }
                            <a onClick={() => this.props.setTrue("openAssetReqt")}>Asset Not listed?</a>
                        </div>
                    </div>
                </div>
            </div >
        );
    }

    render() {
        return (
            <section className="securityMaster-section h100 w100">
                {
                    (this.props.SecMasRed.openAssetReqt) ?
                        (
                            <div className="row no-margin">
                                <AssetRegdReqt
                                    setTitle={this.props.setTitle}
                                    onInputChange={this.props.updateInputValue}
                                    setValue={this.props.setValue}
                                    closeReqtPage={() => this.props.setFalse("openAssetReqt")}
                                    SecMasRed={this.props.SecMasRed}
                                />
                                {this.securityMaster()}
                            </div>
                        )
                        :
                        (
                            (this.props.SecMasRed.OpenModal) ?
                                (
                                    <div>
                                        <AssetRegistration
                                            SD={this.props.SecMasRed.selectedData}
                                            closeRegdPage={() => this.props.setFalse("OpenModal")}
                                        />
                                        {this.securityMaster()}
                                    </div>

                                )
                                :
                                (<div>
                                    {this.securityMaster()}
                                </div>
                                )
                        )
                }
            </section>
        )
    }
    changePage(page) {
        this.props.router.push('/SecurityMaster?page=' + page);
    }

}

const mapStateToProps = (state) => {
    return {
        title: state.title,
        SecMasRed: state.SecMasRed,
        page: Number(state.routing.locationBeforeTransitions.query.page) || 1
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setTitle, updateInputValue, selectedAssetData, setTrue, setFalse, setValue }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SecurityMaster));