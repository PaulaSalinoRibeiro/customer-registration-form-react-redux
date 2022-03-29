import { ADD_CLIENTS, LOGIN } from '../actions';

const INIT_STATE_LOGIN = {}

const INIT_STATE_CLIENTES = {
  clients: [
    {
      name: '',
      email: '',
      age: '',
    },
  ]
}

export const loginReducer = (state = INIT_STATE_LOGIN, action) => {
  switch(action.type) {
    case LOGIN:
      return action.payload
    default:
      return state
  }
}

export const clientsReducer = (state = INIT_STATE_CLIENTES, action) => {
  switch(action.type) {
    case ADD_CLIENTS:
      return {
        ...state,
        clients: [ ...state.clients, action.payload ]
      }
    default:
      return state
  }
}

