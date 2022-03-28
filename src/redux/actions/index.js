export const REGISTER = 'REGISTER';
export const CLIENTS = 'CLIENTS';

export const actRegister = (value) => ({ type: REGISTER, payload: value});

export const actClients = (value) => ({ type: CLIENTS, payload: value});