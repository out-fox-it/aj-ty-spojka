import React, { useEffect, useState } from 'react'
import { Check, PencilAlt } from '@styled-icons/fa-solid'
import { Edit, ProfileName, Input } from '../styled'

type Props = {
	fullName: string
}

export const Name: React.FC<Props> = ({ fullName }) => {
	const [element, setElement] = useState<boolean>(true)
	const [text, setText] = useState<string>('')

	useEffect(() => {
		setText(fullName)
	}, [fullName])

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
					onSubmit={() => {
						setElement(true)
					}}
				>
					<Input
						type="text"
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
					<Edit type="submit">
						<Check />
					</Edit>
				</form>
			)}
		</>
	)
}
