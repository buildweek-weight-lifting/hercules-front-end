import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    GET_USERS,
    ERROR_MESSAGE,
    LOADING
} from '../actions'

import {
    TOGGLE_DROP
  } from '../actions/NavActions'

const initialState = {
    isLoggingIn:false,
    isSigningUp:false,
    error:'',
    isFetching:false,
    dropped: false,
}

export const reducer = (state=initialState,action) => {
    switch(action.type){
        case LOGIN_START:
            return {
                ...state,
                isLoggingIn:true,
                error:''
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggingIn:false,
                error:''
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                error:action.payload,
                isLoggingIn:false
            };
            case GET_USERS:
                return Object.assign({}, state, {users: action.users, loading: false, error: ''})
            case ERROR_MESSAGE:
                return Object.assign({}, state, {error: action.errorMessage, loading: false})
            case LOADING:
                return Object.assign({}, state, {loading: true})
        case TOGGLE_DROP:
          return {
              ...state,
              dropped: !state.dropped
          };

        default:
            return state;    
    }
}