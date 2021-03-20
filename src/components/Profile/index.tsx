import React, { useEffect, useState } from 'react'
import { ProfileContextProvider } from './Context'
import { Name } from './Name'
import { SocialNetwork } from './SocialNetwork'
import { Email } from './Email'
import { ProfileButton, ProfileContent, ProfileHeader } from './styled'
import { AboutMe } from './AboutMe'
import { useHistory } from 'react-router'
import Avatar from '../Avatar'
import { Motto } from './Motto'
import SkillQueue from '../SkillQueue'
import { authentication, firestore } from '../../firebase'

type Props = {
	email: string
	picture?: string
}

type ProfileTypes = {
	nickname: string
	motto?: string
	about: string
	skills: string[]
	socialNetworks: string[]
}

const ContentProfile: React.FC<Props> = ({ email, picture }) => {
	const [profileData, setProfileData] = useState<Array<ProfileTypes>>([])

	useEffect(() => {
		firestore
			.collection('profiles')
			.get()
			.then((collectionSnapshot) => {
				const profileData: ProfileTypes[] = []

				collectionSnapshot.forEach((document) =>
					profileData.push(document.data() as ProfileTypes)
				)

				setProfileData(profileData)
			})
			.catch((error) =>
				console.error(
					'Firestore failed to deliver profileData collection:',
					error
				)
			)
	}, [])

	const history = useHistory()

	const signOut = async () => {
		await authentication.signOut()
		history.push('/home')
	}

	return (
		<ProfileContextProvider addresses={[]}>
			{profileData.map((data, index) => (
				<ProfileContent key={index}>
					<ProfileHeader>
						<Avatar picture={picture} />
						<Name fullName={data.nickname} />
						<Motto motto={data.motto} />
					</ProfileHeader>
					<Email email={email} />
					<AboutMe />
					<SkillQueue />
					<SocialNetwork />
					<ProfileButton titleSmall="Propojit" />
					<ProfileButton
						title="Odhlásit se"
						onClick={() => signOut()}
					/>
				</ProfileContent>
			))}
		</ProfileContextProvider>
	)
}

export default ContentProfile
