import React from "react";
import {Field} from "react-final-form";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Error} from "views/components/Error";
import {AuthInputProps} from "interfaces/props";
import styles from "./AuthInput.module.scss";

const AuthInput = ({name, type, placeholder, icon}: AuthInputProps) => (
  <Field name={name}>
    {({input, meta}) => (
      <div className={styles.inputContainer}>
        <input
          type={type}
          placeholder={placeholder}
          className={styles.input}
          {...input}
        />
        <FontAwesomeIcon className={styles.icon} icon={icon} />
        {meta.error && meta.touched && <Error text={meta.error}/>}
      </div>
    )}
  </Field>
)

export default AuthInput
