import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Check, PencilAlt, Times } from '@styled-icons/fa-solid'

import { FormText } from 'components/Form'
import { FormItemFullWidth } from 'components/Form/styled'
import { useUser } from 'components/User'

import { Edit, List, PlaceholderText } from '../../styled'

type SocialNetworkProps = {
	index: number
	socialNetwork?: string
}

type FormData = {
	textField?: string
}

const SocialNetwork: React.FC<SocialNetworkProps> = ({
	socialNetwork,
	index,
}) => {
	const [isEditing, setIsEditing] = useState(false)

	const { profile, updateProfile } = useUser()

	const { errors, register, handleSubmit } = useForm<FormData>()

	const editSocialNetwork = useCallback(
		(updatedSocialNetwork: string) => {
			if (!profile) {
				return
			}

			const socialNetworks = profile.socialNetworks.map(
				(currentSocialNetwork, currentIndex) =>
					currentIndex === index
						? updatedSocialNetwork
						: currentSocialNetwork
			)

			updateProfile({ socialNetworks })
		},
		[profile, updateProfile]
	)

	const removeSocialNetwork = useCallback(() => {
		if (!profile) {
			return
		}

		const socialNetworks = profile.socialNetworks.filter(
			(_, currentIndex) => currentIndex !== index
		)

		updateProfile({ socialNetworks })
	}, [profile, updateProfile])

	const onSubmit = useCallback(
		handleSubmit(({ textField: updatedSocialNetwork }) => {
			if (!updatedSocialNetwork) {
				return removeSocialNetwork()
			}

			setIsEditing(false)
			editSocialNetwork(updatedSocialNetwork)
		}),
		[handleSubmit, setIsEditing, removeSocialNetwork, editSocialNetwork]
	)

	return (
		<li>
			{isEditing ? (
				<form onSubmit={onSubmit}>
					<FormItemFullWidth>
						<FormText
							register={register}
							errors={errors}
							required={false}
							defaultValue={socialNetwork}
						/>
					</FormItemFullWidth>
					<Edit name="submit" type="submit">
						<Check />
					</Edit>
				</form>
			) : (
				<>
					<span>{socialNetwork}</span>
					<Edit onClick={() => setIsEditing(true)}>
						<PencilAlt />
					</Edit>
				</>
			)}
			<Edit onClick={() => removeSocialNetwork()}>
				<Times />
			</Edit>
		</li>
	)
}

type Props = {
	socialNetworks: string[]
}

const SocialNetworksList: React.FC<Props> = ({ socialNetworks }) =>
	socialNetworks.length ? (
		<List>
			{socialNetworks.map((socialNetwork, index) => (
				<SocialNetwork
					key={index}
					index={index}
					socialNetwork={socialNetwork}
				/>
			))}
		</List>
	) : (
		<PlaceholderText>
			Žádné sociální sítě nejsou k dispozici
		</PlaceholderText>
	)

export default SocialNetworksList
