import * as config from './../constants/ActionType'

export const actLogIn = (username, password) => {  
    return {
        type: config.USER_LOGIN,
        username,
        password
    }
}

export const actLogOut = () => {
    return {
        type: config.USER_LOGOUT
    }
}