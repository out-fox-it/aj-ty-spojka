import React from 'react'

import NavBar from '../components/NavBar'
import Page from '../components/Page'
import AuthorsCards from '../components/AuthorsCards'
import Footer from '../components/Footer'

const Authors: React.FC = () => (
	<>
		<NavBar />
		<Page>
			<AuthorsCards />
		</Page>
		<Footer />
	</>
)

export default Authors
