import styled from 'styled-components'
import { MediaQueries } from '../../themes'
import { StyledParagraph } from '../StyledText/StyledParagraph'

export const FooterText = styled(StyledParagraph)`
	text-align: center;

	@media (max-width: ${MediaQueries.Ipad}) {
		padding-bottom: 0.6em;
	}
`
