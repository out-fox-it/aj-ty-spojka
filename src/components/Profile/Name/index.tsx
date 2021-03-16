import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Check, PencilAlt } from '@styled-icons/fa-solid'
import { Edit, ProfileName } from '../styled'
import FormText from '../../Form/components/FormText'

type Props = {
	fullName: string
}

export const Name: React.FC<Props> = ({ fullName }) => {
	const [element, setElement] = useState<boolean>(true)

	const [text, setText] = useState<string | undefined>()

	useEffect(() => {
		setText(fullName)
	}, [fullName])

	const { errors, register, handleSubmit } = useForm<FormData>()

	const changeText = (text: string | undefined) => setText(text)

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
					onSubmit={handleSubmit(() => {
						setElement(true)
					})}
				>
					<FormText
						register={register}
						errors={errors}
						required={'Jméno musí být vyplněno'}
						value={text}
						change={changeText}
					/>
					<Edit name="submit" type="submit">
						<Check />
					</Edit>
				</form>
			)}
		</>
	)
}
