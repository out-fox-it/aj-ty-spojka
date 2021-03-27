import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { StyledLink } from '../StyledText/StyledLink'
import { dataTabs } from './data'
import { StyledButton, Wrapper, TitleTabs, ContentTabs } from './styled'

const MatchingTabs: React.FC = () => {
	const [active, setActive] = useState<number>(1)

	return (
		<Wrapper>
			<TitleTabs>
				{dataTabs.map((tab, index) => (
					<StyledLink key={index} to={tab.route}>
						<StyledButton
							title={tab.title}
							active={active === index}
							onClick={() => setActive(index)}
						/>
					</StyledLink>
				))}
			</TitleTabs>
			<ContentTabs>
				<Switch>
					<Route path="/matching/mentor">
						<p>
							x Lorem ipsum, dolor sit amet consectetur
							adipisicing elit. Optio, facilis voluptates
							laudantium id unde ea ut earum eum aliquid quam
							quasi quos debitis nemo quis maxime beatae, esse
							atque eligendi.
						</p>
					</Route>
					<Route path="/matching/buddy">
						<h1>
							Při vložení SkillQueue komponenty to vypadá už
							celkem dobře :D
						</h1>
					</Route>
					<Route path="/matching/mentee">
						<p>budoucnost je neznámá .....</p>
					</Route>
				</Switch>
			</ContentTabs>
		</Wrapper>
	)
}

export default MatchingTabs
