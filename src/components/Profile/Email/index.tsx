import React from 'react'
import { EmailAccount } from '../styled'

type Props = {
	email: string
}

export const Email: React.FC<Props> = ({ email }) => (
	<EmailAccount>{email}</EmailAccount>
)
