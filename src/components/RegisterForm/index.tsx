import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormButton, FormItem } from '../Form/styled'

import FormEmail from '../Form/components/FormEmail'
import FormNickname from '../Form/components/FormNickname'
import FormPassword from '../Form/components/FormPassword'
import FormPasswordMessage from '../Form/components/FormPasswordMessage'
import FormCheckbox from '../Form/components/FormCheckbox'

type Props = {
	onSuccess: () => void
}

const RegisterForm: React.FC<Props> = ({ onSuccess }) => {
	const {
		handleSubmit,
		watch,
		setValue,
		errors,
		register,
	} = useForm<FormData>({
		mode: 'onChange',
		reValidateMode: 'onChange',
		// criteriaMode is needed for Password validation
		criteriaMode: 'all',
	})

	// Nickname prompter
	const email = useRef('')
	email.current = watch('email', '')

	const newNickname = email.current.substring(
		0,
		email.current.lastIndexOf('@')
	)

	// Validation of password and PasswordMessage
	const password = useRef('')
	password.current = watch('password', '')

	// PasswordMessage is or is not visible
	const [hidden, setHidden] = useState<boolean>(true)

	// Password eye icon shows or hides the password
	const [passwordShown, setPasswordShown] = useState(false)

	const hasLowerCase = /[a-z]/.test(password.current)
	const hasMinimumLength = password.current.length >= 6
	const hasUpperCase = /[A-Z]/.test(password.current)
	const hasNumber = /\d/.test(password.current)

	const onSubmit = handleSubmit(
		() => onSuccess()

		// TODO: HANDLE ERRORS
	)

	return (
		<Form onSubmit={onSubmit} noValidate>
			<h1>REGISTRAČNÍ FORMULÁŘ</h1>

			<FormEmail
				register={register}
				errors={errors}
				// onChange sets nickname to email prefix
				onChange={() => setValue('nickname', newNickname)}
			/>

			<FormNickname register={register} errors={errors} />

			<FormPassword
				passwordName="password"
				passwordLabel="Heslo:"
				register={register}
				errors={errors}
				passwordErrorDisplay={false}
				passwordType={passwordShown ? 'text' : 'password'}
				// onFocus enables PasswordMessage
				onFocus={() => setHidden(false)}
				// onClick sets hides or enables the password
				onClick={() => setPasswordShown(!passwordShown)}
			/>

			<FormPasswordMessage
				hidden={hidden}
				hasLowerCase={hasLowerCase}
				hasMinimumLength={hasMinimumLength}
				hasNumber={hasNumber}
				hasUpperCase={hasUpperCase}
			/>

			<FormPassword
				passwordName="passwordConfirm"
				passwordLabel="Potvrď heslo:"
				register={register}
				errors={errors}
				passwordErrorDisplay={true}
				passwordType={passwordShown ? 'text' : 'password'}
				// onClick sets hides or enables the password
				onClick={() => setPasswordShown(!passwordShown)}
				// Validates that password and confirmPassword are equal
				validate={(value) => value === password.current}
			/>

			<FormCheckbox register={register} errors={errors} />

			{/* SUBMIT */}
			<FormItem>
				<FormButton name="submit" type="submit">
					ODESLAT
				</FormButton>
			</FormItem>
		</Form>
	)
}

export default RegisterForm
