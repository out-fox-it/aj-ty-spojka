import { Check, PencilAlt } from '@styled-icons/fa-solid'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import FormTextArea, { SizeTextarea } from '../../Form/components/FormTextArea'
import { Description, Edit, PlaceholderText, Title } from '../styled'

export const AboutMe: React.FC = () => {
	const [element, setElement] = useState<boolean>(false)

	const [text, setText] = useState<string | undefined>('')

	const { register, handleSubmit, errors } = useForm()

	const changeText = (text: string | undefined) => setText(text)

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
					onSubmit={handleSubmit(() => {
						setElement(false)
					})}
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
