import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'

import { authentication, firestore } from 'services/firebase'

import Avatar from 'components/Avatar'
import Footer from 'components/Footer'
import NavBar from 'components/NavBar'
import Page from 'components/Page'
import SkillQueue from 'components/SkillQueue'
import { useUser } from 'components/User'

import ProfileContextProvider from './components/Context'
import Name from './components/Name'
import SocialNetwork from './components/SocialNetwork'
import Email from './components/Email'
import AboutMe from './components/AboutMe'
import Motto from './components/Motto'

import { ProfileButton, ProfileContent, ProfileHeader } from './styled'
import { ProfileType } from './types'

const Profile: React.FC = () => {
	const [profileData, setProfileData] = useState<ProfileType | null>(null)
	const { user } = useUser()

	// TODO: Add avatar later
	const photo = ''

	useEffect(() => {
		if (user) {
			firestore
				.collection('profiles')
				.doc(user.uid)
				.get()
				.then((documentSnapshot) => {
					setProfileData(documentSnapshot.data() as ProfileType)
				})
				.catch((error) =>
					console.error(
						'Firestore failed to deliver profileData collection:',
						error
					)
				)
		}
	}, [user])

	const history = useHistory()

	const signOut = async () => {
		await authentication.signOut()
		history.push('/home')
	}

	return (
		<>
			<NavBar />
			<Page>
				{profileData && (
					<ProfileContextProvider
						addresses={profileData.socialNetworks ?? []}
					>
						<ProfileContent>
							<ProfileHeader>
								<Avatar picture={photo} />
								<Name fullName={profileData.nickname} />
								<Motto motto={profileData.motto} />
							</ProfileHeader>
							<Email email={user?.email ?? ''} />
							<AboutMe aboutMe={profileData.about} />
							<SkillQueue />
							<SocialNetwork />
							<ProfileButton titleSmall="Propojit" />
							<ProfileButton
								title="Odhlásit se"
								onClick={() => signOut()}
							/>
						</ProfileContent>
					</ProfileContextProvider>
				)}
			</Page>
			<Footer />
		</>
	)
}

export default Profile
