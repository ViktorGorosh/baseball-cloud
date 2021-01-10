import {GraphqlData} from "./graphql";

export interface Profile {
  id: string,
  first_name: string | null,
  last_name: string | null,
  position: string | null,
  position2: string | null,
  avatar: string | null,
  throws_hand: 'r' | 'l' | null,
  bats_hand: 'r' | 'l' | null,
  biography: string
  school_year: number | null,
  feet: number | null,
  inches: number | null,
  weight: number | null,
  age: number | null,
  school: string | null,
  teams: string[],
  facilities: string[]
}

export type getCurrentProfileData = GraphqlData<{
  current_profile: Profile
}>
