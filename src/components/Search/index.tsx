import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormItemFullWidth } from '../Form/styled'
import { SearchBox, SearchIcon } from './styled'
import { Skill } from '../SkillQueue/data'

type Props = {
	onQueueChange: (results: ReadonlyArray<Skill>) => void
	searchableSkills: ReadonlyArray<Skill>
}

const Search: React.FC<Props> = ({ onQueueChange, searchableSkills }) => {
	const queueChange = useCallback(
		(queue: string | undefined) => {
			if (queue && queue.length > 0) {
				const searchableQueue = queue
					.toLowerCase()
					.normalize('NFD')
					.replace(/[\u0300-\u036f]/g, '')

				const results = searchableSkills.filter((skill) =>
					skill.title
						.toLowerCase()
						.normalize('NFD')
						.replace(/[\u0300-\u036f]/g, '')
						.includes(searchableQueue)
				)

				return onQueueChange(results)
			} else {
				onQueueChange(searchableSkills)
			}
		},
		[onQueueChange, searchableSkills]
	)

	const { errors, register } = useForm<FormData>()

	return (
		<Form>
			<FormItemFullWidth>
				<SearchIcon />

				<SearchBox
					register={register}
					errors={errors}
					required={''}
					placeholder={'Hledám...'}
					change={queueChange}
				/>
			</FormItemFullWidth>
		</Form>
	)
}

export default Search
