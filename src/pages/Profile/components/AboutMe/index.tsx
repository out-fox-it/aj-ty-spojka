import { Check, PencilAlt } from '@styled-icons/fa-solid'
import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { firestore } from '../../../../firebase'
import FormTextArea, {
	SizeTextarea,
} from '../../../../components/Form/components/FormTextArea'
import { Description, Edit, PlaceholderText, Title } from '../../styled'
import { useUser } from '../../../../components/User'

type Props = {
	aboutMe: string
}

const AboutMe: React.FC<Props> = ({ aboutMe }) => {
	const [element, setElement] = useState<boolean>(false)

	const [text, setText] = useState<string>()

	const { user } = useUser()

	useEffect(() => {
		setText(aboutMe)
	}, [aboutMe])

	const { register, errors } = useForm()

	const changeText = (text?: string) => setText(text)

	const updateUserAboutMe = useCallback(
		(about: string): void => {
			if (user) {
				firestore
					.collection('profiles')
					.doc(user.uid)
					.update({ about })
					.catch((error) =>
						console.error(
							'Firestore failed to deliver profileData collection:',
							error
						)
					)
			}
		},
		[user]
	)

	return (
		<>
			<Title>
				Něco o mně
				{!element && (
					<Edit onClick={() => setElement(true)}>
						<PencilAlt />
					</Edit>
				)}
			</Title>
			{element ? (
				<form
					onSubmit={(event) => {
						event.preventDefault()
						setElement(false)
						updateUserAboutMe(text ?? '')
					}}
				>
					<FormTextArea
						register={register}
						errors={errors}
						value={text}
						placeholder="Zde můžeš napsat něco o sobě . . ."
						change={changeText}
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
					{text?.length ? (
						text
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
