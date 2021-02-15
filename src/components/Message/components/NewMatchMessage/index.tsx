import React from 'react'
import {
	BreakLine,
	ButtonBox,
	MessageBox,
	MessageAvatar,
	MessageBody,
	MessageButton,
} from '../../styled'
import ReadMore from '../ReadMore'

type Props = {
	message: string
}

const NewMatchMessage: React.FC<Props> = ({ message }) => (
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
