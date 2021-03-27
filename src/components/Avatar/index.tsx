import React from 'react'
import { Picture, Icon } from './styled'

type Props = {
	picture?: string
	fullName?: string
}

const Avatar: React.FC<Props> = ({ picture, fullName }) =>
	picture ? <Picture src={picture} alt={fullName} /> : <Icon />

export default Avatar
