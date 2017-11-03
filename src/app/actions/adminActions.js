import axios from 'axios'

export function updateInputValue(event) {
    return dispatch => {
        dispatch({
            type: "ADMN_UPDATE_INPUT",
            payload: event.target
        })
    }
}

export function setValue(details) {
    return dispatch => {
        dispatch({
            type: "ADMN_SET_VALUE",
            payload: details
        })
    }
}

export function setTrue(param) {
    return dispatch => {
        dispatch({
            type: "ADMN_SET_TRUE",
            payload: param
        })
    }
}
export function setFalse(param) {
    return dispatch => {
        dispatch({
            type: "ADMN_SET_FALSE",
            payload: param
        })
    }
}

export function getBlockData(pageNumber) {
    const data = axios.get('http://cil-blockchain1.uksouth.cloudapp.azure.com:4200/blockchain/' + pageNumber)
        .then(response => {
            return response.data;
        })
    return dispatch => {
        dispatch({
            type: "GET_BLOCK_DATA",
            payload: data
        })

    }
}