import React from 'react'

// Components
import AuthorsCards from '../components/AuthorsCards'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const Authors: React.FC = () => {
	return (
		<>
			{/* TODO: This should be visible both before and after login! */}
			<NavBar login={false} />
			<AuthorsCards />
			<Footer />
		</>
	)
}

export default Authors
