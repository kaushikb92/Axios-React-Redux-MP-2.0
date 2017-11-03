import { assetTypeList, assetsList, subTypesList, regdAssetTypeList,mpAssetList } from '../constants.js'

const MarketPlaceReducer = (state = {
    mpAssetList: mpAssetList,
    assetTypeList: assetTypeList,
    subTypesList: subTypesList,
    assetType: "--Select Type--", 
    openAssetReqt: false, 
    selectedData: {},
    openMrktModal: false
    }, action) => {

    switch (action.type) {

        case 'MP_UPDATE_INPUT':
            state = {
                ...state,
                [action.payload.name]: action.payload.value
            };
            break;
        case 'MP_OPEN_ASSET_REGD_MODAL':
            state = {
                ...state,
                OpenModal: true,
                selectedData: action.payload
            };
            break;
        case 'MP_SET_TRUE':
            state = {
                ...state,
                [action.payload]: true,
            };
            break;
        case 'MP_SET_FALSE':
            state = {
                ...state,
                [action.payload]: false,
            };
            break;
        case 'MP_SET_VALUE':
            state = {
                ...state,
                [action.payload.id]: action.payload.val
            };
            break;
            
    }
    return state;
}
export default MarketPlaceReducer;
