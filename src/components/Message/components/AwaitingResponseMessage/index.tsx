import React from 'react'
import {
	BreakLine,
	MessageBox,
	MessageAvatar,
	MessageBody,
	MessageButton,
	ButtonBox,
} from '../../styled'
import ReadMore from '../ReadMore'

type Props = {
	message: string
}

const AwaitingResponseMessage: React.FC<Props> = ({ message }) => (
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
					SMAZAT
				</MessageButton>
			</ButtonBox>
		</MessageBox>
		<BreakLine />
	</>
)

export default AwaitingResponseMessage
