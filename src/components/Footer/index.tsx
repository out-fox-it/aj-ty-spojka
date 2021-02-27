import React from 'react'
import { StyledLink } from '../StyledText/StyledLink'
import { Wrapper, FooterText } from './styled'

const Footer: React.FC = () => (
	<Wrapper>
		<FooterText>
			© 2021 | <StyledLink to="/authors">AUTOŘI</StyledLink>
		</FooterText>
	</Wrapper>
)

export default Footer
