import React from 'react'
import { useHistory } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import { Form, FormButton, FormItem } from '../Form/styled'

import FormEmail from '../Form/components/FormEmail'
import FormPassword from '../Form/components/FormPassword'

const LoginForm: React.FC = () => {
	const { handleSubmit, errors, register } = useForm<FormData>({
		mode: 'onChange',
		reValidateMode: 'onChange',
	})

	const history = useHistory()

	const onSubmit = handleSubmit(
		() => history.push('/')

		// TODO: HANDLE ERRORS
	)

	return (
		<Form onSubmit={onSubmit} noValidate>
			<h1>PŘIHLAŠOVACÍ FORMULÁŘ</h1>

			<FormEmail register={register} errors={errors} />

			<FormPassword
				passwordName="password"
				passwordLabel="Heslo:"
				register={register}
				errors={errors}
				passwordErrorDisplay={false}
			/>

			{/* TODO: Remember login info */}
			{/* TODO: Forgot password */}

			{/* SUBMIT */}
			<FormItem>
				<FormButton name="submit" type="submit">
					ODESLAT
				</FormButton>
			</FormItem>
		</Form>
	)
}

export default LoginForm
