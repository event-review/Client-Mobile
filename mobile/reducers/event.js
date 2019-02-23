const defaultState = {
  events: [
    {
      name: 'Komik Expo 2019',
      place: 'Bandung',
      date: '04-04-2019',
      users: [{ name: 'Amir' }, { name: 'Toni' }, { name: 'AnTOni' }],
      userAttend: [{ name: 'Amir' }, { name: 'Toni' }],
      status: 'Coming Soon',
      price: 10000,
      promotor: { name: "Promotor 1" },
      imageUrl: 'https://japanesestation.com/wp-content/uploads/2017/10/comiccon-f-768x500.jpg'
    },
    {
      name: 'Hackathon',
      place: 'Surabaya',
      date: '04-04-2019',
      users: [{ name: 'Amir' }, { name: 'Toni' }, { name: 'AnTOni' }],
      userAttend: [{ name: 'Amir' }, { name: 'Toni' }],
      status: 'Coming Soon',
      price: 100000,
      promotor: { name: "Promotor 1" },
      imageUrl: 'http://empi.ac.in/empi/uploads/images/NewsSection/HEALTH_HACKATHON.jpeg'
    },
    {
      name: 'Hackathon',
      place: 'Bandung',
      date: '04-04-2019',
      users: [{ name: 'Amir' }, { name: 'Toni' }, { name: 'AnTOni' }],
      userAttend: [{ name: 'Amir' }, { name: 'Toni' }],
      status: 'Coming Soon',
      price: 100000,
      promotor: { name: "Promotor 1" },
      imageUrl: 'https://i.pinimg.com/originals/e3/e3/11/e3e311f1f7a665f8b3877dcfa598cc90.png'
    },
    
  ]
}


export default function (state = defaultState, action) {
  const { type, payload } = action
  switch (type) {
    case 'loading':
    default:
      return state
  }
}