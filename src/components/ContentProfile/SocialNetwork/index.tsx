import React, { useState } from 'react'
import { Account, EditAccount } from './styled'
import { EditIcon, Icon } from '../../EditIcon'

interface StateData {
	change: boolean
	value: string
}

export const SocialNetwork: React.FC = () => {
	const [input, setInput] = useState<StateData>({
		change: true,
		value: '',
	})

	return (
		<>
			{input.change ? (
				<>
					<Account>
						{input.value}
						<EditIcon<StateData>
							icon={Icon.pencil}
							stateFunction={setInput}
							state={{
								change: false,
								value: input.value,
							}}
						/>
					</Account>
				</>
			) : (
				<>
					<EditAccount
						type="text"
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
