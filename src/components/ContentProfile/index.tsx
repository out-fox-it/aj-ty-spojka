import React from 'react'
import {
	Title,
	Center,
	Name,
	SocialNetwork,
	TextArea,
	StyledButton,
	Space,
	Wrapper,
} from './styled'

interface Props {
	fullName: string
	email: string
}

const ContentProfile: React.FC<Props> = ({ fullName, email }) => (
	<Wrapper>
		<Center>
			<Name>{fullName}</Name>
			<SocialNetwork>{email}</SocialNetwork>
			<Space />
			<Title>Něco o mě</Title>
			<TextArea>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
				quam pariatur delectus eaque. Enim in adipisci quidem facere
				doloremque, ullam eum aperiam totam, quia eveniet vel vitae
				accusamus libero officiis. Lorem ipsum dolor sit, amet
				consectetur adipisicing elit. Asperiores eaque perspiciatis
				minus nesciunt dolor quaerat odit suscipit architecto qui
				dolorem, id provident sapiente molestiae impedit magnam adipisci
				nam illo blanditiis? Lorem ipsum dolor sit, amet consectetur
				adipisicing elit. Nulla magnam ducimus blanditiis nam, alias
				nobis non corporis necessitatibus quia saepe repudiandae
				distinctio recusandae perspiciatis sit quasi minus mollitia
				cumque facilis.
			</TextArea>
			<Space />
			<Title>Kde mě najdeš</Title>
			<SocialNetwork>www.seznam.cz</SocialNetwork>
			<SocialNetwork>www.facebook.com</SocialNetwork>
			<Space />
			<StyledButton title="Odhlásit se" />
			<Space />
		</Center>
	</Wrapper>
)

export default ContentProfile