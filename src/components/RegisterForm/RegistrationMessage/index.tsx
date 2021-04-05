import React from 'react'

import { StyledParagraph } from 'components/StyledText/StyledParagraph'
import { TitleH1 } from 'components/StyledText/StyledTitle'

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
