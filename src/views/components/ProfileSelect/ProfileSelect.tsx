import React from "react";
import { Field} from "react-final-form";
import {ProfileSelectProps} from "interfaces/props";
import styles from './ProfileInput.module.scss'

export const ProfileSelect = ({name, placeholder}: ProfileSelectProps) => {
  return (
    <div className={styles.selectContainer}>
      <Field
        name={name}
        component={'select'}
        defaultValue={'1'}
      >
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Field>
      <label>{placeholder}</label>
    </div>
  )
}
