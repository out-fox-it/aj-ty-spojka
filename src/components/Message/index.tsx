import React from 'react'
import MatchMessage from './components/MatchMessage'
import { Wrapper } from './styled'

export enum MessageType {
	MATCH = 'MATCH',
	IGNORED = 'IGNORED',
	NEW_MATCH = 'NEW_MATCH',
	AWAITING_RESPONSE = 'AWAITING_RESPONSE',
}

export type MessageData = {
	type: MessageType
	content: string
}

type Props = {
	message: MessageData
}

const chooseMessageByType = (message: MessageData) => {
	switch (message.type) {
		case MessageType.MATCH:
			return <MatchMessage message={message.content} />
		case MessageType.IGNORED:
		case MessageType.NEW_MATCH:
		case MessageType.AWAITING_RESPONSE:
		default:
		// Invalid message type
	}
}

const Message: React.FC<Props> = ({ message }) => (
	<Wrapper>{chooseMessageByType(message)}</Wrapper>
)

export default Message
