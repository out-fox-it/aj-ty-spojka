import React from 'react'

import NavBar from '../components/NavBar'
import Page from '../components/Page'
import ContentHome from '../components/ContentHome'
import Footer from '../components/Footer'

const Home: React.FC = () => (
	<>
		<NavBar />
		<Page>
			<ContentHome />
		</Page>
		<Footer />
	</>
)

export default Home
