import React from 'react'

import { Title } from '../../styled'

import NetworkForm from './components/NetworkForm'
import NetworkList from './components/NetworkList'

const SocialNetwork: React.FC = () => (
	<>
		<Title>Kde mě najdeš</Title>
		<NetworkForm />
		<NetworkList />
	</>
)

export default SocialNetwork
