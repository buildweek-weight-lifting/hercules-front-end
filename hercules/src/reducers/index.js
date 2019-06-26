import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    GET_USERS,
    ERROR_MESSAGE,
    LOADING,
    GET_EXERCISE,
} from '../actions'

import {
    TOGGLE_DROP
  } from '../actions/NavActions'

  import {
    LEFT,
    RIGHT
  } from '../actions/homeActions'
  

const initialState = {
    isLoggingIn:false,
    isSigningUp:false,
    error:'',
    isFetching:false,
    dropped: false,
    exerciseData: [
        {name: "notapi"},
        {name: "test"}
    ],
    exercises: [],
    carouselIndex: 0,
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
        case GET_EXERCISE:
            return Object.assign({}, state, {exercises: action.exercises, loading: false, error: ''})
        case LEFT:
            return{
                ...state,
                carouselIndex: 0
            }
        case RIGHT:
            return{
                ...state,
                carouselIndex: 1
            }
        default:
            return state;    
    }
}