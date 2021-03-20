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
	value?: string
	change?: (text: string | undefined) => void
	disabled?: boolean
	className?: string
}

const FormText: React.FC<Props> = ({
	register,
	errors,
	required,
	label,
	placeholder,
	value,
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
				value={value}
				onChange={(e) => !change || change(e.target.value)}
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
