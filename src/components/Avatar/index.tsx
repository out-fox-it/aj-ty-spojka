import React from 'react'
import { Picture, Icon } from './styled'

interface Props {
	picture?: string
	fullName?: string
}

export const Avatar: React.FC<Props> = ({ picture, fullName }) => {
	return <>{picture ? <Picture src={picture} alt={fullName} /> : <Icon />}</>
}
