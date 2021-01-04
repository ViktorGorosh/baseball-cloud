import React, {useCallback} from "react";
import {useDispatch} from "react-redux";
import {Form} from 'react-final-form';
import {Link} from "react-router-dom";
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import {AuthInput} from "views/components/AuthInput";
import {signIn} from "state/ducks/user";
import {LoginPayload} from "interfaces/user";
import styles from 'assets/styles/Auth.module.scss';

const Login = () => {
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
							<AuthInput name={'email'} type={'email'} placeholder={'Email'} icon={faUser} />
							<AuthInput name={'password'} type={'password'} placeholder={'Password'} icon={faLock} />
							<button className={styles.submit} type='submit'>Sign In</button>
							<div className="d-flex justify-content-end mb-4">
								<a href="#">Forgotten password?</a>
							</div>
							<div className="d-flex justify-content-center">
								<div className={styles.footerText}>
									Don’t have an account?
								</div>
								<Link to='/registration' className={styles.changeScreen}>Sign Up</Link>
							</div>
						</form>
					)}
				</Form>
			</div>
		</div>
	)
}

export default Login
