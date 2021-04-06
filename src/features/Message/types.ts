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

export type MessageProps = {
	message: string
}
