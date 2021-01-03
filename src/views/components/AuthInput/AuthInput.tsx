import React from "react";
import {Field} from "react-final-form";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {AuthInputProps} from "interfaces/props";
import styles from "./AuthInput.module.scss";

const AuthInput = ({name, type, placeholder, icon}: AuthInputProps) => (
  <div className={styles.inputContainer}>
    <Field name={name}>
      {({input}) => (
        <input
          type={type}
          placeholder={placeholder}
          className={styles.input}
          {...input}
        />
      )}
    </Field>
    <FontAwesomeIcon className={styles.icon} icon={icon} />
  </div>
)

export default AuthInput
