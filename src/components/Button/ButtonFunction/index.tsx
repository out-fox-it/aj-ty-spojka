import React from 'react'
import { LayoutType, ButtonContent } from '../ButtonContent/'
import { ButtonCover } from './styled'

interface Props {
	layout: LayoutType
	click: () => void
	icon?: string
	alt?: string
	title?: string
	subtitle?: string
}

export const clickMe = (): void => {
	alert('functionality will be added later')
}

export const ButtonFunction: React.FC<Props> = ({
	layout,
	click,
	icon,
	alt,
	title,
	subtitle,
}) => {
	return (
		<ButtonCover onClick={() => click()}>
			<ButtonContent
				layout={layout}
				icon={icon}
				alt={alt}
				title={title}
				subtitle={subtitle}
			/>
		</ButtonCover>
	)
}
