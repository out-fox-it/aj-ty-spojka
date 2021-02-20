import { Check, PencilAlt } from '@styled-icons/fa-solid'
import React, { useState } from 'react'
import { Description, Edit, EditDescription, Title } from '../styled'

export const AboutMe: React.FC = () => {
	const [element, setElement] = useState<boolean>(true)
	const [text, setText] = useState<string>('')

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
				<>
					<EditDescription
						value={text}
						placeholder="Zde můžeš napsat něco o sobě . . ."
						onChange={(e) => setText(e.target.value)}
					/>
					<Edit
						onClick={() => {
							setElement(false)
						}}
					>
						<Check />
					</Edit>
				</>
			) : (
				<Description>
					{text.length ? text : 'Nejsou zapsány žádné informace'}
				</Description>
			)}
		</>
	)
}
