import React, {useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Form} from 'react-final-form'
import {Link, Redirect} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faCheckSquare, faCheck } from '@fortawesome/free-solid-svg-icons'
import {AuthInput} from "views/components/AuthInput";
import {Error} from "views/components/Error";
import {signUp} from "state/ducks/user";
import {selectAuthorized, selectError} from "state/ducks/meta";
import {RegisterPayload, Role, RoleNote} from "interfaces/user";
import styles from 'assets/styles/Auth.module.scss'

const notes: RoleNote[] = [
  {
    role: 'player',
    title: 'Players',
    message: 'Players have their own profile within the system and plan on having data collected.'
  },
  {
    role: 'scout',
    title: 'Scouts',
    message: 'Coaches and scouts can view players in the system but do not have their own profile.'
  }
]

const Registration = () => {

  const [role, setRole] = useState<Role>('player')

  const dispatch = useDispatch()
  const isAuthorized = useSelector(selectAuthorized)
  const error = useSelector(selectError)

  const onSignUp = useCallback((signUpInfo: RegisterPayload) => {
    dispatch(signUp({...signUpInfo, role}))
  }, [dispatch, role])

  if (isAuthorized) return (
    <Redirect to='/profile' exact />
  )

  return (
    <div className={styles.loginView}>
      <div className={styles.formContainer}>
        <Form
          onSubmit={onSignUp}
          validate={values => {
            const errors: any = {}
            if (!values.email) {
              errors.email = 'Required'
            }
            if (!values.password) {
              errors.password = 'Required'
            } else if (values.password.length < 8) {
              errors.password = 'Must be at least 8 characters'
            }
            if (!values.password_confirmation) {
              errors.password_confirmation = 'Required'
            } else if (values.password_confirmation !== values.password) {
              errors.password_confirmation = 'Must match'
            }
            return errors
          }}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className={styles.roleContainer}>
                <button
                  className={`${styles.roleBtn} ${role === 'player' ? styles.active : ''}`}
                  type="button"
                  onClick={() => setRole('player')}
                >
                  {role === 'player'
                    ? <FontAwesomeIcon className={styles.roleIcon} icon={faCheckSquare} />
                    : null
                  }

                  Sign Up as Player
                </button>
                <button
                  className={`${styles.roleBtn} ${role === 'scout' ? styles.active : ''}`}
                  type="button"
                  onClick={() => setRole('scout')}
                >
                  {role === 'scout'
                    ? <FontAwesomeIcon className={styles.roleIcon} icon={faCheckSquare} />
                    : null
                  }
                  Sign Up as Scout
                </button>
              </div>
              <div className="registrationNote">
                <div className={styles.registrationNoteHeader}>
                  {notes.find(note => note.role === role)!.title}
                </div>
                <p className={styles.registrationNoteParagraph}>
                  {notes.find(note => note.role === role)!.message}
                </p>
              </div>

              <AuthInput name={'email'} type={'email'} placeholder={'Email'} icon={faUser} />
              {error ? <Error text={error} /> : null }
              <AuthInput name={'password'} type={'password'} placeholder={'Password'} icon={faLock} />
              <AuthInput name={'password_confirmation'} type={'password'} placeholder={'Confirm password'} icon={faCheck} />

              <div className={styles.agreement}>
                By clicking Sign Up, you agree to our&nbsp;
                <a href="#">Terms of Service</a>&nbsp;and
                <a href="#"> Privacy Policy</a>.
              </div>
              <button className={styles.submit} type='submit'>Sign Up</button>
              <div className="d-flex justify-content-center">
                <div className={styles.footerText}>
                  Already registered?
                </div>
                <Link to='/login' className={styles.changeScreen}>Sign In</Link>
              </div>
            </form>
          )}
        />
      </div>
    </div>
  )
}

export default Registration
