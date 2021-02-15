import React from 'react'

// Message Components
import AwaitingResponseMessage from './components/AwaitingResponseMessage'
import IgnoredMessage from './components/IgnoredMessage'
import MatchMessage from './components/MatchMessage'
import NewMatchMessage from './components/NewMatchMessage'

export enum MessageType {
	NEW_MATCH = 'NEW_MATCH',
	MATCH = 'MATCH',
	AWAITING_RESPONSE = 'AWAITING_RESPONSE',
	IGNORED = 'IGNORED',
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
		case MessageType.NEW_MATCH:
			return <NewMatchMessage message={message.content} />
		case MessageType.MATCH:
			return <MatchMessage message={message.content} />
		case MessageType.AWAITING_RESPONSE:
			return <AwaitingResponseMessage message={message.content} />
		case MessageType.IGNORED:
			return <IgnoredMessage message={message.content} />
		default:
		// Invalid message type
	}
}

const Message: React.FC<Props> = ({ message }) => (
	<>{chooseMessageByType(message)}</>
)

export default Message
