import React from 'react'
import {
	BreakLine,
	MessageBox,
	MessageAvatar,
	MessageBody,
	MessageButton,
} from '../../styled'
import ReadMore from '../ReadMore'

type Props = {
	message: string
}

const AwaitingResponseMessage: React.FC<Props> = ({ message }) => (
	<>
		<MessageBox>
			<MessageAvatar />
			<MessageBody>
				{message}
				<ReadMore message={message} />
			</MessageBody>
			<MessageButton />
		</MessageBox>
		<BreakLine />
	</>
)

export default AwaitingResponseMessage
