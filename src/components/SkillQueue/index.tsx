import React, { useState } from 'react'
import {
	AllSkillsBox,
	ChosenSkills,
	Label,
	MySkills,
	Row,
	Skill,
	SearchBoxContainer,
} from './styled'
import { TitleH2 } from '../StyledText/StyledTitle'
import { skillsData } from './data'
import Search from '../Search'

const labelTexts = ['Dělal jsem:', 'Dělám/učím se:', 'Zajímá mě:']

const SkillQueue: React.FC = () => {
	const [results, setResults] = useState(skillsData)

	return (
		<>
			<TitleH2>TECHNOLOGIE</TitleH2>
			<MySkills>
				{labelTexts.map((labelTexts, index) => (
					<Row key={index}>
						<Label>{labelTexts}</Label>
						<ChosenSkills>
							<Skill>JavaScript</Skill>
							<Skill>Clojure</Skill>
						</ChosenSkills>
					</Row>
				))}
			</MySkills>
			<AllSkillsBox>
				<SearchBoxContainer>
					<Search
						onQueueChange={(results) => setResults(results)}
						searchableSkills={skillsData}
					/>
				</SearchBoxContainer>
				{results.map((skill, index) => (
					<Skill key={index}>{skill.title}</Skill>
				))}
			</AllSkillsBox>
		</>
	)
}

export default SkillQueue
