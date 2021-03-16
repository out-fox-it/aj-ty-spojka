import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import FormText from '../../../Form/components/FormText'
import { ProfileContext } from '../../Context'
import { ProfileButton } from '../../styled'

export const NetworkForm: React.FC = () => {
	const { addNetwork } = useContext(ProfileContext)

	const [address, setAddress] = useState<string | undefined>()

	const { errors, register, handleSubmit } = useForm<FormData>()

	const submit = () => {
		addNetwork(address)
		setAddress('')
	}

	const changeAddress = (address: string | undefined) => setAddress(address)

	return (
		<form onSubmit={handleSubmit(submit)}>
			<FormText
				register={register}
				errors={errors}
				required={false}
				placeholder="Vložte url adresu Vaší sociální sítě"
				change={changeAddress}
				value={address}
			/>
			<ProfileButton
				name="submit"
				type="submit"
				titleSmall="Přidat adresu"
			></ProfileButton>
		</form>
	)
}
