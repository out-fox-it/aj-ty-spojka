import React, { useContext, useState, useEffect } from 'react'
import { SocialNetworkContext } from '../Context'
import { Button, Form, Input } from './styled'

export const NetworkForm: React.FC = () => {
	const { addNetwork, editItem, editNetwork } = useContext(
		SocialNetworkContext
	)
	const [address, setAddress] = useState<string>('')

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setAddress(e.target.value)
	}

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault()
		if (!editItem) {
			addNetwork(address)
			setAddress('')
		} else {
			editNetwork(address, editItem.id)
		}
	}

	useEffect(() => {
		if (editItem) {
			setAddress(editItem.address)
		} else {
			setAddress('')
		}
	}, [editItem])

	return (
		<Form onSubmit={handleSubmit}>
			<Input
				type="text"
				placeholder="Vložte url adresu Vaší sociální sítě"
				onChange={handleChange}
				value={address}
				required
			/>
			<Button type="submit">
				{editItem ? 'Upravit' : 'Přidat adresu'}
			</Button>
		</Form>
	)
}
