import React from 'react'
import { StyledParagraph } from '../../StyledText/StyledParagraph'
import { TitleH1 } from '../../StyledText/StyledTitle'
import { RegistrationMessage } from './styled'

const SubmitMessage: React.FC = () => (
	<RegistrationMessage>
		<TitleH1>Registrace byla úspěšná!</TitleH1>
		<StyledParagraph>
			Po potvrzení e-mailu si můžete začít hledat nové kamarády. :)
		</StyledParagraph>
	</RegistrationMessage>
)

export default SubmitMessage
