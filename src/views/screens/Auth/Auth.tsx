import React, {useCallback} from "react";
import {useDispatch} from "react-redux";
import {Field, Form} from 'react-final-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import {signIn} from "state/ducks/user";
import {LoginPayload} from "interfaces/user";
import styles from './Auth.module.scss'

const Auth = () => {
	const dispatch = useDispatch()

	const onSignIn = useCallback((signInInfo: LoginPayload) => {
		dispatch(signIn(signInInfo))
	}, [dispatch])

	return (
		<div className={styles.loginView}>
			<div className={styles.formContainer}>
				<div className={styles.header}>
					<div className={styles.title}>Welcome to BaseballCloud!</div>
					<div className={styles.subtitle}>Sign into your account here:</div>
				</div>
				<Form
					onSubmit={onSignIn}
				>
					{({ handleSubmit }) => (
						<form onSubmit={handleSubmit}>
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
								<div className={styles.footerText}>Don’t have an account?
								</div>
								<a className={styles.changeScreen} href="#">Sign Up</a>
							</div>
						</form>
					)}
				</Form>
			</div>
		</div>
	)
}

export default Auth
