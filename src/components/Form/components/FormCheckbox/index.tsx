import React from 'react'
import { useForm } from 'react-hook-form'
import { Errors, FormItemForm, Label, FormCheck } from '../../styled'

type Props = {
	register: ReturnType<typeof useForm>['register']
	errors: ReturnType<typeof useForm>['errors']
}

const FormCheckbox: React.FC<Props> = ({ register, errors }) => (
	<>
		<FormItemForm>
			<Label htmlFor="check">Souhlasím s XY:</Label>
			<FormCheck
				name="check"
				type="checkbox"
				ref={register({
					required:
						'Registrace bez souhlasu s podmínkami není možná!',
				})}
			/>
		</FormItemForm>
		<Errors>{errors.check && <p>{errors.check.message}</p>}</Errors>
	</>
)

export default FormCheckbox
