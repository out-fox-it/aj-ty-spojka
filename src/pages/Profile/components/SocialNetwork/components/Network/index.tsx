import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Check, PencilAlt, Times } from '@styled-icons/fa-solid'

import FormText from 'components/Form/components/FormText'
import { FormItemFullWidth } from 'components/Form/styled'

import { ProfileContext } from '../../../Context'
import { Edit } from '../../../../styled'

type Props = {
	address?: string
	id: string
}

const Network: React.FC<Props> = ({ address, id }) => {
	const { removeNetwork, editNetwork } = useContext(ProfileContext)

	const [element, setElement] = useState<boolean>(true)

	const [actualAddress, setActualAddress] = useState<string>()

	useEffect(() => {
		setActualAddress(address)
	}, [address])

	const { errors, register } = useForm<FormData>()

	const changeText = (actualAddress?: string) =>
		setActualAddress(actualAddress)

	return (
		<>
			{element ? (
				<li>
					<span>{actualAddress}</span>
					<Edit onClick={() => setElement(false)}>
						<PencilAlt />
					</Edit>
					<Edit onClick={() => removeNetwork(id)}>
						<Times />
					</Edit>
				</li>
			) : (
				<form
					onSubmit={(event) => {
						event.preventDefault()
						if (actualAddress !== '') {
							setElement(true)
							editNetwork(id, actualAddress)
						} else {
							removeNetwork(id)
						}
					}}
				>
					<FormItemFullWidth>
						<FormText
							register={register}
							errors={errors}
							required={false}
							value={actualAddress}
							change={changeText}
						/>
					</FormItemFullWidth>
					<Edit name="submit" type="submit">
						<Check />
					</Edit>
					<Edit onClick={() => removeNetwork(id)}>
						<Times />
					</Edit>
				</form>
			)}
		</>
	)
}

export default Network