import React, { Dispatch, SetStateAction } from 'react'
import { PencilAlt, Check } from '@styled-icons/fa-solid'
import { DeleteOutline } from '@styled-icons/material-outlined'
import { Edit } from './styled'

export enum Icon {
	edit = 'edit',
	save = 'save',
	delete = 'delete',
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
	const editIcon = <PencilAlt onClick={() => stateFunction(state)} />
	const saveIcon = <Check onClick={() => stateFunction(state)} />
	const deleteIcon = <DeleteOutline onClick={() => stateFunction(state)} />

	return (
		<Edit>
			{icon === Icon.edit && editIcon}
			{icon === Icon.save && saveIcon}
			{icon === Icon.delete && deleteIcon}
		</Edit>
	)
}
