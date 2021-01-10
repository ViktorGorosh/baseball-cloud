import {axiosInstance} from "./api";
import {
  AuthResponse,
  LoginPayload,
  RegisterPayload, User,
} from 'interfaces/user';
import {AxiosResponse} from "axios";

function updateTokens(res: AuthResponse) {
  axiosInstance.defaults.headers['access-token'] = res.headers['access-token']
  axiosInstance.defaults.headers['client'] = res.headers.client
  axiosInstance.defaults.headers['uid'] = res.headers.uid

  localStorage.setItem('access-token', res.headers['access-token'])
  localStorage.setItem('client', res.headers.client)
  localStorage.setItem('uid', res.headers.uid)
}

function deleteTokens() {
  axiosInstance.defaults.headers['access-token'] = undefined
  axiosInstance.defaults.headers['client'] = undefined
  axiosInstance.defaults.headers['uid'] = undefined

  localStorage.removeItem('access-token')
  localStorage.removeItem('client')
  localStorage.removeItem('uid')
}

export async function registerUserService(user: RegisterPayload): Promise<User> {
  const res: AxiosResponse<{data: User}> = await axiosInstance.post(process.env.REACT_APP_REGISTER_API_ENDPOINT!, user);

  updateTokens(res)
  return res.data.data;
}

export async function loginUserService(user: LoginPayload): Promise<User> {
  const res: AxiosResponse<{data: User}> = await axiosInstance.post(process.env.REACT_APP_LOGIN_API_ENDPOINT!, user);

  updateTokens(res)
  return res.data.data;
}

export async function signOutService() {
  await axiosInstance.delete(process.env.REACT_APP_SIGN_OUT_ENDPOINT!)
  deleteTokens()
}

export async function validateTokenService(): Promise<User> {
  axiosInstance.defaults.headers['access-token'] = localStorage.getItem('access-token')
  axiosInstance.defaults.headers['client'] = localStorage.getItem('client')
  axiosInstance.defaults.headers['uid'] = localStorage.getItem('uid')

  const res: AxiosResponse<{data?: User}> = await axiosInstance.get(process.env.REACT_APP_VALIDATE_TOKEN_ENDPOINT!)

  if (res.data.data) {
    updateTokens(res)
    return res.data.data
  } else {
    deleteTokens()
    throw new Error('Token expired. Please log in again')
  }
}
