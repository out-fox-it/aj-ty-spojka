import React from 'react'

import NavBar from '../components/NavBar'
import Page from '../components/Page'
import ContentProfile from '../components/Profile'
import Footer from '../components/Footer'
import { useUser } from '../components/User'

const Profile: React.FC = () => {
	const { user } = useUser()

	const email = user?.email ?? ''

	const photo = ''

	return (
		<>
			<NavBar />
			<Page>
				<ContentProfile email={email} picture={photo} />
			</Page>
			<Footer />
		</>
	)
}

export default Profile
