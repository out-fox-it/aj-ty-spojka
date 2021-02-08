import React from 'react'
import { Wrapper, List, NavLink } from './styled'

const Navbar: React.FC = () => (
	<Wrapper>
		<List>
			<li>
				<NavLink to="/profile">Timeline</NavLink>
			</li>
			<li>
				<NavLink to="/profile">O mně</NavLink>
			</li>
			<li>
				<NavLink to="/profile">Kontakty</NavLink>
			</li>
		</List>
	</Wrapper>
)

export default Navbar
