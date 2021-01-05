import {axiosInstance} from "./api";
import {
  LoginPayload,
  RegisterPayload,
} from 'interfaces/user';

export async function registerUserService(user: RegisterPayload) {
  const res = await axiosInstance.post(process.env.REACT_APP_REGISTER_API_ENDPOINT!, user);
  console.log('Register res: ', res)

  // const accessToken = res.headers['access-token']
  // const client = res.headers.client

  axiosInstance.defaults.headers['access-token'] = res.headers['access-token']
  axiosInstance.defaults.headers['client'] = res.headers.client

  return res.data.data;
}

export async function loginUserService(user: LoginPayload) {
  const res = await axiosInstance.post(process.env.REACT_APP_LOGIN_API_ENDPOINT!, user);
  console.log('Login res: ', res)

  // const accessToken = res.headers['access-token']
  // const client = res.headers.client

  axiosInstance.defaults.headers['access-token'] = res.headers['access-token']
  axiosInstance.defaults.headers['client'] = res.headers.client

  return res.data.data;
}
