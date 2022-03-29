import { ADD_CLIENTS } from '../actions';

const INIT_STATE_CLIENTES = {
  clients: [
    {
      id: (Math.random() * 1000),
      name: '',
      email: '',
      age: '',
    }
  ]
}

const clientsReducer = (state = INIT_STATE_CLIENTES, action) => {
  switch(action.type) {
    case ADD_CLIENTS:
      return ({
        ...state,
        clientes: [ ...state, ...action.payload ]
      })
    default:
      return state
  }
}

export default clientsReducer;