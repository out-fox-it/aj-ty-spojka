import React, { useState } from 'react'
import {
	Checkbox,
	LeftLabel,
	RightLabel,
	RoundSlider,
	Slider,
	Switch,
	Wrapper,
} from './styled'

type Props = {
	onChange: (checked: boolean) => void
	isChecked?: boolean
	isRound?: boolean
	label?: [string, string]
	className?: string
}

const Toggle: React.FC<Props> = ({
	onChange,
	isChecked = false,
	isRound = false,
	label = ['', ''],
	className,
}) => {
	const [checked, setChecked] = useState<boolean>(isChecked)

	const change = (checked: boolean): void => {
		setChecked(checked)
		onChange(checked)
	}

	const [leftLabel, rightLabel] = label

	return (
		<Wrapper className={className}>
			{leftLabel && (
				<LeftLabel onClick={() => change(false)}>{leftLabel}</LeftLabel>
			)}
			<Switch>
				<Checkbox
					checked={checked}
					onChange={(event) => change(event.target.checked)}
				/>
				{isRound ? <RoundSlider /> : <Slider />}
			</Switch>
			{rightLabel && (
				<RightLabel onClick={() => change(true)}>
					{rightLabel}
				</RightLabel>
			)}
		</Wrapper>
	)
}

export default Toggle
