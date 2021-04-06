import React from 'react'
import { StyledParagraph, TitleH1 } from 'components/StyledText'
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
