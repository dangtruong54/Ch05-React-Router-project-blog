import * as config from './../constants/ActionType';

let defaultState = {
    isLogin: false,
    username: ''
}

let checkLogin = (username, password) => {
    if(username === 'admin' && password === '123') {
        return true;
    }
    return false;
}

let user = (state = defaultState, action) => {

    switch (action.type) {
        case config.USER_LOGIN:           
            let {username, password} = action;      
            if(checkLogin(username, password)) {
                state.username = username;
                state.isLogin = true;
            }

            return {...state};
        case config.USER_LOGOUT:
            state.username = null;
            state.isLogin = false;
            return {...state};
        default:
            return state;
    }

}

export default user;