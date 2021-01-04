import axios from 'axios';
import {
  LoginPayload,
  RegisterPayload,
} from 'interfaces/user';


export async function registerUserService(user: RegisterPayload) {
  const res = await axios.post(process.env.REACT_APP_REGISTER_API_ENDPOINT!, user);
  console.log('Register res: ', res)
  if (res.headers['access-token']) {
    localStorage.setItem('token', res.headers['access-token'])
  }
  return res.data.data;
}

export async function loginUserService(user: LoginPayload) {
  const res = await axios.post(process.env.REACT_APP_LOGIN_API_ENDPOINT!, user);
  console.log('Login res: ', res)
  if (res.headers['access-token']) {
    localStorage.setItem('token', res.headers['access-token'])
  }
  return res.data.data;
}
