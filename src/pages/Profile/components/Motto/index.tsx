import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Check, PencilAlt } from '@styled-icons/fa-solid'

import FormTextArea, {
	SizeTextarea,
} from 'components/Form/components/FormTextArea'
import { StyledParagraph } from 'components/StyledText/StyledParagraph'
import { useUser } from 'components/User'

import { Edit, PlaceholderText } from '../../styled'

type Props = {
	motto?: string
}

type FormData = {
	textarea?: string
}

const Motto: React.FC<Props> = ({ motto }) => {
	const [isEditing, setIsEditing] = useState(false)

	const { register, errors, handleSubmit } = useForm<FormData>()

	const { updateProfile } = useUser()

	const onSubmit = useCallback(
		handleSubmit(({ textarea }) => {
			setIsEditing(false)
			updateProfile({ motto: textarea })
		}),
		[handleSubmit, setIsEditing, updateProfile]
	)

	return isEditing ? (
		<form onSubmit={onSubmit}>
			<FormTextArea
				register={register}
				errors={errors}
				defaultValue={motto}
				placeholder="Napiš své motto"
				lengthText={{
					value: 150,
					message: 'Vaše motto přesáhlo max. délku 150 znaků.',
				}}
				sizeTextarea={SizeTextarea.Small}
			/>
			<Edit name="submit" type="submit">
				<Check />
			</Edit>
		</form>
	) : (
		<StyledParagraph>
			{motto?.length ? (
				motto
			) : (
				<PlaceholderText>Prostor pro své motto</PlaceholderText>
			)}
			<Edit onClick={() => setIsEditing(true)}>
				<PencilAlt />
			</Edit>
		</StyledParagraph>
	)
}

export default Motto
