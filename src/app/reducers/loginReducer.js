const LoginReducer = (state = {
    status: false,
    clientID: '',
    password: '',
    openFgtPwd: false,
    fgtClientID: '',
    MobileNumber: '',
    OTP:''
}, action) => {
    switch (action.type) {

        case 'LOGIN_UPDATE_INPUT':
            state = {
                ...state,
                [action.payload.name]: action.payload.value
            };
            break;

        case 'LOGIN_SET_TRUE':
            state = {
                ...state,
                [action.payload]: true,
            };
            break;
        case 'LOGIN_SET_FALSE':
            state = {
                ...state,
                [action.payload]: false,
            };
            break;
                case 'LOGIN_SET_VALUE':
            state = {
                ...state,
                [action.payload.id]: action.payload.val,
            };
            break;
    }
    return state;
}
export default LoginReducer;
