import {IconDefinition} from "@fortawesome/free-solid-svg-icons";

export interface AuthInputProps {
  name: string,
  type: string,
  placeholder: string
  icon: IconDefinition
}

export interface ErrorProps {
  text: string
}

export interface ProfileInputProps {
  name: string,
  value: string,
  placeholder: string
}

export interface ProfileTextareaProps {
  name: string,
  value: string,
  placeholder: string
}

export interface ProfileSelectProps {
  name: string,
  placeholder: string
}
