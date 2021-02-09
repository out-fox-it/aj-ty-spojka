import React, { useEffect, useState } from 'react'
import ContentProfile from '../components/ContentProfile'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import { getProfileData, RandomUser } from '../utils/getUserData'

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
			<ContentProfile fullName={fullName} email={email} />
			<Footer />
		</>
	)
}

export default Profile
