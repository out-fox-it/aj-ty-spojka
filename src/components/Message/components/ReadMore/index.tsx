import React from 'react'
import { ReadMoreStyled } from './styled'

type Props = {
	message: string
}

// TODO: Add functionality of "ReadMore" component
const ReadMore: React.FC<Props> = ({ message }) => (
	<ReadMoreStyled hidden={message.length <= 250}>
		[zbytek zprávy]
	</ReadMoreStyled>
)

export default ReadMore
