import React, { useRef, useState } from 'react'
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
	InvalidPassword,
} from './styled'

// library for creating forms
import { useForm } from 'react-hook-form'

type FormData = {
	email: string
	nickname: string
	password: string
	passwordConfirm: string
	check: boolean
}

const RegisterForm: React.FC = () => {
	const { register, handleSubmit, errors, watch } = useForm<FormData>()

	// console.log to be removed after we'll be able to save user data
	const onSubmit = handleSubmit(({ email, nickname }) =>
		console.log(email, nickname)
	)

	// password validation
	const password = useRef({})
	password.current = watch('password', '')

	const [hidden, setHidden] = useState<boolean>(true)

	return (
		<Form onSubmit={onSubmit}>
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
						// TODO: Must be unique!
					})}
				/>
			</FormItem>
			<Errors>{errors.email && <p>{errors.email.message}</p>}</Errors>

			{/* NICKNAME */}
			<FormItem>
				<Label htmlFor="nickname">Přezdívka:</Label>
				<FormInput
					name="nickname"
					type="text"
					placeholder="Přezdívka1"
					ref={register({
						required: 'Musíte zadat přezdívku!',
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
					onBlur={() => setHidden(true)} // hides PasswordMessage
					ref={register({
						required: 'Musíte zadat heslo!',
						minLength: {
							value: 8,
							message: 'Heslo musí mít minimální délku',
						},
					})}
				/>
			</FormItem>
			<HiddenError>
				{errors.password && <p>{errors.password.message}</p>}
			</HiddenError>

			<PasswordMessage hidden={hidden}>
				{/* TODO: I don't know how to make this work. Real time validation should indicate
				wheter the password already has a number, lowercase letter and good lenght. */}
				<ValidPassword>lowercase</ValidPassword>
				<ValidPassword>UPPERCASE</ValidPassword>
				<ValidPassword>123</ValidPassword>
				<InvalidPassword>length</InvalidPassword>
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
							value === password.current || 'Hesla se neshodují!',
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
			<Errors>{errors.check && <p>{errors.check.message}</p>}</Errors>

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
