import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import { Form, FormButton, FormItem } from '../Form/styled'

import FormEmail from '../Form/components/FormEmail'
import FormPassword from '../Form/components/FormPassword'
import FormCheckbox from '../Form/components/FormCheckbox'
import ForgottenPassword from './ForgottenPassword'

const LoginForm: React.FC = () => {
	const { handleSubmit, errors, register } = useForm<FormData>({
		mode: 'onChange',
		reValidateMode: 'onChange',
	})
	// Mode is set to default (onSubmit)

	const history = useHistory()

	const onSubmit = handleSubmit(
		() => history.push('/')

		// TODO: HANDLE ERRORS
	)

	// Password eye icon shows or hides the password
	const [passwordShown, setPasswordShown] = useState(false)

	return (
		<Form onSubmit={onSubmit} noValidate>
			<h1>PŘIHLAŠOVACÍ FORMULÁŘ</h1>

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

			{/* SUBMIT */}
			<FormItem>
				<FormButton name="submit" type="submit">
					ODESLAT
				</FormButton>
			</FormItem>

			{/* TODO: Forgotten password */}
			<ForgottenPassword />
		</Form>
	)
}

export default LoginForm
