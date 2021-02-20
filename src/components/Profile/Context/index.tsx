import React, { createContext, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'

type Props = {
	addresses: NetworkType[]
}

type NetworkType = {
	address: string
	id: string
}

type ContexType = {
	network: NetworkType[]
	addNetwork: (text: string) => void
	removeNetwork: (id: string) => void
	editNetwork: (text: string, id: string) => void
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

export const ProfileContextProvider: React.FC<Props> = ({
	addresses,
	children,
}) => {
	const [network, setNetwork] = useState<NetworkType[]>([])

	const addNetwork = (text: string) => {
		setNetwork([...network, { address: text, id: uuid() }])
	}

	const removeNetwork = (id: string) => {
		setNetwork(network.filter((item) => item.id !== id))
	}

	const editNetwork = (text: string, id: string) => {
		const newNetwork = network.map((item) =>
			item.id === id ? { address: text, id } : item
		)
		setNetwork(newNetwork)
	}

	useEffect(() => {
		setNetwork(addresses)
	}, [addresses])

	return (
		<ProfileContext.Provider
			value={{
				network,
				addNetwork,
				removeNetwork,
				editNetwork,
			}}
		>
			{children}
		</ProfileContext.Provider>
	)
}
