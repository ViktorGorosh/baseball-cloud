import {axiosInstance} from "./api";
import {
  AuthResponse,
  LoginPayload,
  RegisterPayload,
} from 'interfaces/user';

const graphql = process.env.REACT_APP_GRAPHQL_API_ENDPOINT!

function updateTokens(res: AuthResponse) {
  axiosInstance.defaults.headers['access-token'] = res.headers['access-token']
  axiosInstance.defaults.headers['client'] = res.headers.client
  axiosInstance.defaults.headers['uid'] = res.headers.uid

  localStorage.setItem('access-token', res.headers['access-token'])
  localStorage.setItem('client', res.headers.client)
  localStorage.setItem('uid', res.headers.uid)
}

async function getCurrentProfile() {
  const query = `{
    current_profile() {
      first_name
      last_name
      position
      position2
      avatar
      throws_hand
      bats_hand
      biography
      school_year
      feet
      inches
      weight
      age
      school
      teams
      facilities
    }
  }`

  const res = await axiosInstance.post(graphql, {query})
  console.log(res)
}

export async function registerUserService(user: RegisterPayload) {
  const res = await axiosInstance.post(process.env.REACT_APP_REGISTER_API_ENDPOINT!, user);
  console.log('Register res: ', res)

  updateTokens(res)
  await getCurrentProfile()
  return res.data.data;
}

export async function loginUserService(user: LoginPayload) {
  const res = await axiosInstance.post(process.env.REACT_APP_LOGIN_API_ENDPOINT!, user);
  console.log('Login res: ', res)

  updateTokens(res)
  await getCurrentProfile()
  return res.data.data;
}
