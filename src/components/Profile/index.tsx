import React from 'react'
import { ProfileContextProvider } from './Context'
import { Name } from './Name'
import { SocialNetwork } from './SocialNetwork'
import { Email } from './Email'
import { ProfileButton, ProfileContent, ProfileHeader } from './styled'
import { AboutMe } from './AboutMe'
import { useHistory } from 'react-router'
import { authentication } from '../../firebase'
import Avatar from '../Avatar'
import { Motto } from './Motto'
import SkillQueue from '../SkillQueue'

type Props = {
	fullName: string
	email: string
	motto?: string
	picture?: string
}

const ContentProfile: React.FC<Props> = ({
	fullName,
	email,
	motto,
	picture,
}) => {
	const history = useHistory()

	const signOut = async () => {
		await authentication.signOut()
		history.push('/home')
	}

	return (
		<ProfileContextProvider addresses={[]}>
			<ProfileContent>
				<ProfileHeader>
					<Avatar picture={picture} />
					<Name fullName={fullName} />
					<Motto motto={motto} />
				</ProfileHeader>
				<Email email={email} />
				<AboutMe />
				<SocialNetwork />
				<SkillQueue />
				<ProfileButton titleSmall="Propojit" />
				<ProfileButton title="Odhlásit se" onClick={() => signOut()} />
			</ProfileContent>
		</ProfileContextProvider>
	)
}

export default ContentProfile
