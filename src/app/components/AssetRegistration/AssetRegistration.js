import React from "react";
import Modal from 'react-bootstrap/lib/Modal';
import './AssetRegistration.css'

export default class AssetRegistration extends React.Component {
    render() {
        return (
            <section className="assetRegistration-section h100 w100">
                <div className="modal fade" id="assetRegistration">
                    <div className="modal-dialog modal-md modal-style">
                        <div className="modal-content ">
                            <div className="modal-header modal-heading">
                                <h4 className="modal-title">Asset Registration Details</h4>
                            </div>
                            <div className="modal-body">
                                <label>Security ID:</label>
                                {this.props.SD.securityID}
                                <br />
                                <label>Security Type:</label>
                                {this.props.SD.securityType}
                                <br />
                                <label>Company Name: </label>
                                {this.props.SD.companyName}
                                <br />
                                <label>Address:</label>
                                {this.props.SD.address}
                                
                                <div>
                                    <label>Quantity: </label>
                                    <input/>
                                    <br />
                                    <label>Acquisition Price: </label><input />
                                    <br />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-primary">Submit</button>
                                <button onClick={this.props.closeRegdPage} className="btn">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        )
    }

};





