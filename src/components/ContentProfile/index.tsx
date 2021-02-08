import React from 'react'
import {
	Wrapper,
	WrapperInformation,
	StyledIcon,
	StyledButton,
	WrapperLabel,
} from './styled'
import { InfoCircle, Heart } from '@styled-icons/bootstrap'
import { WorkOutline } from '@styled-icons/material-outlined'
import { Css3, Angularjs, Reactjs } from '@styled-icons/remix-fill'
import { Nodejs, Vuejs, Python } from '@styled-icons/boxicons-logos'
import Button from '../Button'

const ContentProfile: React.FC = () => (
	<Wrapper>
		<WrapperInformation>
			<h2>
				<StyledIcon>
					<InfoCircle />
				</StyledIcon>
				Něco o málo o mně ...
			</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
				enim ad minim veniam, quis nostrud exercitation ullamco laboris
				nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
				in reprehenderit in voluptate velit esse cillum dolore eu fugiat
				nulla pariatur. Excepteur
			</p>
			<h2>
				<StyledIcon>
					<WorkOutline />
				</StyledIcon>
				IT zkušenosti ...
			</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
				enim ad minim veniam, quis nostrud exercitation ullamco laboris
				nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
				in reprehenderit in voluptate velit esse cillum dolore eu fugiat
				nulla pariatur. Excepteur
			</p>
			<h2>
				<StyledIcon>
					<Heart />
				</StyledIcon>
				Mé zájmy ...
			</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
				enim ad minim veniam, quis nostrud exercitation ullamco laboris
				nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
				in reprehenderit in voluptate velit esse cillum dolore eu fugiat
				nulla pariatur. Excepteur
			</p>
			<StyledIcon>
				<Css3 />
				<Angularjs />
				<Reactjs />
				<Nodejs />
				<Vuejs />
				<Python />
			</StyledIcon>
		</WrapperInformation>
		<WrapperLabel>
			<h5>Vyber si štítek:</h5>
			<StyledButton>
				<Button subtitle="Mentor" />
				<Button subtitle="Buddy" />
				<Button subtitle="Mentee" />
			</StyledButton>
		</WrapperLabel>
	</Wrapper>
)

export default ContentProfile
