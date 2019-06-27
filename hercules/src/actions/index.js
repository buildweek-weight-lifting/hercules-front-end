import axios from 'axios'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const GET_USERS = "GET_USERS"
export const ERROR_MESSAGE = "ERROR_MESSAGE"
export const LOADING = "LOADING"
export const GET_EXERCISE = "GET_EXERCISE"

export const login = creds => dispatch => {
    dispatch({type:LOGIN_START});
    return axios
    .post('https://get-hercules.herokuapp.com/api/auth/login',creds)
    .then(res => {
        localStorage.setItem('token',res.data.token)
        localStorage.setItem('id',res.data.user.id)
        localStorage.setItem('token',res.data.token)
        localStorage.setItem('token',res.data.token)
        dispatch({type:LOGIN_SUCCESS,payload:res.data.payload})
        console.log(res)
    })
    .catch(err => {
        dispatch({type:LOGIN_FAILURE,payload:err.response})
        console.log(err)
    })
}


export const signup = (creds) => {
    return(dispatch) => {
      dispatch({type: LOADING})
      axios.post('https://get-hercules.herokuapp.com/api/auth/register', creds)
        .then( response => {
          dispatch({type: GET_USERS, users: response.data})
        })
        .catch(err => {
          dispatch({type: ERROR_MESSAGE, errorMessage: "User was unable to be added."})
        })
    }
  }

export const addExercise = (exdata) => {
  return(dispatch) => {
    console.log("exdata check", exdata)
    dispatch({type: LOADING})
    axios.post('https://get-hercules.herokuapp.com/api/restricted/exercises', exdata,
    {headers: { Authorization: localStorage.getItem("token") }, 'Content-Type': 'application/json'}, {headers: { Authorization: localStorage.getItem("id") } })
    .then( response => {
      dispatch({type: GET_EXERCISE, exercises: response.data})
      
    })
    .catch(err => {
      dispatch({type: ERROR_MESSAGE, errorMessage: "User was unable to be added."})
    })
  }
}

export const deleteExercise = (id) => {
  return(dispatch) => {
    dispatch({type: LOADING})
    axios.delete(`https://get-hercules.herokuapp.com/api/restricted/exercises/${id}`)
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
    axios.get('https://get-hercules.herokuapp.com/api/restricted/exercises', {headers: { Authorization: localStorage.getItem("token") } })
    .then( response => {
      //console.log("response data", response)
      dispatch({type: GET_EXERCISE, exercises: response.data.exercises})
    })
    .catch(err => {
      dispatch({type: ERROR_MESSAGE, errorMessage: "User was unable to be added."})
    })
  }
  
}

export const deleteExercise = (id) => {
  return(dispatch) => {
    dispatch({type: LOADING})
    axios.delete('https://get-hercules.herokuapp.com/api/restricted/exercises/:id', id, {headers: { Authorization: localStorage.getItem("token") } })
    .then( response => {
      console.log("response data", response)
      dispatch({type: GET_EXERCISE, exercises: response.data.exercises})
    })
    .catch(err => {
      dispatch({type: ERROR_MESSAGE, errorMessage: "User was unable to be added."})
    })
  }
}

export const updateExercise = (updateExercise) => {
  return(dispatch) => {
    dispatch({type: LOADING})
    axios.put(`http://localhost:3333/smurfs/${updateExercise.id}`, updateExercise)
      .then( response => {
        dispatch({type: GET_EXERCISE, smurfs: response.data})
      })
      .catch(err => {
        dispatch({type: ERROR_MESSAGE, errorMessage: `This exercise can't be updated.`})
      })
  }
}
