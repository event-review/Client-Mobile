const defaultState = {
  name: 'AnharPromotor',
  email: 'anhar2@mail.com',
  dob: '28-03-1996',
  gender: 'Male'
}


export default function(state=defaultState, action){
  const { type, payload } = action
  switch (type) {
    case 'loading':
      return ({
        ...state
      })
    default:
      return state
  }
}