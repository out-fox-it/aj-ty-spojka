import React from 'react'
import { Wrapper, List, NavLink } from './styled'

export const Navbar: React.FC = () => {
	return (
		<Wrapper>
			<List>
				<li>
					<NavLink to="/my-profile/timeline">Timeline</NavLink>
				</li>
				<li>
					<NavLink to="/my-profile">O mně</NavLink>
				</li>
				<li>
					<NavLink to="/my-profile">Kontakty</NavLink>
				</li>
			</List>
		</Wrapper>
	)
}
