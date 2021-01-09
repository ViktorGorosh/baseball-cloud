import React from "react";
import { Field} from "react-final-form";
import {ProfileInputProps} from "interfaces/props";
import styles from './ProfileInput.module.scss'

export const ProfileInput = ({name, value, placeholder}: ProfileInputProps) => {
  return (
    <Field name={name} initialValue={value}>
      {({input, meta, }) => (
        <div className='position-relative'>
          <input
            type="text"
            placeholder={placeholder}
            className={styles.input}
            {...input}
          />
          <label>{placeholder}</label>
        </div>
      )}
    </Field>
  )
}
