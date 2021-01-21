import React from 'react'
import {
	ButtonIcon,
	ButtonTitle,
	ButtonSubtitle,
	ButtonCenter,
	ButtonLine,
} from './styled'

export enum LayoutType {
	center = 'center',
	line = 'line',
}

interface Props {
	layout: LayoutType
	icon?: string
	alt?: string
	title?: string
	subtitle?: string
}

export const ButtonContent: React.FC<Props> = ({
	icon,
	alt,
	title,
	subtitle,
	layout,
}) => {
	const content = (
		<>
			{icon && <ButtonIcon src={icon} alt={alt} />}
			{title && <ButtonTitle>{title}</ButtonTitle>}
			{subtitle && <ButtonSubtitle>{subtitle}</ButtonSubtitle>}
		</>
	)

	return layout === LayoutType.center ? (
		<ButtonCenter>{content}</ButtonCenter>
	) : (
		<ButtonLine>{content}</ButtonLine>
	)
}
