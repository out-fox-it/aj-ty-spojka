import React from 'react'
import { EmailAccount } from '../../styled'

type Props = {
	email: string
}

const Email: React.FC<Props> = ({ email }) => (
	<EmailAccount>{email}</EmailAccount>
)

export default Email
