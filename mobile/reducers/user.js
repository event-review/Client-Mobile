const defaultState = {
  user: {
    name: 'Anhar',
    email: 'anhar@mail.com',
    dob: '28-03-1996',
    gender: 'Male'
  },
  myEvent: [{ name: '', data: '', place: '' }],
  isLogin: true
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
      console.log('my event reducer.js', payload)
      return ({
        ...state,
        myEvent: payload
      })
    case 'joinEventReducer':
      return ({
        ...state,
        myEvent: payload
      })
    case 'loginReducer':
      return ({
        ...state,
        isLogin: true
      })
    case 'registerReducer':
      return ({
        ...state,
      })
    case 'logoutReducer':
      return ({
        ...state,
        isLogin: false
      })
    default:
      return state
  }
}