import bikesReducer from './bikes.reducer';

test('reducers', () => {
  let state;
  state = bikesReducer({
    bikes: [{
      _id: '61b6300a934551f37a59ac1b',
      make: 'Ducati',
      bike_model: 'Classic',
      km: 90000,
      year: 1970,
      change: [['Custom']],
      owner: {
        _id: '61b62c9d0ae91ef5b8c546b3', userName: 'Alvaro23', name: 'Alvaro', surname: 'Amoros', email: 'alvaro.amoros.dev@gmail.com', province: 'Madrid', phone: '617155779'
      },
      favorites: [],
      avatar: 'https://res.cloudinary.com/dh9frficr/image/upload/v1639329802/p10pb8lgye1eiz74qmff.jpg',
      cloudinary_id: 'p10pb8lgye1eiz74qmff',
      display: true,
      __v: 18,
      description: 'Preciosa y Auténtica kawa\n naked de los 90\nA toda prueba ,restauración de \nProfesional empleando 350 H/T se puede consultar en Drobox todo el proceso  realizado pidiendo link.Garantía total precio algo negociable escucho ofertas'
    }, {
      _id: '61b63c1a4487f4f658ca87e3',
      make: 'Aprilia',
      bike_model: '',
      km: null,
      year: null,
      change: [['Custom']],
      owner: {
        _id: '61b62c9d0ae91ef5b8c546b3', userName: 'Alvaro23', name: 'Alvaro', surname: 'Amoros', email: 'alvaro.amoros.dev@gmail.com', province: 'Madrid', phone: '617155779'
      },
      favorites: ['61b62c9d0ae91ef5b8c546b3'],
      avatar: 'https://res.cloudinary.com/dh9frficr/image/upload/v1639332891/bjgfbyndq8kruca5ykeg.jpg',
      cloudinary_id: 'bjgfbyndq8kruca5ykeg',
      display: true,
      __v: 3
    }, {
      _id: '61b63cda4487f4f658ca87ef',
      make: 'test',
      bike_model: '',
      km: null,
      year: null,
      change: [['']],
      owner: {
        _id: '61b62c9d0ae91ef5b8c546b3', userName: 'Alvaro23', name: 'Alvaro', surname: 'Amoros', email: 'alvaro.amoros.dev@gmail.com', province: 'Madrid', phone: '617155779'
      },
      favorites: [],
      avatar: 'https://res.cloudinary.com/dh9frficr/image/upload/v1639333082/dwebxsh2jmhkqpfkf45t.jpg',
      cloudinary_id: 'dwebxsh2jmhkqpfkf45t',
      display: true,
      __v: 0
    }, {
      _id: '61b72d61cdf3d76254813af8',
      make: 'Ducati Test',
      bike_model: 'Monster ',
      km: 10000,
      year: 1999,
      change: [['Custom,Naked,Sports,Turismo']],
      owner: {
        _id: '61b62c9d0ae91ef5b8c546b3', userName: 'Alvaro23', name: 'Alvaro', surname: 'Amoros', email: 'alvaro.amoros.dev@gmail.com', province: 'Madrid', phone: '617155779'
      },
      favorites: [],
      avatar: 'https://res.cloudinary.com/dh9frficr/image/upload/v1639394657/apnp27dv8yh1wtjwxrpf.png',
      cloudinary_id: 'apnp27dv8yh1wtjwxrpf',
      display: true,
      __v: 0
    }, {
      _id: '61b72dcecdf3d76254813aff',
      make: 'Test',
      bike_model: 'Test BIke',
      km: 1111,
      year: 1111,
      change: [['Custom,Naked']],
      owner: {
        _id: '61b62c9d0ae91ef5b8c546b3', userName: 'Alvaro23', name: 'Alvaro', surname: 'Amoros', email: 'alvaro.amoros.dev@gmail.com', province: 'Madrid', phone: '617155779'
      },
      favorites: [],
      avatar: 'https://res.cloudinary.com/dh9frficr/image/upload/v1639394765/mma9xrufbxqctbjjkcd6.png',
      cloudinary_id: 'mma9xrufbxqctbjjkcd6',
      display: true,
      __v: 2
    }],
    login: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWI2MmM5ZDBhZTkxZWY1YjhjNTQ2YjMiLCJpYXQiOjE2Mzk0MDk1OTh9.TfTBog0wAgrhHBOLQ_M7pjPRqRRBw_CxrLuWNvA2pUI',
    favorites: [{
      _id: '61b63c1a4487f4f658ca87e3',
      make: 'Aprilia',
      bike_model: '',
      km: null,
      year: null,
      change: [['Custom']],
      owner: {
        _id: '61b62c9d0ae91ef5b8c546b3', userName: 'Alvaro23', email: 'alvaro.amoros.dev@gmail.com', province: 'Madrid'
      },
      favorites: ['61b62c9d0ae91ef5b8c546b3'],
      avatar: 'https://res.cloudinary.com/dh9frficr/image/upload/v1639332891/bjgfbyndq8kruca5ykeg.jpg',
      cloudinary_id: 'bjgfbyndq8kruca5ykeg',
      display: true,
      __v: 3
    }]
  }, {
    type: 'LOAD_FAVORITES',
    favorites: [{
      _id: '61b63c1a4487f4f658ca87e3',
      make: 'Aprilia',
      bike_model: '',
      km: null,
      year: null,
      change: [['Custom']],
      owner: {
        _id: '61b62c9d0ae91ef5b8c546b3', userName: 'Alvaro23', email: 'alvaro.amoros.dev@gmail.com', province: 'Madrid'
      },
      favorites: ['61b62c9d0ae91ef5b8c546b3'],
      avatar: 'https://res.cloudinary.com/dh9frficr/image/upload/v1639332891/bjgfbyndq8kruca5ykeg.jpg',
      cloudinary_id: 'bjgfbyndq8kruca5ykeg',
      display: true,
      __v: 3
    }]
  });
  expect(state).toEqual({
    bikes: [{
      _id: '61b6300a934551f37a59ac1b',
      make: 'Ducati',
      bike_model: 'Classic',
      km: 90000,
      year: 1970,
      change: [['Custom']],
      owner: {
        _id: '61b62c9d0ae91ef5b8c546b3', userName: 'Alvaro23', name: 'Alvaro', surname: 'Amoros', email: 'alvaro.amoros.dev@gmail.com', province: 'Madrid', phone: '617155779'
      },
      favorites: [],
      avatar: 'https://res.cloudinary.com/dh9frficr/image/upload/v1639329802/p10pb8lgye1eiz74qmff.jpg',
      cloudinary_id: 'p10pb8lgye1eiz74qmff',
      display: true,
      __v: 18,
      description: 'Preciosa y Auténtica kawa\n naked de los 90\nA toda prueba ,restauración de \nProfesional empleando 350 H/T se puede consultar en Drobox todo el proceso  realizado pidiendo link.Garantía total precio algo negociable escucho ofertas'
    }, {
      _id: '61b63c1a4487f4f658ca87e3',
      make: 'Aprilia',
      bike_model: '',
      km: null,
      year: null,
      change: [['Custom']],
      owner: {
        _id: '61b62c9d0ae91ef5b8c546b3', userName: 'Alvaro23', name: 'Alvaro', surname: 'Amoros', email: 'alvaro.amoros.dev@gmail.com', province: 'Madrid', phone: '617155779'
      },
      favorites: ['61b62c9d0ae91ef5b8c546b3'],
      avatar: 'https://res.cloudinary.com/dh9frficr/image/upload/v1639332891/bjgfbyndq8kruca5ykeg.jpg',
      cloudinary_id: 'bjgfbyndq8kruca5ykeg',
      display: true,
      __v: 3
    }, {
      _id: '61b63cda4487f4f658ca87ef',
      make: 'test',
      bike_model: '',
      km: null,
      year: null,
      change: [['']],
      owner: {
        _id: '61b62c9d0ae91ef5b8c546b3', userName: 'Alvaro23', name: 'Alvaro', surname: 'Amoros', email: 'alvaro.amoros.dev@gmail.com', province: 'Madrid', phone: '617155779'
      },
      favorites: [],
      avatar: 'https://res.cloudinary.com/dh9frficr/image/upload/v1639333082/dwebxsh2jmhkqpfkf45t.jpg',
      cloudinary_id: 'dwebxsh2jmhkqpfkf45t',
      display: true,
      __v: 0
    }, {
      _id: '61b72d61cdf3d76254813af8',
      make: 'Ducati Test',
      bike_model: 'Monster ',
      km: 10000,
      year: 1999,
      change: [['Custom,Naked,Sports,Turismo']],
      owner: {
        _id: '61b62c9d0ae91ef5b8c546b3', userName: 'Alvaro23', name: 'Alvaro', surname: 'Amoros', email: 'alvaro.amoros.dev@gmail.com', province: 'Madrid', phone: '617155779'
      },
      favorites: [],
      avatar: 'https://res.cloudinary.com/dh9frficr/image/upload/v1639394657/apnp27dv8yh1wtjwxrpf.png',
      cloudinary_id: 'apnp27dv8yh1wtjwxrpf',
      display: true,
      __v: 0
    }, {
      _id: '61b72dcecdf3d76254813aff',
      make: 'Test',
      bike_model: 'Test BIke',
      km: 1111,
      year: 1111,
      change: [['Custom,Naked']],
      owner: {
        _id: '61b62c9d0ae91ef5b8c546b3', userName: 'Alvaro23', name: 'Alvaro', surname: 'Amoros', email: 'alvaro.amoros.dev@gmail.com', province: 'Madrid', phone: '617155779'
      },
      favorites: [],
      avatar: 'https://res.cloudinary.com/dh9frficr/image/upload/v1639394765/mma9xrufbxqctbjjkcd6.png',
      cloudinary_id: 'mma9xrufbxqctbjjkcd6',
      display: true,
      __v: 2
    }],
    login: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWI2MmM5ZDBhZTkxZWY1YjhjNTQ2YjMiLCJpYXQiOjE2Mzk0MDk1OTh9.TfTBog0wAgrhHBOLQ_M7pjPRqRRBw_CxrLuWNvA2pUI',
    favorites: [{
      _id: '61b63c1a4487f4f658ca87e3',
      make: 'Aprilia',
      bike_model: '',
      km: null,
      year: null,
      change: [['Custom']],
      owner: {
        _id: '61b62c9d0ae91ef5b8c546b3', userName: 'Alvaro23', email: 'alvaro.amoros.dev@gmail.com', province: 'Madrid'
      },
      favorites: ['61b62c9d0ae91ef5b8c546b3'],
      avatar: 'https://res.cloudinary.com/dh9frficr/image/upload/v1639332891/bjgfbyndq8kruca5ykeg.jpg',
      cloudinary_id: 'bjgfbyndq8kruca5ykeg',
      display: true,
      __v: 3
    }]
  });
});
