import React from 'react'
import { Theme, useThemeControl } from '../Theme'
import Toggle from '../Toggle'
import { TitleLink, Title, Wrapper } from './styled'

const Header: React.FC = () => {
	const [theme, setTheme] = useThemeControl()

	return (
		<Wrapper>
			<TitleLink to="/">
				<Title>[: aj tý :] spojka</Title>
			</TitleLink>
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
