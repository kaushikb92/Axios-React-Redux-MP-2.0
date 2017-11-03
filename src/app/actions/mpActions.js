
export function updateInputValue(event) {
    return dispatch => {
        dispatch({
            type: "MP_UPDATE_INPUT",
            payload: event.target
        })
    }
}

export function setValue(details) {
    return dispatch => {
        dispatch({
            type: "MP_SET_VALUE",
            payload: details
        })
    }
}


export function selectedAssetData(selectedData) {
    return dispatch => {
        dispatch({
            type: "MP_OPEN_ASSET_REGD_MODAL",
            payload: selectedData
        })
    }
}
export function setTrue(param) {
    return dispatch => {
        dispatch({
            type: "SET_TRUE",
            payload: param
        })
    }
}
export function setFalse(param) {
    return dispatch => {
        dispatch({
            type: "MP_SET_FALSE",
            payload: param
        })
    }
}

