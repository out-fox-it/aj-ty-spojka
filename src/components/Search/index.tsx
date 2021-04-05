import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'

import { Form, FormItemFullWidth } from 'components/Form/styled'
import { Skill } from 'components/SkillQueue/types'

import { SearchBox, SearchIcon } from './styled'

type Props = {
	onQueueChange: (results: ReadonlyArray<Skill>) => void
	searchableSkills: ReadonlyArray<Skill>
	disabled?: boolean
}

const toLocaleLowerCaseString = (value: string): string =>
	value
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLowerCase()

const Search: React.FC<Props> = ({
	onQueueChange,
	searchableSkills,
	disabled,
}) => {
	const queueChange = useCallback(
		(queue?: string) => {
			if (queue && queue.length > 0) {
				const searchableQueue = toLocaleLowerCaseString(queue)

				const results = searchableSkills.filter((skill) =>
					toLocaleLowerCaseString(skill.title).includes(
						searchableQueue
					)
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
					disabled={disabled}
				/>
			</FormItemFullWidth>
		</Form>
	)
}

export default Search
