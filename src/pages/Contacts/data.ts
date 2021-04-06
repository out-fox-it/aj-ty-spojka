import { MessageData, MessageType } from 'features/Message/types'

// TODO: Discard fakeMessages when our own API is ready
export const fakeMessages: MessageData[] = [
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
