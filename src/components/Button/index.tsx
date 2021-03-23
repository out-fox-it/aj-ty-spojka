import React from 'react'
import { StyledIcon } from '@styled-icons/styled-icon'
import {
	WrapperIcon,
	ButtonTitle,
	ButtonTitleSmall,
	StyledButton,
} from './styled'

type Props = {
	icon?: StyledIcon
	title?: string
	titleSmall?: string
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
	className?: string
	name?: string
	type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<Props> = ({
	icon,
	title,
	titleSmall,
	onClick,
	className,
	name,
	type = 'button',
}) => (
	<StyledButton
		className={className}
		onClick={onClick}
		name={name}
		type={type}
	>
		{icon && <WrapperIcon>{React.createElement(icon)}</WrapperIcon>}
		{title && <ButtonTitle>{title}</ButtonTitle>}
		{titleSmall && <ButtonTitleSmall>{titleSmall}</ButtonTitleSmall>}
	</StyledButton>
)

export default Button
