import api from './api'

export async function getDataUser(token) {
  return dispatch => {
    try {
      const { data } = await api.get('/users', { header: token })
      dispatch({ type: 'getDataUserReducer', payload: data.user })
    } catch (error) {
      console.log(error.response)
    }
  }
}

export async function getMyEventAction() {
  return dispatch => {
    try {
      const { data } = await api.get('/users/myevent')
      dispatch({ type: 'getMyEventReducer', payload: data.events })
    } catch (error) {
      console.log(error.response)
    }
  }
}

export async function joinEventAction(eventId) {
  return dispatch => {
    try {
      const { data } = await api.put('/users/join' + eventId)
      // console.log(data.message)
      dispatch({ type: 'joinEventReducer' })
    } catch (error) {
      console.log(error.response)
    }
  }
}

export async function loginAction() {
  return dispatch => {
    try {

    } catch (error) {
      console.log(error.response)
    }
  }
}

export async function logout() {
  try {

  } catch (error) {
    console.log(error.response)
  }
}