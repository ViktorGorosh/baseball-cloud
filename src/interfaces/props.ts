import {IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {Profile} from "./profile";

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
  name: keyof Profile,
  value: any,
  placeholder: string
}

export interface ProfileTextareaProps {
  name: keyof Profile,
  value: any,
  placeholder: string
}

export interface ProfileSelectProps {
  name: keyof Profile,
  placeholder: string
}
