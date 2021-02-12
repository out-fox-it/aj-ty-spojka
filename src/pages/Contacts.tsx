import React from 'react'

// Components
import Message, { MessageData, MessageType } from '../components/Message'
import { MessageBoxTitle } from '../components/Message/styled'
import NavBar from '../components/NavBar'

const fakeMessages: MessageData[] = [
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
			'Like any other social media site Facebook has length requirements when it comes to writing on the wall, providing status, messaging and commenting. Understanding how many characters you can use, enables you to more effectively use Facebook as a busi.',
		type: MessageType.MATCH,
	},
]

const Contacts: React.FC = () => {
	return (
		<>
			<NavBar login={true} />
			<MessageBoxTitle>Titulek</MessageBoxTitle>
			{fakeMessages.map((message, index) => (
				<>
					<Message key={index} message={message} />
				</>
			))}
		</>
	)
}

export default Contacts
