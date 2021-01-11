import {GraphqlData} from "./graphql";

export interface School {
  id: string
  name: string
}

export type getSchoolsData = GraphqlData<{ schools: { schools: School[] } }>
