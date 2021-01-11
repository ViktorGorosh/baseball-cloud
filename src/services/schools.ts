import {axiosInstance, graphql} from './api'
import {AxiosResponse} from "axios";
import {getSchoolsData} from "interfaces/school";

export async function getSchools() {

  const query = `
    query Schools($search: String!) {
      schools(search: $search) {
        schools {
          id
          name
        }         
      }
    }
  `

  const variables = {search: ''}

  const schools: AxiosResponse<getSchoolsData> = await axiosInstance.post(graphql, {query, variables})

  if (schools.data.errors) {
    throw new Error('Не удалось загрузить данные о школах')
  } else {
    return schools.data.data!.schools.schools
  }
}
