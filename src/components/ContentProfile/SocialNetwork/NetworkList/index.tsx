import React, { useContext } from 'react'
import { SocialNetworkContext } from '../Context'
import { Network } from '../Network'
import { List, NoNetworks } from './styled'

export const NetworkList: React.FC = () => {
	const { network } = useContext(SocialNetworkContext)
	return (
		<>
			{network.length ? (
				<List>
					{network.map((item) => {
						return (
							<Network
								address={item.address}
								id={item.id}
								key={item.id}
							/>
						)
					})}
				</List>
			) : (
				<NoNetworks>Nemám žádné sociální sítě</NoNetworks>
			)}
		</>
	)
}
