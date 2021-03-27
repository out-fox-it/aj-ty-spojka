import React, { useContext } from 'react'
import { ProfileContext } from '../../Context'
import { List, PlaceholderText } from '../../styled'
import Network from '../Network'

const NetworkList: React.FC = () => {
	const { network } = useContext(ProfileContext)

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
				<PlaceholderText>
					Žádné sociální sítě nejsou k dispozici
				</PlaceholderText>
			)}
		</>
	)
}

export default NetworkList
