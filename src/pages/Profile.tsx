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

	const motto =
		'Jedná se pouze o provizorní text kvůli správnému nastylování avatara. Editovatelné motto se zprovozní později stejně jako nějaké nastavení v db.'

	const photo = userData?.picture?.large ?? ''

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
