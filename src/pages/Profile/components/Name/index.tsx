import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Check, PencilAlt } from '@styled-icons/fa-solid'

import { firestore } from 'services/firebase'

import FormText from 'components/Form/components/FormText'
import { FormItemFullWidth } from 'components/Form/styled'
import { useUser } from 'components/User'

import { Edit, ProfileName } from '../../styled'

type Props = {
	fullName: string
}

const Name: React.FC<Props> = ({ fullName }) => {
	const [element, setElement] = useState<boolean>(true)

	const [text, setText] = useState<string>()

	const { user } = useUser()

	useEffect(() => {
		setText(fullName)
	}, [fullName])

	const { errors, register } = useForm<FormData>()

	const changeText = (text?: string) => setText(text)

	const updateUserNickname = useCallback(
		(nickname: string): void => {
			if (user) {
				firestore
					.collection('profiles')
					.doc(user.uid)
					.update({ nickname })
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
				<ProfileName>
					{text}
					<Edit onClick={() => setElement(false)}>
						<PencilAlt />
					</Edit>
				</ProfileName>
			) : (
				<form
					onSubmit={(event) => {
						event.preventDefault()
						setElement(true)
						updateUserNickname(text ?? '')
					}}
				>
					<FormItemFullWidth>
						<FormText
							register={register}
							errors={errors}
							required={'Jméno musí být vyplněno'}
							value={text}
							change={changeText}
						/>
					</FormItemFullWidth>
					<Edit name="submit" type="submit">
						<Check />
					</Edit>
				</form>
			)}
		</>
	)
}

export default Name
