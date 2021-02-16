import React from 'react'
import { Wrapper, FooterText, FooterLink } from './styled'

const Footer: React.FC = () => (
	<Wrapper>
		<FooterText>
			© 2021 | <FooterLink to="/authors">AUTOŘI</FooterLink>
		</FooterText>
	</Wrapper>
)

export default Footer
