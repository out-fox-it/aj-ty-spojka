import React, { createContext, useState } from 'react'
import { uuid } from 'uuidv4'

type NetworkType = {
	address: string
	id: string
}

type ContexType = {
	network: NetworkType[]
	addNetwork: (text: string) => void
	removeNetwork: (id: string) => void
	findNetwork: (id: string) => void
	editNetwork: (text: string, id: string) => void
	editItem: NetworkType | null
}

export const SocialNetworkContext = createContext<ContexType>({
	network: [],
	addNetwork: () => {
		return
	},
	removeNetwork: () => {
		return
	},
	findNetwork: () => {
		return
	},
	editNetwork: () => {
		return
	},
	editItem: {
		address: '',
		id: '',
	},
})

export const SocialNetworkContextProvider: React.FC = (props) => {
	const [network, setNetwork] = useState<NetworkType[]>([])

	const [editItem, setEditItem] = useState<NetworkType | null>(null)

	const addNetwork = (text: string) => {
		setNetwork([...network, { address: text, id: uuid() }])
	}

	const removeNetwork = (id: string) => {
		setNetwork(network.filter((item) => item.id !== id))
	}

	const findNetwork = (id: string) => {
		const item = network.find((item) => item.id === id)
		setEditItem(item || null)
	}

	const editNetwork = (text: string, id: string) => {
		const newNetwork = network.map((item) =>
			item.id === id ? { address: text, id: uuid() } : item
		)
		setNetwork(newNetwork)
		setEditItem(null)
	}

	return (
		<SocialNetworkContext.Provider
			value={{
				network,
				addNetwork,
				removeNetwork,
				findNetwork,
				editNetwork,
				editItem,
			}}
		>
			{props.children}
		</SocialNetworkContext.Provider>
	)
}
