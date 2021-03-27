import React from 'react'
import { Title } from '../styled'
import NetworkForm from './NetworkForm'
import NetworkList from './NetworkList'

const SocialNetwork: React.FC = () => (
	<>
		<Title>Kde mě najdeš</Title>
		<NetworkForm />
		<NetworkList />
	</>
)

export default SocialNetwork
