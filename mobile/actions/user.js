import api from './api'

export function getDataUser(token) {
  return async dispatch => {
    try {
      const { data } = await api.get('/users', { header: token })
      dispatch({ type: 'getDataUserReducer', payload: data.user })
    } catch (error) {
      console.log(error.response)
    }
  }
}

export function getMyEventAction() {
  return async dispatch => {
    try {
      const { data } = await api.get('/users/myevent')
      dispatch({ type: 'getMyEventReducer', payload: data.events })
    } catch (error) {
      console.log(error.response)
    }
  }
}

export function joinEventAction(eventId) {
  return async dispatch => {
    try {
      const { data } = await api.put('/users/join' + eventId)
      // console.log(data.message)
      dispatch({ type: 'joinEventReducer' })
    } catch (error) {
      console.log(error.response)
    }
  }
}

export function registerAction(user) {
  console.log('register',user)
  return async dispatch => {
    try {
      const {data} = await api({
        method: 'post',
        url: '/users/signup',
        data: user,
      })
      console.log(data)
      dispatch({type: 'registerReducer'})
    } catch (error) {
      console.log(error.response)
    }
  }
}

export function loginAction(user) {
  return async dispatch => {
    console.log('login',user)
    try {
      const {data} = await api({
        method: 'post',
        url: '/users/signin',
        data: user
      })
      console.log(data)
      dispatch({type: 'loginReducer'})
    } catch (error) {
      console.log(error.response)
    }
  }
}

export async function logoutAction() {
  try {
    dispatch({type: 'logoutReducer'})
  } catch (error) {
    console.log(error.response)
  }
}