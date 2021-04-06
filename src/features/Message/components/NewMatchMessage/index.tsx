import React from 'react'
import {
	BreakLine,
	ButtonBox,
	MessageBox,
	MessageAvatar,
	MessageBody,
	MessageButton,
} from '../../styled'
import { MessageProps } from '../../types'
import ReadMore from '../ReadMore'

const NewMatchMessage: React.FC<MessageProps> = ({ message }) => (
	<>
		<MessageBox>
			{/* TODO: Add this avatar of last-message author */}
			<MessageAvatar />
			<MessageBody>
				{message}
				<ReadMore message={message} />
			</MessageBody>
			{/* TODO: Add button submit functionality */}
			<ButtonBox>
				<MessageButton name="submit" type="submit">
					PŘIJMOUT
				</MessageButton>
				<MessageButton name="submit" type="submit">
					ODMÍTNOUT
				</MessageButton>
			</ButtonBox>
		</MessageBox>
		<BreakLine />
	</>
)

export default NewMatchMessage
