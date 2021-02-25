import React from 'react'
import { ProfileContextProvider } from './Context'
import { Name } from './Name'
import { SocialNetwork } from './SocialNetwork'
import { Email } from './Email'
import { ProfileButton, ProfileContent } from './styled'
import { AboutMe } from './AboutMe'

type Props = {
	fullName: string
	email: string
}

const ContentProfile: React.FC<Props> = ({ fullName, email }) => (
	<ProfileContextProvider addresses={[]}>
		<ProfileContent>
			<Name fullName={fullName} />
			<Email email={email} />
			<AboutMe />
			<SocialNetwork />
			<ProfileButton titleSmall="Propojit" />
			<ProfileButton title="Odhlásit se" />
		</ProfileContent>
	</ProfileContextProvider>
)

export default ContentProfile
