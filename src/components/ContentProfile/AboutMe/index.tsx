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
								<EditDescription
									value={input.value}
									placeholder='Zde můžeš napsat něco o sobě . . .'
									onChange={(e) =>
										setInput({ change: true, value: e.target.value })
									}
								/>
								<EditIcon<StateData>
									icon={Icon.save}
									stateFunction={setInput}
									state={{
										change: false,
										value: input.value,
									}}
								/>
							</>
			) : (
				<>
					<Description>
						{input.value}
						<EditIcon<StateData>
							icon={Icon.edit}
							stateFunction={setInput}
							state={{
								change: true,
								value: input.value,
							}}
						/>
					</Description>
				</>
			)}
		</>
	)
}
