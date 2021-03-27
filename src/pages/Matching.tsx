import React from 'react'
import NavBar from '../components/NavBar'
import Page from '../components/Page'
import MatchingTabs from '../components/Matching'
import Footer from '../components/Footer'

import { TitleH1 } from '../components/StyledText/StyledTitle'

const Matching: React.FC = () => (
	<>
		<NavBar />
		<Page>
			<TitleH1>MATCHING</TitleH1>
			<MatchingTabs />
		</Page>
		<Footer />
	</>
)

export default Matching
