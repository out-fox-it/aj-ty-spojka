import { Check, PencilAlt } from '@styled-icons/fa-solid'
import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import FormTextArea, { SizeTextarea } from '../../Form/components/FormTextArea'
import { StyledParagraph } from '../../StyledText/StyledParagraph'
import { Edit, PlaceholderText } from '../styled'
import { firestore } from '../../../firebase'
import { useUser } from '../../User'

type Props = {
	motto?: string
}

const Motto: React.FC<Props> = ({ motto }) => {
	const [element, setElement] = useState<boolean>(false)

	const [text, setText] = useState<string>()

	const { user } = useUser()

	useEffect(() => {
		setText(motto)
	}, [motto])

	const { register, errors } = useForm()

	const changeText = (text?: string) => setText(text)

	const updateUserMotto = useCallback(
		(motto: string): void => {
			if (user) {
				firestore
					.collection('profiles')
					.doc(user.uid)
					.update({ motto })
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
			{element ? (
				<form
					onSubmit={(event) => {
						event.preventDefault()
						setElement(false)
						updateUserMotto(text ?? '')
					}}
				>
					<FormTextArea
						register={register}
						errors={errors}
						value={text}
						placeholder="Napiš své motto"
						change={changeText}
						lengthText={{
							value: 150,
							message:
								'Vaše motto přesáhlo max. délku 150 znaků.',
						}}
						sizeTextarea={SizeTextarea.Small}
					/>
					<Edit name="submit" type="submit">
						<Check />
					</Edit>
				</form>
			) : (
				<>
					<StyledParagraph>
						{text?.length ? (
							text
						) : (
							<PlaceholderText>
								Prostor pro své motto
							</PlaceholderText>
						)}
						<Edit onClick={() => setElement(true)}>
							<PencilAlt />
						</Edit>
					</StyledParagraph>
				</>
			)}
		</>
	)
}

export default Motto
