import React, { createContext, useCallback, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'

import { firestore } from 'services/firebase'

import { useUser } from 'components/User'

export type NetworkType = {
	address?: string
	id: string
}

type Props = {
	addresses: NetworkType[]
}

type ContexType = {
	network: NetworkType[]
	addNetwork: (text?: string) => void
	removeNetwork: (id: string) => void
	editNetwork: (id: string, text?: string) => void
}

export const ProfileContext = createContext<ContexType>({
	network: [],
	addNetwork: () => {
		return
	},
	removeNetwork: () => {
		return
	},
	editNetwork: () => {
		return
	},
})

const ProfileContextProvider: React.FC<Props> = ({ addresses, children }) => {
	const [networks, setNetworks] = useState<NetworkType[]>([])

	const { user } = useUser()

	const updateUserNetwork = useCallback(
		(socialNetworks: NetworkType[]): void => {
			if (user) {
				firestore
					.collection('profiles')
					.doc(user.uid)
					.update({ socialNetworks })
					.catch((error) =>
						console.error(
							'Firestore failed to deliver profileData collection:',
							error
						)
					)
			}
		},
		[user]
	)

	const addNetwork = (text?: string) => {
		const newNetwork = [...networks, { address: text, id: uuid() }]
		setNetworks(newNetwork)
		updateUserNetwork(newNetwork)
	}

	const removeNetwork = (id: string) => {
		const newNetwork = networks.filter((network) => network.id !== id)
		setNetworks(newNetwork)
		updateUserNetwork(newNetwork)
	}

	const editNetwork = (id: string, text?: string) => {
		const newNetwork = networks.map((network) =>
			network.id === id ? { address: text, id } : network
		)
		setNetworks(newNetwork)
		updateUserNetwork(newNetwork)
	}

	useEffect(() => {
		setNetworks(addresses)
	}, [addresses])

	return (
		<ProfileContext.Provider
			value={{
				network: networks,
				addNetwork,
				removeNetwork,
				editNetwork,
			}}
		>
			{children}
		</ProfileContext.Provider>
	)
}

export default ProfileContextProvider
