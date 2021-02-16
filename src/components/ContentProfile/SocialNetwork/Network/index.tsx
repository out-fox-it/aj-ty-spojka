import React, { useContext } from 'react'
import { SocialNetworkContext } from '../Context'
import { ListItem, NetworkText, ButtonNetwork } from './styled'

type Props = {
	address: string
	id: string
}

export const Network: React.FC<Props> = ({ address, id }) => {
	const { removeNetwork, findNetwork } = useContext(SocialNetworkContext)
	return (
		<>
			<ListItem>
				<NetworkText>{address}</NetworkText>
				<ButtonNetwork onClick={() => removeNetwork(id)}>
					delete
				</ButtonNetwork>
				<ButtonNetwork onClick={() => findNetwork(id)}>
					upravit
				</ButtonNetwork>
			</ListItem>
		</>
	)
}
