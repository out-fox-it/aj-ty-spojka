import React from 'react'

import NavBar from '../components/NavBar'
import Page from '../components/Page'
import AuthorsCards from '../components/AuthorsCards'
import Footer from '../components/Footer'

const Authors: React.FC = () => {
	return (
		<>
			{/* TODO: This should be visible both before and after login! */}
			<NavBar login={false} />
			<Page>
				<AuthorsCards />
			</Page>
			<Footer />
		</>
	)
}

export default Authors
