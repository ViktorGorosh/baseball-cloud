import React, {useCallback, useState} from "react";

const Auth = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const onChangeEmail = useCallback((e) => {
		setEmail(e.target.value)
	}, [])
	const onChangePassword = useCallback((e) => {
		setPassword(e.target.value)
	}, [])
	return (
		<form>
			<input
				type="email"
				placeholder="Email"
				onChange = {onChangeEmail}
			/>
			<input
				type="password"
				placeholder="Password"
				onChange={onChangePassword}
			/>
			<button onClick={() => console.log({email, password})}>Sign in</button>
		</form>
	)
}

export default Auth
