import api from './api'
import axios from 'axios'

export function getDataUser(token) {
  return async dispatch => {
    try {
      console.log('token', token)
      const { data } = await api.get('/users', { headers: {token} })
      console.log(data)
      dispatch({ type: 'getDataUserReducer', payload: data.user })
    } catch (error) {
      console.log(error.response.data)
    }
  }
}

// export function getMyEventAction() {
//   return async dispatch => {
//     try {
//       const { data } = await api.get('/users/myevent')
//       dispatch({ type: 'getMyEventReducer', payload: data.events })
//     } catch (error) {
//       console.log(error.response)
//     }
//   }
// }

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
  // console.log('register', user)
  return async dispatch => {
    try {
      const { data } = await api({
        method: 'post',
        url: '/users/signup',
        data: user,
      })
      // console.log(data)
      dispatch({ type: 'registerReducer', payload: data })
    } catch (error) {
      console.log(error.response.data)
    }
  }
}

// export function loginAction(user) {
//   return async dispatch => {
//     console.log('login',user)
//     try {
//       const {data} = await api({
//         method: 'post',
//         url: '/users/signin',
//         data: user
//       })
//       console.log('data login =',data)
//       dispatch({type: 'loginReducer'})
//     } catch (error) {
//       console.log('error',error.response.data)
//     }
//   }
// }

// export async function logoutAction() {
//   try {
//     dispatch({type: 'logoutReducer'})
//   } catch (error) {
//     console.log(error.response)
//   }
// }

export function getMyEventAction(token) {
  return async dispatch => {
    try {
      // console.log('token my event', token)
      const { data } = await api({
        method: 'get',
        url: '/users/myevent',
        headers: { token }
      })
      dispatch({ type: 'getMyEventReducer', payload: data.events })
    } catch (error) {
      console.log(error.response.data)
    }
  }
}