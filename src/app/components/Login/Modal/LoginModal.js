import React from "react";
import Modal from 'react-bootstrap/lib/Modal';
import './LoginModal.css'
import { browserHistory } from 'react-router'

export default class LoginModal extends React.Component {

    onClickBuy() {
        browserHistory.replace("/MarketPlace");
        this.props.closeModal("status");
    }
    onClickSell() {
        browserHistory.replace("/SecurityMaster");
        this.props.closeModal("status");
    }
    render() {
        return (
            <section className="loginModal-section h100 w100">
                <div className="modal fade" id="myModal">
                    <div className="modal-dialog modal-sm modal-style">
                        <div className="modal-content">

                            <button
                                onClick={() => this.props.closeModal("status")}
                                type="button"
                                className="close close-cross">
                                &times;
                        </button>

                            <div className="modal-header modal-header-style">
                                <h4 className="modal-title">Please select a role</h4>
                            </div>

                            <div className="modal-body modal-body-style">

                                <button
                                    onClick={() => this.onClickBuy()}
                                    type="button"
                                    className="btn btn-primary modal-btn col-md-offset-2">
                                    Buy
                                </button>

                                <button type="button"
                                    onClick={() => this.onClickSell()}
                                    className="btn btn-primary modal-btn col-md-offset-1">
                                    Sell
                                </button>

                            </div>
                            <div className="modal-footer" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
