import React from 'react'
import { useForm } from 'react-hook-form'
import { Errors, FormItem, Label, FormInput } from '../../styled'

type Props = {
	passwordName: string
	passwordLabel: string
	register: ReturnType<typeof useForm>['register']
	errors: ReturnType<typeof useForm>['errors']
	passwordErrorDisplay: boolean
	onFocus?: () => void
	validate?: (value: string) => string | boolean
}

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/

const FormPassword: React.FC<Props> = ({
	passwordName,
	passwordLabel,
	register,
	errors,
	passwordErrorDisplay,
	onFocus,
	validate,
}) => (
	<>
		<FormItem>
			<Label htmlFor="password">{passwordLabel}</Label>
			<FormInput
				name={passwordName}
				type="password"
				placeholder="1SafePassword%"
				ref={register({
					required: true,
					pattern: passwordRegex,
					validate,
				})}
				onFocus={onFocus}
			/>
		</FormItem>

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
