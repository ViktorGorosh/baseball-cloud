import {axiosInstance} from "./api";
import {getCurrentProfile} from "./profile";
import {
  AuthResponse,
  LoginPayload,
  RegisterPayload, User,
} from 'interfaces/user';

function updateTokens(res: AuthResponse) {
  axiosInstance.defaults.headers['access-token'] = res.headers['access-token']
  axiosInstance.defaults.headers['client'] = res.headers.client
  axiosInstance.defaults.headers['uid'] = res.headers.uid

  localStorage.setItem('access-token', res.headers['access-token'])
  localStorage.setItem('client', res.headers.client)
  localStorage.setItem('uid', res.headers.uid)
}

export async function registerUserService(user: RegisterPayload): Promise<User> {
  const res = await axiosInstance.post(process.env.REACT_APP_REGISTER_API_ENDPOINT!, user);
  console.log('Register res: ', res)

  updateTokens(res)
  const profile = await getCurrentProfile()
  return {...res.data.data, profile};
}

export async function loginUserService(user: LoginPayload): Promise<User> {
  const res = await axiosInstance.post(process.env.REACT_APP_LOGIN_API_ENDPOINT!, user);
  console.log('Login res: ', res)

  updateTokens(res)
  const profile = await getCurrentProfile()
  return {...res.data.data, profile};
}
