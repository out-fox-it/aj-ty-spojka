import React from 'react'

import NavBar from '../components/NavBar'
import Page from '../components/Page'
import ContentProfile from '../components/Profile'
import Footer from '../components/Footer'
import { useUser } from '../components/User'

const Profile: React.FC = () => {
	const { user } = useUser()

	const fullName = user?.displayName ?? ''
	const email = user?.email ?? ''

	// TODO: add the motto to the database
	const motto = ''

	const photo = ''

	return (
		<>
			<NavBar />
			<Page>
				<ContentProfile
					fullName={fullName}
					email={email}
					motto={motto}
					picture={photo}
				/>
			</Page>
			<Footer />
		</>
	)
}

export default Profile
