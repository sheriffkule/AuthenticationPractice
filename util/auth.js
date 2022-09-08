import axios from 'axios';

const API_KEY = 'AIzaSyBijfHETvJtu0c_socKcGhR37FuxbHgAtw';

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
}

const token = response.data.idToken;

return token;

// eslint-disable-next-line no-unreachable
export function createUser(email, password) {
  return authenticate('signUp', email, password);
}

// eslint-disable-next-line no-unreachable
export function login(email, password) {
  return authenticate('signInWithPassword', email, password);
}
