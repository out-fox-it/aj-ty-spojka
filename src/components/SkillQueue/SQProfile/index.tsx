import React, { useEffect, useState } from 'react'
import firebase from 'firebase'
import { firestore } from '../../../firebase'
import { MySkills, ChosenSkills, Label, Row, Skill } from '../styled'
import { useUser } from '../../User'
import { PlaceholderText } from '../../Profile/styled'

enum Category {
	Past = 'past',
	Current = 'current',
	Future = 'future',
}

type SkillCategories = Record<Category, firebase.firestore.DocumentReference[]>

const skillCategoriesLabels: Record<Category, string> = {
	[Category.Past]: 'Dělal jsem:',
	[Category.Current]: 'Dělám/učím se:',
	[Category.Future]: 'Zajímá mě:',
}

const SQProfile: React.FC = () => {
	const [mySkills, setMySkills] = useState<SkillCategories | null>()
	const { user } = useUser()

	useEffect(() => {
		if (user) {
			firestore
				.collection('profiles')
				.doc(user.uid)
				.get()
				.then((documentSnapshot) => {
					setMySkills(
						(documentSnapshot.data()?.skills as SkillCategories) ??
							null
					)
				})
				.catch((error) =>
					console.error(
						'Firestore failed to deliver users skill colection:',
						error
					)
				)
		}
	}, [user])

	return (
		<MySkills>
			{mySkills ? (
				Object.entries(mySkills).map(([category, skills], index) => (
					<Row key={index}>
						<Label>
							{skillCategoriesLabels[category as Category]}
						</Label>
						<ChosenSkills>
							{skills.map((skill, index) => (
								<Skill key={index}>{skill.id}</Skill>
							))}
						</ChosenSkills>
					</Row>
				))
			) : (
				<PlaceholderText>
					Nemáte vyplněné žádné technologie.
				</PlaceholderText>
			)}
		</MySkills>
	)
}

export default SQProfile
