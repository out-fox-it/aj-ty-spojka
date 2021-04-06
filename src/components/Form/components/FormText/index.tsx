import React from 'react'
import { useForm } from 'react-hook-form'
import { v4 as uuid } from 'uuid'
import { Errors, Label, FormInput } from '../../styled'

type Props = {
	register: ReturnType<typeof useForm>['register']
	errors: ReturnType<typeof useForm>['errors']
	required: boolean | string
	label?: string
	placeholder?: string
	defaultValue?: string
	change?: (text?: string) => void
	disabled?: boolean
	className?: string
}

const FormText: React.FC<Props> = ({
	register,
	errors,
	required,
	label,
	placeholder,
	defaultValue,
	change,
	disabled,
	className,
}) => {
	const uniqueId = uuid()

	return (
		<>
			{label && <Label htmlFor={uniqueId}>{label}</Label>}
			<FormInput
				id={uniqueId}
				name="textField"
				type="text"
				placeholder={placeholder}
				defaultValue={defaultValue}
				onChange={(event) => !change || change(event.target.value)}
				disabled={disabled}
				className={className}
				ref={register({
					required: required,
					maxLength: {
						value: 100,
						message: 'Příliš dlouhý text',
					},
				})}
			/>
			{errors.textField && <Errors>{errors.textField.message}</Errors>}
		</>
	)
}

export default FormText
