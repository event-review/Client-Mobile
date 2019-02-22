const defaultState = {
  name: 'Anhar',
  email: 'anhar@mail.com',
  dob: '28-03-1996',
  gender: 'Male'
}


export default function(state=defaultState, action){
  const { type, payload } = action
  switch (type) {
    case 'loading':
    default:
      return state
  }
}