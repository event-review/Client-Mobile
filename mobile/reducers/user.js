const defaultState = {
  user: {
    name: 'Anhar',
    email: 'anhar@mail.com',
    dob: '28-03-1996',
    gender: 'Male',
    photoURL: 'https://lh3.googleusercontent.com/-NiflO5GemHE/W7ar8lWHEpI/AAAAAAAAAWw/CrQ-wjzY6PcH5RBZaT5i4NP4om8qv2wJQCEwYBhgL/w140-h140-p/pic201511_1600_1200.jpg'
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