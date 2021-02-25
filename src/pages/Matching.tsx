import React from 'react'

// Components
import NavBar from '../components/NavBar'
import Page from '../components/Page'
import ButtonMatching from '../components/ButtonMatching'
import Footer from '../components/Footer'

const Matching: React.FC = () => (
	<>
		<NavBar login={true} />
		<Page>
			<ButtonMatching />
		</Page>
		<Footer />
	</>
)

export default Matching
