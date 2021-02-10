import React from 'react'
import { StyledIcon } from '@styled-icons/styled-icon'
import {
	WrapperIcon,
	ButtonSubtitle,
	ButtonTitle,
	ButtonTitleSmall,
	StyledButton,
} from './styled'

interface Props {
	icon?: StyledIcon
	title?: string
	titleSmall?: string
	subtitle?: string
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
	className?: string
}

const Button: React.FC<Props> = ({
	icon,
	title,
	titleSmall,
	subtitle,
	onClick,
	className,
}) => (
	<StyledButton className={className} onClick={onClick}>
		{icon && <WrapperIcon>{React.createElement(icon)}</WrapperIcon>}
		{title && <ButtonTitle>{title}</ButtonTitle>}
		{titleSmall && <ButtonTitleSmall>{titleSmall}</ButtonTitleSmall>}
		{subtitle && <ButtonSubtitle>{subtitle}</ButtonSubtitle>}
	</StyledButton>
)

export default Button
