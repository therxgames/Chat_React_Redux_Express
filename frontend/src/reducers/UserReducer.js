import {SET_LOGIN, SET_CHAT_ID, IS_AUTH, ADD_MESSAGE} from './consts'

const defaultState = {
    login: '',
    chatId: '',
    isAuth: false,
    messages: [],
}

const UserReducer = (state = defaultState, action) => {

    switch (action.type) {

        case SET_LOGIN:
            return {...state, login: action.payload}

        case SET_CHAT_ID:
            return {...state, chatId: action.payload}

        case IS_AUTH:
            return {...state, isAuth: action.payload}

        case ADD_MESSAGE:
            return [...state, action.payload]

        default: 
            return state

    }
    
}

export default UserReducer;