import React from 'react'

// Components
import NavBar from '../components/NavBar'
import ContentHome from '../components/ContentHome'
import Footer from '../components/Footer'

const Home: React.FC = () => (
	<>
		<NavBar login={true} />
		<ContentHome />
		<Footer />
	</>
)

export default Home
