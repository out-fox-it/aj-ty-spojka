import React from 'react'

import NavBar from '../components/NavBar'
import Page from '../components/Page'
import ContentProfile from '../components/Profile'
import Footer from '../components/Footer'

const Profile: React.FC = () => (
	<>
		<NavBar />
		<Page>
			<ContentProfile />
		</Page>
		<Footer />
	</>
)

export default Profile
