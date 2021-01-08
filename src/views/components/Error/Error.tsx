import React from "react";
import {ErrorProps} from "interfaces/props";
import styles from './Error.module.scss'

const Error = ({text}: ErrorProps) => (
  <div className={styles.text}>{text}</div>
)

export default Error
