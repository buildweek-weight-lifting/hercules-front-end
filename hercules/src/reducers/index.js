import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions'

const initialState = {
    friends:[],
    isLoggingIn:false,
    error:'',
    isFetching:false,
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
            }        
        default:
            return state;    
    }
}