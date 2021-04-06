import React from 'react'

import Footer from 'components/Footer'
import NavBar from 'components/NavBar'
import Page from 'components/Page'
import { TitleH1 } from 'components/StyledText'

import Message from 'features/Message'
import { MessageData, MessageType } from 'features/Message/types'
import { MessageBoxBorder, MessageBoxTitle } from 'features/Message/styled'

import { fakeMessages } from './data'

const groupMessagesByType = (
	messages: MessageData[]
): Record<MessageType, MessageData[]> =>
	messages.reduce(
		(previousGroupMessages, currentMessage) => {
			return {
				...previousGroupMessages,
				[currentMessage.type]: [
					...previousGroupMessages[currentMessage.type],
					currentMessage,
				],
			}
		},
		{
			[MessageType.NEW_MATCH]: [],
			[MessageType.MATCH]: [],
			[MessageType.AWAITING_RESPONSE]: [],
			[MessageType.IGNORED]: [],
		}
	)

const messageTypeTitles = {
	[MessageType.NEW_MATCH]: 'Nové žádosti o spojení',
	[MessageType.MATCH]: 'Přátelé',
	[MessageType.AWAITING_RESPONSE]: 'Odeslané žádosti o spojení',
	[MessageType.IGNORED]: 'Odmítnuté žádosti o spojení',
}

const Messages: React.FC = () => {
	const messagesGroups = groupMessagesByType(fakeMessages)

	return (
		<>
			{/* TODO: Add message in case of no messages in any category */}
			{Object.entries(messagesGroups).map(([type, messages]) => (
				<MessageBoxBorder key={type} hidden={messages.length === 0}>
					<MessageBoxTitle>
						{messageTypeTitles[type as MessageType]}
					</MessageBoxTitle>
					{messages.map((message, index) => (
						<Message key={`${type}_${index}`} message={message} />
					))}
				</MessageBoxBorder>
			))}
		</>
	)
}

const Contacts: React.FC = () => (
	<>
		<NavBar />
		<Page>
			<TitleH1 color="darkBlue">ZPRÁVY A UPOZORNĚNÍ</TitleH1>
			{/* TODO: Handle new/unread messages style and notifications */}
			<Messages />
		</Page>
		<Footer />
	</>
)

export default Contacts
