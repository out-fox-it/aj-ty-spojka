import React from 'react'
import { RegistrationMessage } from './styled'

const SubmitMessage: React.FC = () => (
	<RegistrationMessage>
		<h2>Registrace byla úspěšná!</h2>
		<p>Po potvrzení e-mailu si můžete začít hledat nové kamarády. :)</p>
	</RegistrationMessage>
)

export default SubmitMessage
