import React from 'react'
import ButtonMatching from '../components/ButtonMatching'
import NavBar from '../components/NavBar'

const Matching: React.FC = () => (
	<>
		<NavBar login={true} />
		<ButtonMatching />
	</>
)

export default Matching
