import React, { useCallback, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

import { authentication } from 'services/firebase'

import {
	Form,
	FormButton,
	FormItemForm,
	FormTitle,
	Errors,
} from 'components/Form/styled'
import FormEmail from 'components/Form/components/FormEmail'
import FormPassword from 'components/Form/components/FormPassword'
import FormPasswordMessage from 'components/Form/components/FormPasswordMessage'
import FormCheckbox from 'components/Form/components/FormCheckbox'
import FormText from 'components/Form/components/FormText'

type Props = {
	onSuccess: () => void
}

type FormData = {
	email: string
	nickname: string
	password: string
	passwordConfirm: string
	check: boolean
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

	const [submitError, setSubmitError] = useState('')

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

	const onSubmit = useCallback(
		handleSubmit(async ({ email, nickname, password }) => {
			try {
				const {
					user,
				} = await authentication.createUserWithEmailAndPassword(
					email,
					password
				)

				if (user) {
					// TODO: Move this to the creation of a user profile
					await user.updateProfile({ displayName: nickname })

					onSuccess()
				}
			} catch (error) {
				if (error?.code === 'auth/email-already-in-use') {
					setSubmitError('Tento e-mail již existuje!')
				} else {
					console.error(error)
				}
			}
		}),
		[handleSubmit, onSuccess, setSubmitError]
	)

	return (
		<Form onSubmit={onSubmit} noValidate>
			<FormTitle>REGISTRAČNÍ FORMULÁŘ</FormTitle>

			<FormEmail
				register={register}
				errors={errors}
				// onChange sets nickname to email prefix
				onChange={() => setValue('nickname', newNickname)}
			/>

			<FormItemForm>
				<FormText
					register={register}
					errors={errors}
					label={'Přezdívka:'}
					required={'Musíte zadat přezdívku!'}
					placeholder={'Přezdívka1'}
				/>
			</FormItemForm>

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
			<FormItemForm>
				<FormButton name="submit" type="submit">
					ODESLAT
				</FormButton>
			</FormItemForm>

			{submitError && <Errors>{submitError}</Errors>}
		</Form>
	)
}

export default RegisterForm
