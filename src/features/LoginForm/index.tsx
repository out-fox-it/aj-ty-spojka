import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { authentication } from 'services/firebase'

import {
	Errors,
	Form,
	FormButton,
	FormItemForm,
	FormLink,
	FormTitle,
} from 'components/Form/styled'
import { FormCheckbox, FormEmail, FormPassword } from 'components/Form'

type FormData = {
	email: string
	password: string
	check: boolean
}

const LoginForm: React.FC = () => {
	const { handleSubmit, errors, register } = useForm<FormData>({
		mode: 'onChange',
		reValidateMode: 'onChange',
	})

	const history = useHistory()
	const [firebaseError, setFirebaseError] = useState(false)

	const onSubmit = useCallback(
		handleSubmit(async ({ email, password }) => {
			try {
				await authentication.signInWithEmailAndPassword(email, password)

				history.push('/home')
			} catch (error) {
				setFirebaseError(true)
			}
		}),
		[handleSubmit, history, setFirebaseError]
	)

	// TODO: HANDLE ERRORS
	// Password eye icon shows or hides the password
	const [passwordShown, setPasswordShown] = useState(false)

	return (
		<Form onSubmit={onSubmit} noValidate>
			<FormTitle>PŘIHLAŠOVACÍ FORMULÁŘ</FormTitle>
			<FormEmail register={register} errors={errors} />

			<FormPassword
				passwordName="password"
				passwordLabel="Heslo:"
				passwordType={passwordShown ? 'text' : 'password'}
				register={register}
				errors={errors}
				passwordErrorDisplay={false}
				// onClick sets hides or enables the password
				onClick={() => setPasswordShown(!passwordShown)}
			/>

			{/* TODO: Remember login info */}
			<FormCheckbox register={register} errors={errors} />

			{/* TODO: Call an error when the user's data does not match the database */}
			{firebaseError && (
				<Errors>
					<p>Přihlášení se nepodařilo. Zkontrolujte své údaje.</p>
				</Errors>
			)}

			{/* SUBMIT */}
			<FormItemForm>
				<FormButton name="submit" type="submit">
					ODESLAT
				</FormButton>
			</FormItemForm>

			{/* TODO: Forgotten password */}
			{/* TODO: Add correct link! */}
			<FormLink to="/">Zapomněli jste své heslo?</FormLink>
		</Form>
	)
}

export default LoginForm
