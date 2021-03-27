import React, { useEffect, useState } from 'react'
import ProfileContextProvider, { NetworkType } from './Context'
import Name from './Name'
import SocialNetwork from './SocialNetwork'
import Email from './Email'
import { ProfileButton, ProfileContent, ProfileHeader } from './styled'
import AboutMe from './AboutMe'
import { useHistory } from 'react-router'
import Avatar from '../Avatar'
import Motto from './Motto'
import SkillQueue from '../SkillQueue'
import { authentication, firestore } from '../../firebase'
import { useUser } from '../User'

type ProfileType = {
	nickname: string
	motto?: string
	about: string
	skills: string[]
	socialNetworks: NetworkType[]
}

const ContentProfile: React.FC = () => {
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
		</>
	)
}

export default ContentProfile
