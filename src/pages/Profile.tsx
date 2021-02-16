import React, { useEffect, useState } from 'react'
import ContentProfile from '../components/ContentProfile'
import Footer from '../components/Footer'
import NavbarProfile from '../components/NavbarProfile'
import { getProfileData, RandomUser } from '../utils/getUserData'

const Profile: React.FC = () => {
	const [userData, setUserData] = useState<RandomUser | null>(null)

	useEffect(() => {
		getProfileData().then(setUserData)
	}, [])

	const picture = userData?.picture?.large ?? ''

	const title = userData?.name?.title ?? ''
	const first = userData?.name?.first ?? ''
	const last = userData?.name?.last ?? ''
	const fullName = `${title} ${first} ${last}`

	return (
		<>
			<NavbarProfile picture={picture} fullName={fullName} />
			<ContentProfile />
			<Footer />
		</>
	)
}

export default Profile
