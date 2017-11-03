import React from "react";
import Modal from 'react-bootstrap/lib/Modal';
import './MarketPlaceAsset.css'

export default class MarketPlaceAsset extends React.Component {
    onClickClose() {
        this.props.setFalse('openMrktModal');
        this.props.setTrue('OpenModal')
    }
    render() {
        return (
            <section className="MarketPlaceAsset-section h100 w100">
                <div className="modal fade" id="MarketPlaceAsset">
                    <div className="modal-dialog modal-md modal-style">
                        <div className="modal-content ">
                            <div className="modal-header modal-heading">
                                <h4 className="modal-title">Purchase Asset</h4>
                            </div>
                            <div className="modal-body">
                                <label>Quantity:</label><input type="number"></input>
                                <label>Bid Price:</label><input type="number"></input>

                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-primary">Submit</button>
                                <button onClick={() => this.onClickClose()} className="btn">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        )
    }

};
