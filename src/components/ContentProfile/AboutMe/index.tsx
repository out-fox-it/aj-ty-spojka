import React, { useState } from 'react'
import { Description, EditDescription } from './styled'
import { EditIcon, Icon } from '../../EditIcon'

interface StateData {
	change: boolean
	value: string
}

export const AboutMe: React.FC = () => {
	const [input, setInput] = useState<StateData>({
		change: true,
		value: '',
	})
	return (
		<>
			{input.change ? (
				<>
					<Description>
						{input.value}
						<EditIcon<StateData>
							icon={Icon.pencil}
							stateFunction={setInput}
							state={{
								change: false,
								value: input.value,
							}}
						/>
					</Description>
				</>
			) : (
				<>
					<EditDescription
						value={input.value}
						onChange={(e) =>
							setInput({ change: false, value: e.target.value })
						}
					/>
					<EditIcon<StateData>
						icon={Icon.check}
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
