import {axiosInstance} from "./api";

export async function getProfileData(id: string) {

  const query = `
    query Profile($id:String!) {
      profile(id: $id) {
        first_name
        last_name
      }
    }`

  const data = await axiosInstance.post(process.env.REACT_APP_GRAPHQL_API_ENDPOINT!, {query, variables: {id}})
  console.log(data)
}

