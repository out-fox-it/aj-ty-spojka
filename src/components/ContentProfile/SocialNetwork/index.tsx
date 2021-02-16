import React from 'react'
import { SocialNetworkContextProvider } from './Context'
import { NetworkList } from './NetworkList'
import { NetworkForm } from './NetworkForm'
import { Wrapper } from './styled'

export const SocialNetwork: React.FC = () => {
	return (
		<Wrapper>
			<SocialNetworkContextProvider>
				<NetworkForm />
				<NetworkList />
			</SocialNetworkContextProvider>
		</Wrapper>
	)
}
