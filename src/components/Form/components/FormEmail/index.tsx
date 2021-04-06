import React from 'react'
import { useForm } from 'react-hook-form'

import { Errors, FormItemForm, Label, FormInput } from '../../styled'

type Props = {
	register: ReturnType<typeof useForm>['register']
	errors: ReturnType<typeof useForm>['errors']
	onChange?: () => void
}

const emailRegex = /^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

const FormEmail: React.FC<Props> = ({ register, errors, onChange }) => (
	<>
		<FormItemForm>
			<Label htmlFor="email">E-mail:</Label>
			<FormInput
				name="email"
				type="email"
				placeholder="email@domain.com"
				ref={register({
					required: 'Musíte zadat e-mail!',
					pattern: {
						value: emailRegex,
						message: 'Neplatný formát e-mailové adresy!',
					},
					maxLength: {
						value: 254,
						message: 'Váš e-mail má více než 50 znaků!',
					},
				})}
				onChange={onChange}
			/>
		</FormItemForm>
		<Errors>{errors.email && <p>{errors.email.message}</p>}</Errors>
	</>
)

export default FormEmail
