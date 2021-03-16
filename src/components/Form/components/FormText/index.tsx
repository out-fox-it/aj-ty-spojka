import React from 'react'
import { useForm } from 'react-hook-form'
import { Errors, FormItem, Label, FormInput } from '../../styled'

type Props = {
	register: ReturnType<typeof useForm>['register']
	errors: ReturnType<typeof useForm>['errors']
	required: boolean | string
	label?: string
	placeholder?: string
	value?: string
	change?: (text: string | undefined) => void
}

const FormText: React.FC<Props> = ({
	register,
	errors,
	required,
	label,
	placeholder,
	value,
	change,
}) => (
	<>
		<FormItem>
			{label && <Label htmlFor="textField">{label}</Label>}
			<FormInput
				id="textField"
				name="textField"
				type="text"
				placeholder={placeholder}
				value={value}
				onChange={(e) => !change || change(e.target.value)}
				ref={register({
					required: required,
					maxLength: {
						value: 100,
						message: 'Příliš dlouhý text',
					},
				})}
			/>
		</FormItem>
		{errors.textField && <Errors>{errors.textField.message}</Errors>}
	</>
)

export default FormText
