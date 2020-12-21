import axios from 'axios';
import {
  LoginPayload,
  LoginResponseData,
  RegisterPayload,
  RegisterResponseData,
} from '../interfaces/user';

const REGISTER_API_ENDPOINT = '';
const LOGIN_API_ENDPOINT = '/api/v1/auth/sign_in';

export async function registerUserService(
  user: RegisterPayload,
): Promise<RegisterResponseData> {
  const response = await axios.post(REGISTER_API_ENDPOINT, user);
  return response.data;
}

export async function loginUserService(
  user: LoginPayload,
): Promise<LoginResponseData> {
  console.log('request send')
  const response = await axios.post(LOGIN_API_ENDPOINT, user);
  console.log(response)
  return response.data;
}
