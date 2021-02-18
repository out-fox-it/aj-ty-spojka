import React, { useContext } from 'react'
import { Edit } from '../../../EditIcon/styled'
import { SocialNetworkContext } from '../Context'
import { ListItem, NetworkText} from './styled'
import { PencilAlt } from '@styled-icons/fa-solid'
import { DeleteOutline } from '@styled-icons/material-outlined'

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
				<Edit onClick={() => removeNetwork(id)}><DeleteOutline /></Edit>
				<Edit onClick={() => findNetwork(id)}><PencilAlt /></Edit>
			</ListItem>
		</>
	)
}
