import React from 'react'
import { Theme, useThemeControl } from '../Theme'
import Toggle from '../Toggle'
import { Title, Wrapper } from './styled'

const Header: React.FC = () => {
	const [theme, setTheme] = useThemeControl()

	return (
		<Wrapper>
			<Title to="/">[: aj tý :] spojka</Title>
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

export default Header
