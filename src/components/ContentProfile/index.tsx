import React from 'react'
import { AboutMe } from './AboutMe'
import { Name } from './Name'
import { Email } from './Email'
import { SocialNetwork } from './SocialNetwork'
import { Title, Center, StyledButton, Space, Wrapper } from './styled'

interface Props {
	fullName: string
	email: string
}

const ContentProfile: React.FC<Props> = ({ fullName, email }) => {
	return (
		<Wrapper>
			<Center>
				<Name fullName={fullName} />
				<Email email={email} />
				<Space />
				<Title>Něco o mně</Title>
				<AboutMe />
				<Space />
				<Title>Kde mě najdeš</Title>
				<SocialNetwork />
				<StyledButton titleSmall="Přidat sociální síť" />
				<Space />
				<StyledButton titleSmall="Přidat do kontaktů" />
				<Space />
				<StyledButton title="Odhlásit se" />
				<Space />
			</Center>
		</Wrapper>
	)
}

export default ContentProfile
