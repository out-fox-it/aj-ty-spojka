import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Check, PencilAlt } from '@styled-icons/fa-solid'

import FormText from 'components/Form/components/FormText'
import { FormItemFullWidth } from 'components/Form/styled'
import { useUser } from 'components/User'

import { Edit, ProfileName } from '../../styled'

type Props = {
	nickname: string
}

type FormData = {
	textField: string
}

const Nickname: React.FC<Props> = ({ nickname }) => {
	const [isEditing, setIsEditing] = useState(false)

	const { errors, register, handleSubmit } = useForm<FormData>()

	const { updateProfile } = useUser()

	const onSubmit = useCallback(
		handleSubmit(({ textField }) => {
			setIsEditing(false)
			updateProfile({ nickname: textField })
		}),
		[handleSubmit, setIsEditing, updateProfile]
	)

	return isEditing ? (
		<form onSubmit={onSubmit}>
			<FormItemFullWidth>
				<FormText
					register={register}
					errors={errors}
					required={'Jméno musí být vyplněno'}
					defaultValue={nickname}
				/>
			</FormItemFullWidth>
			<Edit name="submit" type="submit">
				<Check />
			</Edit>
		</form>
	) : (
		<ProfileName>
			{nickname}
			<Edit onClick={() => setIsEditing(true)}>
				<PencilAlt />
			</Edit>
		</ProfileName>
	)
}

export default Nickname
