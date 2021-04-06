import React from 'react'
import AwaitingResponseMessage from './components/AwaitingResponseMessage'
import IgnoredMessage from './components/IgnoredMessage'
import MatchMessage from './components/MatchMessage'
import NewMatchMessage from './components/NewMatchMessage'
import { MessageType, MessageData } from './types'

type Props = {
	message: MessageData
}

const Message: React.FC<Props> = ({ message }) => {
	const messageTypes = {
		[MessageType.NEW_MATCH]: <NewMatchMessage message={message.content} />,
		[MessageType.MATCH]: <MatchMessage message={message.content} />,
		[MessageType.AWAITING_RESPONSE]: (
			<AwaitingResponseMessage message={message.content} />
		),
		[MessageType.IGNORED]: <IgnoredMessage message={message.content} />,
	}

	return messageTypes[message.type]
}

export default Message
