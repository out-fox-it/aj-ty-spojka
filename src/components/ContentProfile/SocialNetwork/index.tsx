import React, { useState } from 'react'
import { Account, EditAccount, HiddenIcon } from './styled'
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

	const [hidden, setHidden] = useState<boolean>(false)

	return (
		<>
			<HiddenIcon hidden={hidden}>
				{input.change ? (
					<>
						<Account>
							{input.value}
							<EditIcon<StateData>
								icon={Icon.edit}
								stateFunction={setInput}
								state={{
									change: false,
									value: input.value,
								}}
							/>
							<EditIcon<boolean>
								icon={Icon.delete}
								stateFunction={setHidden}
								state={true}
							/>
						</Account>
					</>
				) : (
					<>
						<EditAccount
							type="text"
							value={input.value}
							placeholder='Zadej url adresu tvé sociální sítě'
							onChange={(e) =>
								setInput({
									change: false,
									value: e.target.value,
								})
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
						<EditIcon<boolean>
								icon={Icon.delete}
								stateFunction={setHidden}
								state={true}
							/>
					</>
				)}
			</HiddenIcon>
		</>
	)
}
