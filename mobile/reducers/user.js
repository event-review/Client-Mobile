import store from "../store";

const defaultState = {
  user: {
    name: 'Anhar',
    email: 'anhar@mail.com',
    dob: '28-03-1996',
    gender: 'Male'
  },
  myEvent: [{name: '', data: '', place: ''}]
}


export default function (state = defaultState, action) {
  const { type, payload } = action
  switch (type) {
    case 'getDataUserReducer':
      return ({
        ...state,
        user: payload
      })
    case 'getMyEventReducer':
      return ({
        ...state,
        myEvent: payload
      })
    case 'joinEventReducer':
      return ({
        ...state,
        myEvent: state.myEvent.concat([payload])
      })
    default:
      return state
  }
}