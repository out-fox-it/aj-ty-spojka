import React from 'react'
import ButtonMatching from '../components/ButtonMatching'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const Matching: React.FC = () => (
	<>
		<NavBar login={true} />
		<ButtonMatching />
		<Footer />
	</>
)

export default Matching
