import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'

import FormText from 'components/Form/components/FormText'
import { FormItemFullWidth } from 'components/Form/styled'
import { useUser } from 'components/User'

import { ProfileButton } from '../../styled'

type FormData = {
	textField?: string
}

const SocialNetworkForm: React.FC = () => {
	const { profile, updateProfile } = useUser()

	const { errors, register, handleSubmit, reset } = useForm<FormData>()

	const addSocialNetwork = useCallback(
		(socialNetwork: string) => {
			if (!profile) {
				return
			}

			const socialNetworks = [...profile.socialNetworks, socialNetwork]

			reset()
			updateProfile({ socialNetworks })
		},
		[profile, updateProfile]
	)

	const onSubmit = useCallback(
		handleSubmit(({ textField: socialNetwork }) => {
			if (!socialNetwork || socialNetwork?.replace(/\s/g, '') === '') {
				return
			}

			addSocialNetwork(socialNetwork)
		}),
		[handleSubmit, addSocialNetwork]
	)

	return (
		<form onSubmit={onSubmit}>
			<FormItemFullWidth>
				<FormText
					register={register}
					errors={errors}
					required={false}
					placeholder="Vložte url adresu Vaší sociální sítě"
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

export default SocialNetworkForm
