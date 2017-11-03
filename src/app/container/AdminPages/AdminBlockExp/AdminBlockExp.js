import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import './AdminBlockExp.css'
import { Link, withRouter } from 'react-router'
import { Pagination } from 'react-bootstrap'
import { push } from 'react-router-redux'
import { setTitle } from "../../../actions/titleActions"
import { updateInputValue, setTrue, setFalse, setValue, getBlockData } from '../../../actions/adminActions'
import axios from 'axios'
import { countOfBlocks } from '../../../constants'
// import getBlockData from '../../../APIs/blockDataAPI'
let regeneratorRuntime =  require("regenerator-runtime");

class AdminBlockExp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            countOfBlocks: '',
            Block: []
        }
    }
    componentWillMount() {
        this.props.setTitle("Block Explorer");
        axios.get('http://cil-blockchain1.uksouth.cloudapp.azure.com:4200/blockchain/count')
            .then(response => {
                this.setState({
                    countOfBlocks: response.data
                })
            });

    }
    closeBlockExplorer() {
        this.props.setTitle("Admin Home");
    }

    async f1(CPage,current_Data){
        current_Data = await this.props.getBlockData(CPage);
        console.log(current_Data);
    }

    AdminBlockExp() {
        const per_page = 10;
        var current_Data;
        const pages = Math.ceil(this.state.countOfBlocks / per_page);
        const current_page = this.props.page;
        let self = this;
        const data = [];
        var CPage = this.state.current_page
        this.f1(CPage,current_Data);
        

        // axios.get('http://cil-blockchain1.uksouth.cloudapp.azure.com:4200/blockchain/' + current_page)
        //     .then(response => {
        //         var block = response.data;
        //         for (var t = 0; t < block.length; t++) {
        //             var time = block[t].timestamp;
        //             var time1 = new Date(time * 1000);
        //             var timeStamOctp = time1.toLocaleString();
        //             data.push({ blockNumber: block[t].number, transactionHash: block[t].hash, timestamp: timeStamOctp })
        //         }
        //         this.setState({ Block: data });
        //     })
        return (
            <div className="row no-margin">
                <div className="row no-margin">
                    <div className="col-md-4 col-md-offset-1"><h3>Block Explorer :-</h3></div>
                </div>
                <div className="row no-margin">
                    <div className="col-md-10 col-md-offset-1">
                        <table className="table table-bordered table-hover table-responsive table-position">
                            <thead>
                                <tr>
                                    <th>Block Number</th>
                                    <th>Trasaction ID</th>
                                    <th>Timestamp</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.AdminReducer.AdminExplorerList.map((details, i) => {
                                        return (
                                            <tr value={self.selected} key={i}>
                                                <td >{details.blockNumber}</td>
                                                <td >{details.transactionHash}</td>
                                                <td >{details.timestamp}</td>
                                            </tr>

                                        );
                                    }
                                    )
                                }
                            </tbody>
                        </table>
                        <div>
                            <Link to="AdminHome"><button className="btn" onClick={() => this.closeBlockExplorer()}>Go Home</button></Link>
                            <Pagination className="assets-pagination pull-right no-margin" bsSize="medium" maxButtons={5} first last next prev boundaryLinks
                                items={pages} activePage={current_page} onSelect={this.changePage.bind(this)} />
                        </div>
                    </div>
                </div>
            </div >
        );
    }

    render() {
        return (
            <section className="securityMaster-section h100 w100">
                {/*{
                    (this.props.SecMasRed.openAssetReqt) ?
                        (
                            <div className="row no-margin">
                                <AssetRegdReqt
                                />
                                {this.AdminBlockExp()}
                            </div>
                        )
                        :
                        (*/}
                <div>
                    {this.AdminBlockExp()}
                </div>
                {/*)
                }*/}
            </section>
        )
    }
    changePage(page) {
        this.props.router.push('/adminExplorer?page=' + page);
        this.setState({
            Block: []
        })
    }

}

const mapStateToProps = (state) => {
    return {
        title: state.title,
        AdminReducer: state.AdminReducer,
        page: Number(state.routing.locationBeforeTransitions.query.page) || 1
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setTitle, updateInputValue, setTrue, setFalse, setValue, getBlockData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AdminBlockExp));