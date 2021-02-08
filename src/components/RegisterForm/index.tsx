import React, { useRef, useState } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {
	Errors,
	Form,
	FormButton,
	FormCheckbox,
	FormInput,
	FormItem,
	HiddenError,
	Label,
	PasswordMessage,
	ValidPassword,
	RegistrationMessage,
} from './styled'

type FormData = {
	email: string
	nickname: string
	password: string
	passwordConfirm: string
	check: boolean
}

const RegisterForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		errors,
		watch,
		setValue,
	} = useForm<FormData>({
		mode: 'onChange',
		reValidateMode: 'onChange',
	})

	// handle submitting form
	const history = useHistory()

	const onSubmit = handleSubmit(
		() => history.push('/register/successful')

		// TODO: HANDLE ERRORS
	)

	// password and PasswordMessage validation
	const [hidden, setHidden] = useState<boolean>(true)

	const password = useRef('')
	password.current = watch('password', '')

	const hasLowerCase = /[a-z]/.test(password.current)
	const hasMinimumLength = password.current.length >= 6
	const hasUpperCase = /[A-Z]/.test(password.current)
	const hasNumber = /\d/.test(password.current)

	// nickname prompter
	const email = useRef('')
	email.current = watch('email', '')

	const newNickname = email.current.substring(
		0,
		email.current.lastIndexOf('@')
	)

	return (
		<Switch>
			<Route path="/register/successful">
				{/* TODO: E-MAIL MI NEPŘIŠEL, POŠLI HO ZNOVU */}
				<RegistrationMessage>
					<h2>Registrace byla úspěšná!</h2>
					<p>
						Po potvrzení e-mailu si můžete začít hledat nové
						kamarády. :)
					</p>
				</RegistrationMessage>
			</Route>

			<Route path="/">
				<Form onSubmit={onSubmit} noValidate>
					<h1>REGISTRAČNÍ FORMULÁŘ</h1>

					{/* E-MAIL */}
					<FormItem>
						<Label htmlFor="email">E-mail:</Label>
						<FormInput
							name="email"
							type="email"
							placeholder="email@domain.com"
							ref={register({
								required: 'Musíte zadat e-mail!',
								pattern: {
									value: /^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message:
										'Neplatný formát e-mailové adresy!',
									// TODO: Must be unique!
								},
								maxLength: {
									value: 50,
									message: 'Váš e-mail má více než 50 znaků!',
								},
							})}
							onChange={() => setValue('nickname', newNickname)} // sets nickname to email prefix
						/>
					</FormItem>
					<Errors>
						{errors.email && <p>{errors.email.message}</p>}
					</Errors>

					{/* NICKNAME */}
					<FormItem>
						<Label htmlFor="nickname">Přezdívka:</Label>
						<FormInput
							name="nickname"
							type="text"
							placeholder="Přezdívka1"
							ref={register({
								required: 'Musíte zadat přezdívku!',
								maxLength: {
									value: 30,
									message:
										'Vaše přezdívka má více než 30 znaků!',
								},
								// TODO: Must be unique!
							})}
						/>
					</FormItem>
					<Errors>
						{errors.nickname && <p>{errors.nickname.message}</p>}
					</Errors>

					{/* PASSWORD */}
					<FormItem>
						<Label htmlFor="password">Heslo:</Label>
						<FormInput
							name="password"
							type="password"
							placeholder="1SafePassword%"
							onFocus={() => setHidden(false)} // enables PasswordMessage
							ref={register({
								// messages not necessary (PasswordMessage handles those)
								required: '',
								pattern: {
									value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
									message: '',
								},
							})}
						/>
					</FormItem>
					<HiddenError>
						{errors.password && <p>{errors.password.message}</p>}
					</HiddenError>

					<PasswordMessage hidden={hidden}>
						<ValidPassword validPassword={hasLowerCase}>
							malé písmeno
						</ValidPassword>
						<ValidPassword validPassword={hasMinimumLength}>
							více než 6 znaků
						</ValidPassword>
						<ValidPassword validPassword={hasUpperCase}>
							VELKÉ PÍSMENO
						</ValidPassword>
						<ValidPassword validPassword={hasNumber}>
							číslo
						</ValidPassword>
					</PasswordMessage>

					{/* CONFIRM PASSWORD */}
					<FormItem>
						<Label htmlFor="passwordConfirm">Potvrď heslo:</Label>
						<FormInput
							name="passwordConfirm"
							type="password"
							placeholder="1SafePassword%"
							ref={register({
								validate: (value) =>
									value === password.current ||
									'Hesla se neshodují!',
							})}
						/>
					</FormItem>
					<Errors>
						{errors.passwordConfirm && (
							<p>{errors.passwordConfirm.message}</p>
						)}
					</Errors>

					{/* CHECK */}
					<FormItem>
						<Label htmlFor="check">Souhlasím s XY:</Label>
						<FormCheckbox
							name="check"
							type="checkbox"
							ref={register({
								required:
									'Registrace bez souhlasu s podmínkami není možná!',
							})}
						/>
					</FormItem>
					<Errors>
						{errors.check && <p>{errors.check.message}</p>}
					</Errors>

					{/* SUBMIT */}
					<FormItem>
						<FormButton name="submit" type="submit">
							ODESLAT
						</FormButton>
					</FormItem>
				</Form>
			</Route>
		</Switch>
	)
}

export default RegisterForm
