import React, { useEffect, useState } from 'react'
import { ContentProfile } from '../components/ContentProfile'
import { NavbarProfile } from '../components/NavbarProfile'
import { getProfileData, RandomUser } from '../utils/getUserData'

const Profile: React.FC = () => {
	const [userData, setUserdata] = useState<RandomUser>()

	useEffect(() => {
		const fetchData = async () => {
			setUserdata(await getProfileData())
		}
		fetchData()
	}, [])

	return (
		<>
			<NavbarProfile
				picture={userData?.picture.large}
				fullName={`${userData?.name.title ?? ''} ${
					userData?.name.first ?? ''
				} ${userData?.name.last ?? ''}`}
			/>
			<ContentProfile />
		</>
	)
}

export default Profile
