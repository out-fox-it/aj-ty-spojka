import React from 'react'
import { useForm } from 'react-hook-form'
import { Errors, FormItem, Label, FormInput } from '../../styled'

type Props = {
	register: ReturnType<typeof useForm>['register']
	errors: ReturnType<typeof useForm>['errors']
}

const FormNickname: React.FC<Props> = ({ register, errors }) => (
	<>
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
						message: 'Vaše přezdívka má více než 30 znaků!',
					},
				})}
			/>
		</FormItem>
		<Errors>{errors.nickname && <p>{errors.nickname.message}</p>}</Errors>
	</>
)

export default FormNickname
