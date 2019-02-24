import api from './api'
import axios from 'axios'

export function getAllEventAction() {
  return async dispatch => {
    try {
      const { data } = await api.get('events')
      console.log('data event', data)
      dispatch({ type: 'getAllEventReducer', payload: data.events })
    } catch (error) {
      console.log("error",error)
    }
  }
}