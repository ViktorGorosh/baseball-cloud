import React, {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {signIn} from "state/ducks/user";

const Auth = () => {
	const dispatch = useDispatch()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const onChangeEmail = useCallback((e) => {
		setEmail(e.target.value)
	}, [])

	const onChangePassword = useCallback((e) => {
		setPassword(e.target.value)
	}, [])

	const onSignIn = useCallback(() => {
		dispatch(signIn({email, password}))
	}, [dispatch, email, password])

	return (
		<form>
			<input
				type="email"
				placeholder="Email"
				onChange={onChangeEmail}
			/>
			<input
				type="password"
				placeholder="Password"
				onChange={onChangePassword}
			/>
			<button onClick={onSignIn}>Sign in</button>
		</form>
	)
}

export default Auth
