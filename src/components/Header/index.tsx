import React from 'react'
import { Theme, useThemeControl } from '../Theme'
import { StyledToggle, Title, Wrapper } from './styled'

const Header: React.FC = () => {
	const [theme, setTheme] = useThemeControl()

	return (
		<Wrapper>
			<Title>[: aj tý :] spojka</Title>
			<StyledToggle
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
