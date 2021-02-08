import React from 'react'
import { StyledIcon } from '@styled-icons/styled-icon'
import {
	WrapperIcon,
	ButtonSubtitle,
	ButtonTitle,
	StyledButton,
} from './styled'

interface Props {
	icon?: StyledIcon
	title?: string
	subtitle?: string
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
	className?: string
}

const Button: React.FC<Props> = ({
	icon,
	title,
	subtitle,
	onClick,
	className,
}) => (
	<StyledButton className={className} onClick={onClick}>
		{icon && <WrapperIcon>{React.createElement(icon)}</WrapperIcon>}
		{title && <ButtonTitle>{title}</ButtonTitle>}
		{subtitle && <ButtonSubtitle>{subtitle}</ButtonSubtitle>}
	</StyledButton>
)

export default Button
