import React from 'react'
import {
	AllSkillsBox,
	ChosenSkills,
	Label,
	MySkills,
	Row,
	SearchBox,
	Skill,
	SearchBoxContainer,
} from './styled'
import { TitleH2 } from '../StyledText/StyledTitle'
import { skillsData } from './data'

const labelTexts = ['Dělal jsem:', 'Dělám/učím se:', 'Zajímá mě:']

const SkillQueue: React.FC = () => (
	<>
		<TitleH2>TECHNOLOGIE</TitleH2>
		<MySkills>
			{labelTexts.map((labelTexts, index) => (
				<Row key={index}>
					<Label labelText={labelTexts}>{labelTexts}</Label>
					<ChosenSkills>
						<Skill>JavaScript</Skill>
						<Skill>Clojure</Skill>
					</ChosenSkills>
				</Row>
			))}
		</MySkills>
		<AllSkillsBox>
			<SearchBoxContainer>
				<SearchBox />
			</SearchBoxContainer>
			{skillsData.map((skillsData, index) => (
				<Skill key={index}>{skillsData.skillTitle}</Skill>
			))}
		</AllSkillsBox>
	</>
)

export default SkillQueue
