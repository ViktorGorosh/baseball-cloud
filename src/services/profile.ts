import {gql, GraphQLClient} from 'graphql-request'

// export async function getProfileData(id: string) {
//
//   const query = gql`
//     query Profile($id:String!) {
//       profile(id: $id) {
//         first_name
//         last_name
//       }
//     }`
//
//   const data = await axiosInstance.post(process.env.REACT_APP_GRAPHQL_API_ENDPOINT!, {query, variables: {id}})
//   console.log(data)
// }

const endpoint = process.env.REACT_APP_BASE_URL + process.env.REACT_APP_GRAPHQL_API_ENDPOINT!

const client = new GraphQLClient(endpoint)

export async function getProfileData(id: string) {

  client.setHeaders({
    'access-token': localStorage.getItem('access-token')!,
    'client': localStorage.getItem('client')!,
    'uid': localStorage.getItem('uid')!,
  })

  const query = gql`
    query Profile($id:String!) {
      profile(id: $id) {
        first_name
        last_name
      }
    }`

  const variables = {id}

  const data = await client.request(query, variables)
  console.log(data)
}
