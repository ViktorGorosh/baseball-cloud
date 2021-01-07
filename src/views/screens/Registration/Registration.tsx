import React, {useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Form} from 'react-final-form'
import {Link, Redirect} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faCheckSquare, faCheck } from '@fortawesome/free-solid-svg-icons'
import {AuthInput} from "views/components/AuthInput";
import {signUp} from "state/ducks/user";
import {RegisterPayload, Role, RoleNote} from "interfaces/user";
import styles from 'assets/styles/Auth.module.scss'
import {selectAuthorized} from "../../../state/ducks/meta";

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
				>
					{({ handleSubmit }) => (
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
				</Form>
			</div>
		</div>
	)
}

export default Registration
