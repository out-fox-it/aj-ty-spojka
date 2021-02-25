import React, { useEffect, useState } from 'react'
import { getProfileData, RandomUser } from '../utils/getUserData'

// Components
import NavBar from '../components/NavBar'
import Page from '../components/Page'
import ContentProfile from '../components/Profile'
import Footer from '../components/Footer'

const Profile: React.FC = () => {
	const [userData, setUserData] = useState<RandomUser | null>(null)

	useEffect(() => {
		getProfileData().then(setUserData)
	}, [])

	const title = userData?.name?.title ?? ''
	const first = userData?.name?.first ?? ''
	const last = userData?.name?.last ?? ''
	const fullName = `${title} ${first} ${last}`

	const email = userData?.email ?? ''

	return (
		<>
			<NavBar login={true} />
			<Page>
				<ContentProfile fullName={fullName} email={email} />
			</Page>
			<Footer />
		</>
	)
}

export default Profile
