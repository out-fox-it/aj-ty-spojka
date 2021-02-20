import React, { useContext, useState } from 'react'
import { ProfileContext } from '../../Context'
import { ProfileButton, Input } from '../../styled'

export const NetworkForm: React.FC = () => {
	const { addNetwork } = useContext(ProfileContext)
	const [address, setAddress] = useState<string>('')

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault()
		addNetwork(address)
		setAddress('')
	}

	return (
		<form onSubmit={handleSubmit}>
			<Input
				type="text"
				placeholder="Vložte url adresu Vaší sociální sítě"
				onChange={(e) => setAddress(e.target.value)}
				value={address}
				required
			/>
			<ProfileButton
				type="submit"
				titleSmall="Přidat adresu"
			></ProfileButton>
		</form>
	)
}
