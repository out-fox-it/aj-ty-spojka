import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Edit } from '../../styled'
import { ProfileContext } from '../../Context'
import { Check, PencilAlt, Times } from '@styled-icons/fa-solid'
import FormText from '../../../Form/components/FormText'

type Props = {
	address: string | undefined
	id: string
}

export const Network: React.FC<Props> = ({ address, id }) => {
	const { removeNetwork, editNetwork } = useContext(ProfileContext)

	const [element, setElement] = useState<boolean>(true)

	const [actualAddress, setActualAddress] = useState<string | undefined>()

	useEffect(() => {
		setActualAddress(address)
	}, [address])

	const { errors, register, handleSubmit } = useForm<FormData>()

	const changeText = (actualAddress: string | undefined) =>
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
					onSubmit={handleSubmit(() => {
						if (actualAddress !== '') {
							setElement(true)
							editNetwork(actualAddress, id)
						} else {
							removeNetwork(id)
						}
					})}
				>
					<FormText
						register={register}
						errors={errors}
						required={false}
						value={actualAddress}
						change={changeText}
					/>
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
