import React from 'react'

import { Logo } from 'assets/Logo'

import { Theme, useThemeControl } from 'components/Theme'
import Toggle from 'components/Toggle'
import ButtonNav from 'components/ButtonNav'

import { Wrapper, NavBarLink } from './styled'

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
