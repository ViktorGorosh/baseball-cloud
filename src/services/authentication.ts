import axios from 'axios';
import {
  LoginPayload,
  RegisterPayload,
  RegisterResponseData,
} from 'interfaces/user';


export async function registerUserService(
  user: RegisterPayload,
): Promise<RegisterResponseData> {
  const response = await axios.post(process.env.REACT_APP_REGISTER_API_ENDPOINT!, user);
  return response.data;
}

export async function loginUserService(user: LoginPayload) {
  const response = await axios.post(process.env.REACT_APP_LOGIN_API_ENDPOINT!, user);
  if (response.headers['access-token']) {
    localStorage.setItem('token', response.headers['access-token'])
  }
  return response.data.data;
}
