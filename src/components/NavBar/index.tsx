import React from 'react'
import { Theme, useThemeControl } from '../Theme'
import Toggle from '../Toggle'
import ButtonNav from '../ButtonNav'
import { Wrapper, NavBarLink } from './styled'
import { Logo } from '../../assets/Logo'

const NavBar: React.FC = () => {
	const [theme, setTheme] = useThemeControl()

	return (
		<Wrapper>
			<NavBarLink $theme={theme} to="/">
				<Logo />
			</NavBarLink>
			<ButtonNav />
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
