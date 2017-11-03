import React from "react";
import './AssetRegdReqt.css'
import classNames from 'classnames'

export default class AssetRegdReqt extends React.Component {

    render() {
        var customAssetType = classNames({ 'custom-div': this.props.SecMasRed.regdAssetSubType !== 'Custom/User-Defined' })
        let AssetTypes = this.props.SecMasRed.assetTypeList.map((Types, i) => {
            return <option key={i} >{Types}</option>
        });
        let AssetSubTypes = this.props.SecMasRed.subTypesList[this.props.SecMasRed.regdAssetType].subTypes.map((subAssets, i) => {
            return <option key={i} >{subAssets}</option>
        });
        return (
            <section className="assetRegdReqt-section h100 w100">
                <div className="modal fade" id="assetRegdReqtModal">
                    <div className="modal-dialog modal-md modal-style">
                        <div className="modal-content">
                            <div className="modal-header modal-heading">
                                <h4 className="modal-title">Asset Registration Request</h4>
                            </div>
                            <div className="modal-body">
                                <form autoComplete="off">
                                    <div>
                                        <label>Security Name:</label>
                                        <input></input>
                                        <br />
                                        <label htmlFor="regd-asset-type">Asset Type :</label>
                                        <select
                                            id="regd-asset-type"
                                            name="regdAssetType"
                                            onChange={(event) => this.props.onInputChange(event)}>
                                            {AssetTypes}
                                        </select>
                                        <br />
                                        <label htmlFor="regd-asset-subType">Sub-type :</label>
                                        <select
                                            id="regd-asset-subType"
                                            name="regdAssetSubType"
                                            onChange={(event) => this.props.onInputChange(event)}>
                                            {AssetSubTypes}
                                        </select>
                                        <br />
                                        <div className={customAssetType}>
                                            <label htmlFor="custom-asset-type">Custom Asset Name:</label>
                                            <input
                                                id="custom-asset-type"
                                                name="customAssetType"
                                                onChange={(event) => this.props.onInputChange(event)}>
                                                </input>
                                        </div>
                                        <label>Company Name:</label>
                                        <input></input>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-primary modal-btn">Submit Request</button>
                                <button onClick={this.props.closeReqtPage} className="btn modal-btn">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        )
    };
}

