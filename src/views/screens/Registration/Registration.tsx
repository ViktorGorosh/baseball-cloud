import React, {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {Field, Form} from 'react-final-form'
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import {signIn} from "state/ducks/user";
import {RegisterPayload} from "interfaces/user";
import styles from 'assets/styles/Auth.module.scss'

const Registration = () => {

	const [role, setRole] = useState<'player' | 'scout'>('player')

	const dispatch = useDispatch()

	const onSignIn = useCallback((signUpInfo: RegisterPayload) => {
		console.log(signUpInfo)
	}, [dispatch])

	return (
		<div className={styles.loginView}>
			<div className={styles.formContainer}>
				<Form
					onSubmit={onSignIn}
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
							<div className={styles.inputContainer}>
								<Field name="email">
									{({input}) => (
										<input
											type="email"
											placeholder="Email"
											className={styles.input}
											{...input}
										/>
									)}
								</Field>
								<FontAwesomeIcon className={styles.icon} icon={faUser} />
							</div>
							<div className={styles.inputContainer}>
								<Field name="password">
									{({input}) => (
										<input
											type="password"
											placeholder="Password"
											className={styles.input}
											{...input}
										/>
									)}
								</Field>
								<FontAwesomeIcon className={styles.icon} icon={faLock} />
							</div>
							<button className={styles.submit} type='submit'>Sign In</button>
							<div className="d-flex justify-content-end mb-4">
								<a href="#">Forgotten password?</a>
							</div>
							<div className="d-flex justify-content-center">
								<div className={styles.footerText}>
									Don’t have an account?
								</div>
								<Link to='/home' className={styles.changeScreen}>Sign Up</Link>
							</div>
						</form>
					)}
				</Form>
			</div>
		</div>
	)
}

export default Registration
