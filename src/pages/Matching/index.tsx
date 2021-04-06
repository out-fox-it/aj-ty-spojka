import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'

import Footer from 'components/Footer'
import NavBar from 'components/NavBar'
import Page from 'components/Page'
import { StyledLink, TitleH1 } from 'components/StyledText'

import { dataTabs } from './data'
import { StyledButton, Wrapper, TitleTabs, ContentTabs } from './styled'

const Matching: React.FC = () => {
	const { pathname } = useLocation()

	return (
		<>
			<NavBar />
			<Page>
				<TitleH1>MATCHING</TitleH1>
				<Wrapper>
					<TitleTabs>
						{dataTabs.map((tab, index) => (
							<StyledLink key={index} to={tab.route}>
								<StyledButton
									title={tab.title}
									active={pathname === tab.route}
								/>
							</StyledLink>
						))}
					</TitleTabs>
					<ContentTabs>
						<Switch>
							<Route path="/matching/mentor">
								<p>
									x Lorem ipsum, dolor sit amet consectetur
									adipisicing elit.Optio, facilis voluptates
									laudantium id unde ea ut earum eum aliquid
									qua quasi quos debitis nemo quis maxime
									beatae, esse atque eligendi.
								</p>
							</Route>
							<Route path="/matching/buddy">
								<h1>
									Při vložení SkillQueue komponenty to vypadá
									už celkem dobře: D
								</h1>
							</Route>
							<Route path="/matching/mentee">
								<p>budoucnost je neznámá .....</p>
							</Route>
						</Switch>
					</ContentTabs>
				</Wrapper>
			</Page>
			<Footer />
		</>
	)
}

export default Matching
