import React, { Dispatch, SetStateAction } from 'react'
import { PencilAlt, Check } from '@styled-icons/fa-solid'
import { Edit } from './styled'

export enum Icon {
	pencil = 'pencil',
	check = 'check',
}

interface Props<T> {
	icon: Icon
	stateFunction: Dispatch<SetStateAction<T>>
	state: T
}

export const EditIcon = <T,>({
	icon,
	stateFunction,
	state,
}: Props<T>): JSX.Element => {
	const pencilIcon = (
		<Edit>
			<PencilAlt onClick={() => stateFunction(state)} />
		</Edit>
	)

	const checkIcon = (
		<Edit>
			<Check onClick={() => stateFunction(state)} />
		</Edit>
	)

	return (
		<>
			{icon === Icon.pencil && pencilIcon}
			{icon === Icon.check && checkIcon}
		</>
	)
}
