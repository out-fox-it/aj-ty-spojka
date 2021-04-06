import React from 'react'
import { useForm } from 'react-hook-form'
import { Errors, FormItemForm, FormTextBlock } from '../../styled'

export enum SizeTextarea {
	Large = '15em',
	Medium = '11em',
	Small = '8em',
}

type Props = {
	register: ReturnType<typeof useForm>['register']
	errors: ReturnType<typeof useForm>['errors']
	placeholder: string
	lengthText: {
		value: number
		message: string
	}
	sizeTextarea: SizeTextarea
	defaultValue?: string
	change?: (text?: string) => void
}

const FormTextArea: React.FC<Props> = ({
	register,
	errors,
	placeholder,
	lengthText,
	sizeTextarea,
	defaultValue,
	change,
}) => (
	<>
		<FormItemForm>
			<FormTextBlock
				name="textarea"
				defaultValue={defaultValue}
				placeholder={placeholder}
				onChange={(event) => !change || change(event.target.value)}
				ref={register({
					required: false,
					maxLength: lengthText,
				})}
				size={sizeTextarea}
			/>
		</FormItemForm>
		{errors.textarea && <Errors>{errors.textarea.message}</Errors>}
	</>
)

export default FormTextArea
