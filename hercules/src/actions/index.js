import axios from 'axios'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const GET_USERS = "GET_USERS"
export const ERROR_MESSAGE = "ERROR_MESSAGE"
export const LOADING = "LOADING"
export const GET_EXERCISE = "GET_EXERCISE"

let deploy = "http://localhost:8000";
//  "https://weightlifting-back-end.herokuapp.com";
// "https://get-hercules.herokuapp.com"
// "https://weightlifting-back-end.herokuapp.com";
let local = "http://localhost:8000";
// "https://localhost5000"
// "https://weightlifting-back-end.herokuapp.com";
// "https://localhost5000";

let backend_url = local || deploy;
console.log("ahhhhh");
export const login = creds => dispatch => {
    console.log("creds", creds);
    dispatch({type:LOGIN_START});
    return axios

    .post(`${backend_url}/api/auth/login`,creds)
    .then(res => {
        localStorage.setItem('token',res.data.token);
        localStorage.setItem('id',res.data.user.id);
        localStorage.setItem('token',res.data.token);
        localStorage.setItem('token',res.data.token);
        dispatch({type:LOGIN_SUCCESS,payload:res.data.payload})
        console.log("res", res)
        return true
    })
    .catch(err => {
        dispatch({type:LOGIN_FAILURE,payload:err.response})
    })
}


export const signup = (creds) => {
    return(dispatch) => {
      dispatch({type: LOADING})
        .then( response => {
          dispatch({type: GET_USERS, users: response.data})
        })
        .catch(err => {
          dispatch({type: ERROR_MESSAGE, errorMessage: "User was unable to be added."})
        })
    }
  }

export const addExercise = (exdata) => {
  console.log("actions", exdata);
  return(dispatch) => {
    dispatch({type: LOADING})
    axios.post(`${backend_url}/api/restricted/exercises`, exdata,
    {headers: { Authorization: localStorage.getItem("token") }, 'Content-Type': 'application/json'}, {headers: { Authorization: localStorage.getItem("id") } })
    .then( response => {
      console.log("res",  response)
      dispatch({type: GET_EXERCISE, exercises: response.data})      
    })
    .catch(err => {
      console.log("err", err)
      dispatch({type: ERROR_MESSAGE, errorMessage: "User was unable to be added."})
    })
  }
}

export const deleteExercise = (id) => {
  return(dispatch) => {
    dispatch({type: LOADING})
    axios.delete(`${backend_url}/api/restricted/exercises/${id}`, {headers: { Authorization: localStorage.getItem("token") } })
      .then(response => {
        dispatch({type: GET_EXERCISE, exercises: response.data })
      })
      .catch(err => {
        dispatch({type: ERROR_MESSAGE, errorMessage: "This exercise cannot be deleted."})
      })
  }
}

export const getExercise = () => {
  return(dispatch) => {
    dispatch({type: LOADING})
    axios.get(`${backend_url}/api/restricted/exercises`, {headers: { Authorization: localStorage.getItem("token") } })
    .then( response => {
      dispatch({type: GET_EXERCISE, exercises: response.data.exercises})
    })
    .catch(err => {
      dispatch({type: ERROR_MESSAGE, errorMessage: "User was unable to be added."})
    })
  }
  
}


export const updateExercise = (updateExercise) => {
  return(dispatch) => {
    console.log("update action test id", updateExercise.id)
    dispatch({type: LOADING})

    axios.put(`${backend_url}/api/restricted/exercises/${updateExercise.id}`, updateExercise, {headers: { Authorization: localStorage.getItem("token") } })

      .then( response => {
        console.log("update res", response)
        dispatch({type: GET_EXERCISE, exercise: response.data})
        // getExercise()
      })
      .catch(err => {
        dispatch({type: ERROR_MESSAGE, errorMessage: `This exercise can't be updated.`})
      })
  }
}
