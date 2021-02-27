import React from 'react'

export const Logo: React.FC = () => (
	<svg height="9em" width="9em" viewBox="0 0 300 300">
		<circle
			cx="145"
			cy="145"
			r="145"
			stroke="currentColor"
			strokeWidth="0.2em"
			fill="none"
			alignmentBaseline="middle"
		/>
		<text
			x="145"
			y="135"
			textAnchor="middle"
			fontSize="2.9rem"
			fill="currentColor"
		>
			{' '}
			[: aj tý: ]
		</text>
		<text
			x="145"
			y="200"
			textAnchor="middle"
			fontSize="2.9rem"
			fill="currentColor"
		>
			{' '}
			spojka
		</text>
	</svg>
)

export default Logo
