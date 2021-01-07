import {AxiosResponse} from "axios";
import {axiosInstance} from "./api";
import {getCurrentProfileData, Profile} from "interfaces/profile";

const graphql = process.env.REACT_APP_GRAPHQL_API_ENDPOINT!

export async function getCurrentProfile(): Promise<Profile> {
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
      school {
        id
        name
      }
      teams {
        id
        name
      }
      facilities {
        id
        email
        u_name
      }
    }
  }`

  const res: AxiosResponse<getCurrentProfileData> = await axiosInstance.post(graphql, {query})
  if (res.data.errors) {
    throw new Error('Не удалось загрузить данные профиля')
  } else {
    return res.data.data!.current_profile
  }
}
