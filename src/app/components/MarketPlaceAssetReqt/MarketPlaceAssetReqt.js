
import React from "react";
import './MarketPlaceAssetReqt.css'

export default class MarketPlaceAssetReqt extends React.Component {
    render() {
        let AssetTypes = this.props.Types.map(Assets => {
            return <option key={Assets} value={Assets} >{Assets}</option>
        });
        let AssetSubTypes = this.props.subTypes.map(subAssets => {
            return <option key={subAssets} value={subAssets} >{subAssets}</option>
        });
        return (
            <section className="marketPlaceAssetReqt-section h100 w100">
                <div className="modal fade" id="marketPlaceAssetReqtModal">
                    <div className="modal-dialog modal-md modal-style">
                        <div className="modal-content">
                            <div className="modal-header modal-heading">
                                <h4 className="modal-title">Asset Registration Request</h4>
                            </div>
                            <div className="modal-body">
                                <form autoComplete="off">
                                    <div>
                                        <label>Secutity Name:</label>
                                        <input></input>
                                        <br />
                                        <label htmlFor="regd-asset-type">Asset Type :</label>
                                        <select
                                            id="regd-asset-type"
                                            name="regdAssetType"
                                            value={this.props.regdAssetType}
                                            onChange={this.props.onInputChange}
                                        >
                                            {AssetTypes}
                                        </select>
                                        <br />
                                        <label htmlFor="regd-asset-subType">Sub-type :</label>
                                        <select
                                            id="regd-asset-subType"
                                            name="regdAssetSubType"
                                            value={this.props.regdAssetSubType}
                                            onChange={this.props.onInputChange}
                                        >
                                            {AssetSubTypes}
                                        </select>
                                        <br />
                                        <label>Company Name:</label>
                                        <input></input>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-primary modal-btn">Submit request</button>
                                <button onClick={this.props.closeReqtPage} className="btn modal-btn">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        )
    };
}
MarketPlaceAssetReqt.defaultProps = {
    Types: ['--Select type--', 'Equity', 'Fixed Income', 'Real Estate', 'OTC Derivative', 'Commodity', 'Alternative'],
    subTypes: ['--Select type--', 'Dummy1', 'Dummy2', 'Dummy3']
}

