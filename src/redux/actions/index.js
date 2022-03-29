
export const ADD_CLIENTS = 'CLIENTS';
export const LOGIN = 'LOGIN';

export const actLogin = (value) => ({ type: LOGIN, payload: value})

export const actClients = (value) => (
  { 
    type: ADD_CLIENTS, 
    payload: { 
      id: (Math.random() * 1000), 
      ...value,
    } 
  });