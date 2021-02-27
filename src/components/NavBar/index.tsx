import React from 'react'
import { Theme, useThemeControl } from '../Theme'
import Toggle from '../Toggle'
import { ButtonNav } from '../ButtonNav'
import { Wrapper, StyledLink } from './styled'
import { Logo } from '../../assets/Logo'

interface Props {
	login: boolean
}

const NavBar: React.FC<Props> = ({ login }) => {
	const [theme, setTheme] = useThemeControl()

	return (
		<Wrapper>
			<StyledLink setColor={theme} to="/">
				<Logo />
			</StyledLink>
			<ButtonNav login={login} />
			<Toggle
				isRound={true}
				label={['☀️', '🌙']}
				isChecked={theme === Theme.Dark}
				onChange={(checked) =>
					setTheme(checked ? Theme.Dark : Theme.Light)
				}
			/>
		</Wrapper>
	)
}

export default NavBar
