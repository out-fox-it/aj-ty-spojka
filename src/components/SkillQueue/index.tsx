import React, { useEffect, useState } from 'react'
import { AllSkillsBox, Skill, SearchBoxContainer } from './styled'
import { TitleH2 } from '../StyledText/StyledTitle'
import Search from '../Search'
import { firestore } from '../../firebase'
import { Skill as SkillType } from './types'
import SQProfile from './SQProfile'

const SkillQueue: React.FC = () => {
	const [results, setResults] = useState<ReadonlyArray<SkillType>>([])
	const [skillsData, setSkillsData] = useState<ReadonlyArray<SkillType>>([])

	useEffect(() => {
		firestore
			.collection('skills')
			.get()
			.then((collectionSnapshot) => {
				const skills: SkillType[] = []

				collectionSnapshot.forEach((document) =>
					skills.push(document.data() as SkillType)
				)

				setSkillsData(skills)
				setResults(skills)
			})
			.catch((error) =>
				console.error(
					'Firestore failed to deliver skill collection:',
					error
				)
			)
	}, [])

	return (
		<>
			<TitleH2>TECHNOLOGIE</TitleH2>

			<SQProfile />

			<AllSkillsBox>
				<SearchBoxContainer>
					<Search
						onQueueChange={(results) => setResults(results)}
						searchableSkills={skillsData}
						disabled={skillsData.length === 0}
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
