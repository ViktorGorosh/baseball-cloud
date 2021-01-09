import React from "react";
import { Field} from "react-final-form";
import {ProfileTextareaProps} from "interfaces/props";
import styles from './ProfileTextarea.module.scss'

export const ProfileTextarea = ({name, value, placeholder}: ProfileTextareaProps) => {
  return (
    <div className={styles.container}>
      <Field name={name} defaultValue={value} component={'textarea'} placeholder={placeholder}/>
      <label>{placeholder}</label>
    </div>
  )
}
