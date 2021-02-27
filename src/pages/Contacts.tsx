import React from 'react'
import Message, { MessageData, MessageType } from '../components/Message'
import { MessageBoxBorder, MessageBoxTitle } from '../components/Message/styled'

// Components
import NavBar from '../components/NavBar'
import Page from '../components/Page'
import Footer from '../components/Footer'
import { TitleH1 } from '../components/StyledText/StyledTitle'

// TODO: Discard fakeMessages when our own API is ready
const fakeMessages: MessageData[] = [
	{
		content:
			'M1: To create a circle, use the border-radius property and se valu o 50%.Then combine the height and width properties with a matching value:',
		type: MessageType.NEW_MATCH,
	},
	{
		content:
			'M1: To create a circle, use the border-radius property and se valu o 50%.Then combine the height and width properties with a matching value:',
		type: MessageType.MATCH,
	},
	{
		content:
			'M2: To create a circle, use the border-radius property and se valu o 50%.Then combine the height and width properties with a matching value:M2: To create a circle, use the border-radius property and se valu o 50%.Then combine the height and width properties with a matching value:',
		type: MessageType.MATCH,
	},
	{
		content:
			'M3: Like any other social media site Facebook has length requirements when it comes to writing on the wall, providing status, messaging and commenting. Understanding how many characters you can use, enables you to more effectively use Facebook as a busi.',
		type: MessageType.MATCH,
	},
	{
		content:
			'M4: To create a circle, use the border-radius property and se valu o 50%.Then combine the height and width properties with a matching value:',
		type: MessageType.MATCH,
	},
	{
		content:
			'M2: To create a circle, use the border-radius property and se valu o 50%.Then combine the height and width properties with a matching value:M2: To create a circle, use the border-radius property and se valu o 50%.Then combine the height and width properties with a matching value:',
		type: MessageType.IGNORED,
	},
	{
		content:
			'M3: Like any other social media site Facebook has length requirements when it comes to writing on the wall, providing status, messaging and commenting. Understanding how many characters you can use, enables you to more effectively use Facebook as a busi.',
		type: MessageType.IGNORED,
	},
	{
		content:
			'M1: To create a circle, use the border-radius property and se valu o 50%.Then combine the height and width properties with a matching value:',
		type: MessageType.AWAITING_RESPONSE,
	},
	{
		content:
			'M1: To create a circle, use the border-radius property and se valu o 50%.Then combine the height and width properties with a matching value:',
		type: MessageType.AWAITING_RESPONSE,
	},
]

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

const Contacts: React.FC = () => {
	const messagesGroups = groupMessagesByType(fakeMessages)

	return (
		<>
			<NavBar login={true} />
			<Page>
				{/* TODO: Add message in case of no messages in any cathegory */}
				{/* TODO: Handle new/unread messages style and notifications */}
				<TitleH1 changeColor="darkBlue">ZPRÁVY A UPOZORNĚNÍ</TitleH1>
				{Object.entries(messagesGroups).map(([type, messages]) => (
					<MessageBoxBorder key={type} hidden={messages.length === 0}>
						<MessageBoxTitle>
							{messageTypeTitles[type as MessageType]}
						</MessageBoxTitle>
						{messages.map((message, index) => (
							<Message
								key={`${type}_${index}`}
								message={message}
							/>
						))}
					</MessageBoxBorder>
				))}
			</Page>
			<Footer />
		</>
	)
}

export default Contacts
