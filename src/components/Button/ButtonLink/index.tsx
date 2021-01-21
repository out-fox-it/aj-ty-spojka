import React from 'react'
import { LayoutType, ButtonContent } from '../ButtonContent/'
import { StyledLink } from './styled'

interface Props {
	layout: LayoutType
	link: string
	icon?: string
	alt?: string
	title?: string
	subtitle?: string
}

export const ButtonLink: React.FC<Props> = ({
	layout,
	link,
	icon,
	alt,
	title,
	subtitle,
}) => {
	return (
		<StyledLink to={link}>
			<ButtonContent
				layout={layout}
				icon={icon}
				alt={alt}
				title={title}
				subtitle={subtitle}
			/>
		</StyledLink>
	)
}
