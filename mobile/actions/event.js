import api from './api'

export function getAllEventAction() {
  return async dispatch => {
    try {
      const { data } = await api.get('/events')
      dispatch({ type: 'getAllEventReducer', payload: data.events })
    } catch (error) {
      console.log(error.response)
    }
  }
}