import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Check, PencilAlt } from '@styled-icons/fa-solid'

import FormTextArea, {
	SizeTextarea,
} from 'components/Form/components/FormTextArea'
import { useUser } from 'components/User'

import { Description, Edit, PlaceholderText, Title } from '../../styled'

type Props = {
	aboutMe?: string
}

type FormData = {
	textarea?: string
}

const AboutMe: React.FC<Props> = ({ aboutMe }) => {
	const [isEditing, setIsEditing] = useState(false)

	const { register, errors, handleSubmit } = useForm<FormData>()

	const { updateProfile } = useUser()

	const onSubmit = useCallback(
		handleSubmit(({ textarea }) => {
			setIsEditing(false)
			updateProfile({ about: textarea })
		}),
		[handleSubmit, setIsEditing, updateProfile]
	)

	return (
		<>
			<Title>
				Něco o mně
				{!isEditing && (
					<Edit onClick={() => setIsEditing(true)}>
						<PencilAlt />
					</Edit>
				)}
			</Title>
			{isEditing ? (
				<form onSubmit={onSubmit}>
					<FormTextArea
						register={register}
						errors={errors}
						defaultValue={aboutMe}
						placeholder="Zde můžeš napsat něco o sobě . . ."
						lengthText={{
							value: 3000,
							message:
								'Váš popis přesáhl 3 000 znaků. Zkuste jej zkrátit a napsat o sobě jen to nejzajímavější.',
						}}
						sizeTextarea={SizeTextarea.Large}
					/>
					<Edit name="submit" type="submit">
						<Check />
					</Edit>
				</form>
			) : (
				<Description>
					{aboutMe?.length ? (
						aboutMe
					) : (
						<PlaceholderText>
							Nejsou zapsány žádné informace
						</PlaceholderText>
					)}
				</Description>
			)}
		</>
	)
}

export default AboutMe
