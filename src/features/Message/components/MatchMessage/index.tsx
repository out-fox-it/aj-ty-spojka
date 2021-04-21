import React from 'react'
import Avatar from 'components/Avatar'

import {
	BreakLine,
	MessageBox,
	MessageAvatar,
	MessageBody,
	MessageButton,
	ButtonBox,
} from '../../styled'
import { MessageProps } from '../../types'
import ReadMore from '../ReadMore'

const MatchMessage: React.FC<MessageProps> = ({ message }) => (
	<>
		<MessageBox>
			<MessageAvatar>
				<Avatar picture="" />
			</MessageAvatar>
			<MessageBody>
				{message}
				<ReadMore message={message} />
			</MessageBody>
			{/* TODO: Add button submit functionality */}
			<ButtonBox>
				<MessageButton name="submit" type="submit">
					ODPOVĚDĚT
				</MessageButton>
			</ButtonBox>
		</MessageBox>
		<BreakLine />
	</>
)

export default MatchMessage
