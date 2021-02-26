import React from 'react'

// Components
import NavBar from '../components/NavBar'
import Page from '../components/Page'
import ButtonMatching from '../components/ButtonMatching'
import Footer from '../components/Footer'

import { TitleH1 } from '../components/Title'

const Matching: React.FC = () => (
	<>
		<NavBar login={true} />
		<Page>
			<TitleH1>MATCHING</TitleH1>
			<ButtonMatching />
		</Page>
		<Footer />
	</>
)

export default Matching
