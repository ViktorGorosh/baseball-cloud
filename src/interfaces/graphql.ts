export interface Location {
  line: string,
  column: string,
}

export interface GraphqlError {
  message: string
  locations: Location[]
  fields: string[]
}

export interface GraphqlData<T> {
  data?: T
  errors?: GraphqlError[]
}
