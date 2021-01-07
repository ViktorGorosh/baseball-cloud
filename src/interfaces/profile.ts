import {Avatar} from "./user";

export interface Profile {
  id: string,
  first_name: string | null,
  last_name: string | null,
  position: string | null,
  position2: string | null,
  avatar: Avatar | null,
  throws_hand: 'r' | 'l' | null,
  bats_hand: 'r' | 'l' | null,
  biography: string | null
  school_year: number | null,
  feet: number | null,
  inches: number | null,
  weight: number | null,
  age: number | null,
  school: string | null,
  teams: string[],
  facilities: string[]
}
