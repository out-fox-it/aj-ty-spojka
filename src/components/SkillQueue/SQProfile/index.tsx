import React from 'react'
import { MySkills, ChosenSkills, Label, Row, Skill } from '../styled'

const labelTexts = ['Dělal jsem:', 'Dělám/učím se:', 'Zajímá mě:']

const SQProfile: React.FC = () => (
	<MySkills>
		{labelTexts.map((labelTexts, index) => (
			<Row key={index}>
				<Label>{labelTexts}</Label>
				<ChosenSkills>
					<Skill>JavaScript</Skill>
				</ChosenSkills>
			</Row>
		))}
	</MySkills>
)

export default SQProfile
