import React from "react";
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router, Route, browserHistory, IndexRoute } from "react-router"
import userRegd from './container/AdminPages/UserRegistration/userRegd'
import regdAssets from './container/AdminPages/RegdAssets/regdAssets'
import Login from './components/Login/LoginBox/Login'
import Home from './container/Home/Home'
import AdminHome from './container/AdminPages/Admin/AdminHome'
import AdminBlockExp from './container/AdminPages/AdminBlockExp/AdminBlockExp'
import AdminList from './container/AdminPages/AdminList/AdminList'
import SecurityMaster from './container/SecurityMaster/SecurityMaster'
import MarketPlace from './container/MarketPlace/MarketPlace'
import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk"
import title from "./reducers/titleReducer"
import logModRed from "./reducers/loginReducer"
import SecMasRed from "./reducers/smReducer"
import MrktPlcRed from "./reducers/mpReducer"
import AdminReducer from "./reducers/adminReducer"
import { syncHistoryWithStore, routerMiddleware, routerReducer } from 'react-router-redux'
import App from "./container/App/App"
import './index.css'
let middleWare = applyMiddleware(routerMiddleware(browserHistory), logger, thunk)
const store = createStore(combineReducers({ title, logModRed, SecMasRed, MrktPlcRed, routing: routerReducer, AdminReducer }), {}, middleWare)
const history = syncHistoryWithStore(browserHistory, store)


ReactDOM.render((
    <Provider store={store}>

        <Router history={history}>
            <Route path="/" component={App} />
            <Route path="App" component={App} />
            
            <Route path="AdminHome" component={AdminHome} >
                <IndexRoute component={AdminList} />
                <Route path="/userRegd" component={userRegd} />
                <Route path="/registerAsset" component={regdAssets} />
                <Route path="/adminExplorer" component={AdminBlockExp} />

            </Route>

            <Route path="Home" component={Home} >
                <Route path="/MarketPlace" component={MarketPlace} />
                <Route path="/SecurityMaster" component={SecurityMaster} />
            </Route>
        </Router>
    </Provider>
), window.document.getElementById('app'));
