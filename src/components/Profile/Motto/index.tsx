import { Check, PencilAlt } from '@styled-icons/fa-solid'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import FormTextArea, { SizeTextarea } from '../../Form/components/FormTextArea'
import { StyledParagraph } from '../../StyledText/StyledParagraph'
import { Edit, PlaceholderText } from '../styled'

type Props = {
	motto: string | undefined
}

export const Motto: React.FC<Props> = ({ motto }) => {
	const [element, setElement] = useState<boolean>(false)

	const [text, setText] = useState<string | undefined>('')

	useEffect(() => {
		setText(motto)
	}, [motto])

	const { register, handleSubmit, errors } = useForm()

	const changeText = (text: string | undefined) => setText(text)

	return (
		<>
			{element ? (
				<form onSubmit={handleSubmit(() => setElement(false))}>
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
