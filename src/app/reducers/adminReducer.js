import { assetTypeList, subTypesList } from '../constants.js'

const AdminInitialState ={
    fstName: '',
    lstName: '',
    Adminpwd: '',
    AdmCnfrmPassword: '',
    AdmMobNo: '',
    assetTypeList: assetTypeList,
    subTypesList: subTypesList,
    AstRegdType: '--Select Type--',
    AstRegdSubType: '--Select Type--',
    AdminExplorerList: [],
}

const AdminReducer = (state = AdminInitialState, action) => {
    switch (action.type) {

        case 'ADMN_UPDATE_INPUT':
            state = {
                ...state,
                [action.payload.name]: action.payload.value
            };
            break;
        case 'ADMN_SET_TRUE':
            state = {
                ...state,
                [action.payload]: true
            };
            break;
        case 'ADMN_SET_FALSE':
            state = {
                ...state,
                [action.payload]: false
            };
            break;
        case 'GET_BLOCK_DATA':
            Object.assign({}, state, {AdminExplorerList: action.payload});
            // state = {
            //     ...state,
            //     AdminExplorerList: action.payload
            // };
            break;

    }
    return state;
}
export default AdminReducer;