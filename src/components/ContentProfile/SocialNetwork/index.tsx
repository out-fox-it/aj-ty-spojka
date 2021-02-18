import React from 'react'
import { SocialNetworkContextProvider } from './Context'
import { NetworkList } from './NetworkList'
import { NetworkForm } from './NetworkForm'

export const SocialNetwork: React.FC = () => {
	return (
			<SocialNetworkContextProvider>
				<NetworkForm />
				<NetworkList />
			</SocialNetworkContextProvider>
	)
}
