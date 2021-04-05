import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import FormText from '../../../../../../components/Form/components/FormText'
import { FormItemFullWidth } from '../../../../../../components/Form/styled'
import { ProfileContext } from '../../../Context'
import { ProfileButton } from '../../../../styled'

const NetworkForm: React.FC = () => {
	const { addNetwork } = useContext(ProfileContext)

	const [address, setAddress] = useState<string>()

	const { errors, register, handleSubmit } = useForm<FormData>()

	const submit = () => {
		if (address?.replace(/\s/g, '') !== '') {
			addNetwork(address)
			setAddress('')
		}
	}

	const changeAddress = (address?: string) => setAddress(address)

	return (
		<form onSubmit={handleSubmit(submit)}>
			<FormItemFullWidth>
				<FormText
					register={register}
					errors={errors}
					required={false}
					placeholder="Vložte url adresu Vaší sociální sítě"
					change={changeAddress}
					value={address}
				/>
			</FormItemFullWidth>
			<ProfileButton
				name="submit"
				type="submit"
				titleSmall="Přidat adresu"
			></ProfileButton>
		</form>
	)
}

export default NetworkForm
