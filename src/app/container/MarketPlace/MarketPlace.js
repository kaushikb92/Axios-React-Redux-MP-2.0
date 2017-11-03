import React from "react";
import { setTitle } from "../../actions/titleActions";
import { updateInputValue, selectedAssetData, setTrue, setFalse, setValue } from "../../actions/mpActions"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import './MarketPlace.css'
import { Link, withRouter } from 'react-router'
import { Pagination } from 'react-bootstrap';
import { push } from 'react-router-redux';
import MarketPlaceAsset from '../../components/MarketPlaceAsset/MarketPlaceAsset'
import MarketPlaceAssetReqt from '../../components/MarketPlaceAssetReqt/MarketPlaceAssetReqt'
import SellersList from '../../components/SellersList/SellersList'




class MarketPlace extends React.Component {
    constructor(props) {
        super();
        props.setTitle("Market Place");
    }
    marketPlace() {
        const per_page = 10;
        let assetCount = 0;
        let noAssets = false;
        this.props.MrktPlcRed.mpAssetList.map((list, i) => {
            if (this.props.MrktPlcRed.assetType !== '--Select Type--') {
                if (this.props.MrktPlcRed.assetType === list.assetType) {
                    assetCount++;
                }
            }
            else {
                assetCount = this.props.MrktPlcRed.mpAssetList.length;
            }
        });
        const pages = Math.ceil(assetCount / per_page);
        const current_page = this.props.page;
        const start_offset = (current_page - 1) * per_page;
        let start_count = 0;
        let categoryOptions = this.props.MrktPlcRed.assetTypeList.map((category, i) => {
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
                                    <th>Asset ID</th>
                                    <th>Asset Name</th>
                                    <th>Asset Type</th>
                                    <th>Security Type</th>
                                    <th>Market Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    (assetCount !== 0) ?
                                        (

                                            (this.props.MrktPlcRed.assetType === '--Select Type--') ?
                                                (
                                                    this.props.MrktPlcRed.mpAssetList.map((details, i) => {
                                                        if (i >= start_offset && start_count < per_page) {
                                                            start_count++;
                                                            return (<tr value={self.selected} name="selected" onClick={() => self.props.selectedAssetData(details)} key={i}>
                                                                <td >{details.assetID}</td>
                                                                <td >{details.assetName}</td>
                                                                <td >{details.assetType}</td>
                                                                <td >{details.securityType}</td>
                                                                <td >{details.MarketPrice}</td>
                                                            </tr>
                                                            );
                                                        }
                                                    })

                                                )
                                                :
                                                (
                                                    (this.props.MrktPlcRed.mpAssetList.map((details, i) => {

                                                        if (this.props.MrktPlcRed.assetType === details.assetType) {
                                                            if (i >= start_offset && start_count < per_page) {
                                                                start_count++;
                                                                return (<tr value={self.selected} name="selected" onClick={() => self.props.selectedAssetData(details)} key={i}>
                                                                    <td >{details.assetID}</td>
                                                                    <td >{details.assetName}</td>
                                                                    <td >{details.assetType}</td>
                                                                    <td >{details.securityType}</td>
                                                                    <td >{details.MarketPrice}</td>
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
                                        <Pagination className="assets-pagination pull-right" bsSize="medium" maxButtons={10} first last next prev boundaryLinks
                                            items={pages} activePage={current_page} onSelect={this.changePage.bind(this)} />
                                    )
                            }



                            <a onClick={() => this.props.setTrue("openAssetReqt")}>Asset Not listed?</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    render() {

        return (
            <section className="marketPlace-section h100 w100">
                {
                    (this.props.MrktPlcRed.openAssetReqt) ?
                        (
                            <div className="row no-margin">
                                <MarketPlaceAssetReqt
                                    setTitle={this.props.setTitle}
                                    onInputChange={(event) => this.props.updateInputValue(event)}
                                    closeReqtPage={() => this.props.setFalse("openAssetReqt")}
                                    />
                                {this.marketPlace()}
                            </div>
                        )
                        :
                        (
                            (this.props.MrktPlcRed.OpenModal) ?
                                (
                                    <div className="row no-margin">
                                        <SellersList
                                            setTitle={this.props.setTitle}
                                            setValue={this.props.setValue}
                                            setTrue={this.props.setTrue}
                                            setFalse={this.props.setFalse}
                                            SD={this.props.MrktPlcRed.selectedData}
                                            />
                                    </div>

                                )
                                :
                                (
                                    (this.props.MrktPlcRed.openMrktModal) ?
                                        (
                                            <div className="row no-margin">
                                                <MarketPlaceAsset setFalse={this.props.setFalse} setTrue={this.props.setTrue} />
                                            </div>

                                        )
                                        :
                                        (<div>
                                            {this.marketPlace()}
                                        </div>
                                        )
                                )
                        )
                }
            </section>
        )
    }
    changePage(page) {
        this.props.router.push('/MarketPlace?page=' + page);
    }

}
MarketPlace.defaultProps = {
    categories: ['--Select type--', 'Equity', 'Fixed Income', 'Real Estate', 'OTC Derivative', 'Commodity', 'Alternative']
}

const mapStateToProps = (state) => {
    return {
        title: state.title,
        MrktPlcRed: state.MrktPlcRed,
        page: Number(state.routing.locationBeforeTransitions.query.page) || 1
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setTitle, updateInputValue, selectedAssetData, setTrue, setFalse, setValue }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MarketPlace));
