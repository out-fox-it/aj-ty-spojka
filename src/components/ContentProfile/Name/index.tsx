import React, { useEffect, useState } from 'react'
import { ProfileName, EditName } from './styled'
import { EditIcon, Icon } from '../../EditIcon'

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
					<ProfileName>
						{input.value}
						<EditIcon<StateData>
							icon={Icon.edit}
							stateFunction={setInput}
							state={{
								change: false,
								value: input.value,
							}}
						/>
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
					<EditIcon<StateData>
						icon={Icon.save}
						stateFunction={setInput}
						state={{
							change: true,
							value: input.value,
						}}
					/>
				</>
			)}
		</>
	)
}
