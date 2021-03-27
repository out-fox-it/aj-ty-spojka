import React from 'react'
import { ReadMoreStyled } from './styled'

// TODO: Add functionality of "ReadMore" component
const ReadMore: React.FC<{ message: string }> = ({ message }) => (
	<ReadMoreStyled hidden={message.length <= 250}>
		[zbytek zprávy]
	</ReadMoreStyled>
)

export default ReadMore
