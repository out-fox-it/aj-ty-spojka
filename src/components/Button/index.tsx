import React from 'react'
import { WrapperIcon, ButtonSubtitle, ButtonTitle, StyledButton } from './styled'

interface Props {
	icon?: React.ReactElement
	title?: string
	subtitle?: string
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
	className?: string
}

export const Button: React.FC<Props> = ({
	icon,
	title,
	subtitle,
	onClick,
	className,
}) => (
	<StyledButton className={className} onClick={onClick}>
		{icon && <WrapperIcon>{icon}</WrapperIcon>}
		{title && <ButtonTitle>{title}</ButtonTitle>}
		{subtitle && <ButtonSubtitle>{subtitle}</ButtonSubtitle>}
	</StyledButton>
)
