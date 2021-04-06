import React from 'react'

import { PasswordMessage, ValidPassword } from './styled'

type Props = {
	hidden: boolean
	hasLowerCase: boolean
	hasMinimumLength: boolean
	hasUpperCase: boolean
	hasNumber: boolean
}

const FormPasswordMessage: React.FC<Props> = ({
	hidden,
	hasLowerCase,
	hasMinimumLength,
	hasUpperCase,
	hasNumber,
}) => (
	<PasswordMessage hidden={hidden}>
		<ValidPassword validPassword={hasLowerCase}>malé písmeno</ValidPassword>
		<ValidPassword validPassword={hasMinimumLength}>
			více než 6 znaků
		</ValidPassword>
		<ValidPassword validPassword={hasUpperCase}>
			VELKÉ PÍSMENO
		</ValidPassword>
		<ValidPassword validPassword={hasNumber}>číslo</ValidPassword>
	</PasswordMessage>
)

export default FormPasswordMessage
