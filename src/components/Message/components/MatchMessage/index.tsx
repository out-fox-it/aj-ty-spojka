import React from 'react'
import {
	MessageAvatar,
	MessageBody,
	MessageBox,
	MessageButton,
	ReadMore,
} from '../../styled'

type Props = {
	message: string
}

const MatchMessage: React.FC<Props> = ({ message }) => (
	<MessageBox>
		<MessageAvatar />
		<MessageBody>
			{message}
			<ReadMore hidden={message.length <= 250}>[zbytek zprávy]</ReadMore>
		</MessageBody>
		<MessageButton />
	</MessageBox>
)

export default MatchMessage
