import { REGISTER, CLIENTS } from '../actions';

const INIT_STATE_REGISTER = {
  name: '',
  age: '',
  email: ''
}

const INIT_STATE_CLIENTES = {
  clients: [{name: '', email: '', age: ''}]
}

export const registerReducer = (state = INIT_STATE_REGISTER, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export const clientsReducer = (state = INIT_STATE_CLIENTES, action) => {
  switch(action.type) {
    default:
      return state
  }
}