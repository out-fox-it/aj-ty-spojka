import React from 'react'
import { ButtonIcon, ButtonSubtitle, ButtonTitle, StyledButton } from './styled'

interface Props {
	icon?: string
	alt?: string
	title?: string
	subtitle?: string
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
	className?: string
}

export const Button: React.FC<Props> = ({
	icon,
	alt,
	title,
	subtitle,
	onClick,
	className,
}) => (
	<StyledButton className={className} onClick={onClick}>
		{icon && <ButtonIcon src={icon} alt={alt} />}
		{title && <ButtonTitle>{title}</ButtonTitle>}
		{subtitle && <ButtonSubtitle>{subtitle}</ButtonSubtitle>}
	</StyledButton>
)
