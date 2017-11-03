import React from "react";
import './SellersList.css';
import { sellersList } from '../../constants'
import { selectedAssetData } from "../../actions/mpActions"



export default class SellersList extends React.Component {
    componentWillMount() {
        this.props.setTitle("Sellers List")
    }
    onSellerlist(details) {
        this.props.setValue({ id: "selectedSeller", val: details });
        this.props.setTrue('openMrktModal');
        this.props.setFalse('OpenModal');
    }
    onClickBack() {
        this.props.setFalse('OpenModal');
        this.props.setTitle("Market Place");
    }
    render() {
        let info = this.props.SD;
        let self = this;
        return (
            <section className="sellersList-section h100 w100">
                <div className="row no-margin">

                    <div className="col-md-12 details-div">
                        <div className="col-md-4 col-md-offset-2">
                            <label>Asset ID:</label>{info.assetID}
                            <br />
                            <label>Asset Name:</label>{info.assetID}
                            <br />
                        </div>
                        <div className="col-md-4 col-md-offset-1">
                            <label>Asset Type:</label>{info.assetID}
                            <br />
                            <label>Security Type:</label>{info.assetID}
                            <br />
                        </div>
                    </div>
                </div>
                <hr />

                <div className="row no-margin seller-heading-div">
                    <div className="col-md-4 no-padding">
                        <h3>Please select a seller from List:</h3>
                    </div>
                    <div className="col-md-2 col-md-offset-6 market-price-style">
                        <label>Market Price:</label>{info.MarketPrice}
                    </div>
                </div>

                <div className="row no-margin">
                    <div className="col-md-12 no-padding">
                        <table className="table table-bordered table-hover table-responsive table-position">
                            <thead>
                                <tr>
                                    <th>Seller ID</th>
                                    <th>Acquisition Price</th>
                                    <th>Available Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    sellersList.map((details, i) => {
                                        return (<tr value={self.selected} name="selected" onClick={() => self.onSellerlist(details)} key={i}>
                                            <td >{details.sellerID}</td>
                                            <td >{details.acquisitionPrice}</td>
                                            <td >{details.availableQuantity}</td>
                                        </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                        <button onClick={() => this.onClickBack()} className="btn">Back</button>
                    </div>
                </div>
            </section>
        )
    }
};





