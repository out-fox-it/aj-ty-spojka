import React from 'react'
import { StyledLink } from '../StyledText/StyledLink'
import { FooterText } from './styled'

const Footer: React.FC = () => (
	<FooterText>
		© 2021 | <StyledLink to="/authors">AUTOŘI</StyledLink>
	</FooterText>
)

export default Footer
