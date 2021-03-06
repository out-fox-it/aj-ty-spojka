import React from 'react'
import { useForm } from 'react-hook-form'
import { Eye } from '@styled-icons/fa-solid'

import { Errors, FormItemForm, Label, FormInput, FormIcon } from '../../styled'

type Props = {
	errors: ReturnType<typeof useForm>['errors']
	onClick?: () => void
	onFocus?: () => void
	passwordErrorDisplay: boolean
	passwordLabel: string
	passwordName: string
	passwordType: string
	register: ReturnType<typeof useForm>['register']
	validate?: (value: string) => string | boolean
}

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/

const FormPassword: React.FC<Props> = ({
	errors,
	onClick,
	onFocus,
	passwordErrorDisplay,
	passwordLabel,
	passwordName,
	passwordType,
	register,
	validate,
}) => (
	<>
		<FormItemForm>
			<Label htmlFor="password">{passwordLabel}</Label>

			<FormInput
				name={passwordName}
				type={passwordType}
				placeholder="1SafePassword%"
				ref={register({
					required: true,
					pattern: passwordRegex,
					validate,
				})}
				onFocus={onFocus}
			/>
		</FormItemForm>

		<FormIcon>
			<Eye onClick={onClick} />
		</FormIcon>

		{passwordErrorDisplay && (
			<Errors>
				{errors?.passwordConfirm?.types?.validate && (
					<p>Hesla se neshodují!</p>
				)}
			</Errors>
		)}
	</>
)

export default FormPassword
