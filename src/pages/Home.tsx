import React from 'react'

// Components
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const Home: React.FC = () => (
	<>
		<NavBar login={true} />
		<Footer />
	</>
)

export default Home
