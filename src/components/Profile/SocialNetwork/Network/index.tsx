import React, { useContext, useEffect, useState } from 'react'
import { Edit } from '../../styled'
import { ProfileContext } from '../../Context'
import { Check, PencilAlt, Times } from '@styled-icons/fa-solid'
import { Input } from '../../styled'

type Props = {
	address: string
	id: string
}

export const Network: React.FC<Props> = ({ address, id }) => {
	const { removeNetwork, editNetwork } = useContext(ProfileContext)
	const [element, setElement] = useState<boolean>(true)
	const [actualAddress, setActualAddress] = useState<string>('')

	useEffect(() => {
		setActualAddress(address)
	}, [address])

	return (
		<>
			{element ? (
				<li>
					<span>{actualAddress}</span>
					<Edit onClick={() => setElement(false)}>
						<PencilAlt />
					</Edit>
					<Edit onClick={() => removeNetwork(id)}>
						<Times />
					</Edit>
				</li>
			) : (
				<form
					onSubmit={() => {
						setElement(true)
						editNetwork(actualAddress, id)
					}}
				>
					<Input
						type="text"
						value={actualAddress}
						onChange={(e) => setActualAddress(e.target.value)}
					/>
					<Edit type="submit">
						<Check />
					</Edit>
					<Edit onClick={() => removeNetwork(id)}>
						<Times />
					</Edit>
				</form>
			)}
		</>
	)
}
