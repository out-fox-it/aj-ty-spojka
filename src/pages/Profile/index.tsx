import React from 'react'
import { useHistory } from 'react-router'

import { authentication } from 'services/firebase'

import Avatar from 'components/Avatar'
import Footer from 'components/Footer'
import NavBar from 'components/NavBar'
import Page from 'components/Page'
import SkillQueue from 'components/SkillQueue'
import { useUser } from 'components/User'

import AboutMe from './components/AboutMe'
import Email from './components/Email'
import Motto from './components/Motto'
import Nickname from './components/Nickname'
import SocialNetworkForm from './components/SocialNetworkForm'
import SocialNetworksList from './components/SocialNetworksList'

import { ProfileButton, ProfileContent, ProfileHeader, Title } from './styled'

const Profile: React.FC = () => {
	const { user, profile } = useUser()

	// TODO: Add avatar later
	const photo = ''

	const history = useHistory()

	const signOut = async () => {
		await authentication.signOut()
		history.push('/home')
	}

	return (
		<>
			<NavBar />
			<Page>
				{user && profile && (
					<ProfileContent>
						<ProfileHeader>
							<Avatar picture={photo} />
							<Nickname nickname={profile.nickname} />
							<Motto motto={profile.motto} />
						</ProfileHeader>
						<Email email={user.email} />
						<AboutMe aboutMe={profile.about} />
						<SkillQueue />
						<Title>Kde mě najdeš</Title>
						<SocialNetworkForm />
						<SocialNetworksList
							socialNetworks={profile.socialNetworks}
						/>
						<ProfileButton titleSmall="Propojit" />
						<ProfileButton
							title="Odhlásit se"
							onClick={() => signOut()}
						/>
					</ProfileContent>
				)}
			</Page>
			<Footer />
		</>
	)
}

export default Profile
