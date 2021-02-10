import React, { useEffect, useState } from 'react'
import { PencilAlt, Check } from '@styled-icons/fa-solid'
import { ProfileName, EditName, Edit } from './styled'

interface Props {
	fullName: string
}

interface StateData {
	change: boolean
	value: string
}

export const Name: React.FC<Props> = ({ fullName }) => {
	const [input, setInput] = useState<StateData>({
		change: true,
		value: '',
	})

	useEffect(() => {
		setInput({ change: true, value: fullName })
	}, [fullName])

	return (
		<>
			{input.change ? (
				<>
					<ProfileName>{input.value}
						<Edit><PencilAlt
							onClick={() =>
								setInput({ change: false, value: input.value })
							}
						/>
					</Edit>
                    </ProfileName>
					
				</>
			) : (
				<>
					<EditName
						type="text"
						value={input.value}
						onChange={(e) =>
							setInput({ change: false, value: e.target.value })
						}
					/>
					<Edit>
						<Check
							onClick={() =>
								setInput({ change: true, value: input.value })
							}
						/>
					</Edit>
				</>
			)}
		</>
	)
}
