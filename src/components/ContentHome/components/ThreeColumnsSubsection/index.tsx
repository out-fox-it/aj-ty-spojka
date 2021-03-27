import React from 'react'
import { StyledParagraph } from '../../../StyledText/StyledParagraph'
import { useThemeControl } from '../../../Theme'
import {
	HomePictureClip,
	HomeSectionMultipleItems,
	HomeSubsection,
	HomeSubtitle,
} from './styled'
import { sectionsData } from './data'

const ThreeColumnsSubsection: React.FC = () => {
	const [theme] = useThemeControl()

	return (
		<HomeSectionMultipleItems>
			{sectionsData.map((sectionsData, index) => (
				<HomeSubsection key={index}>
					<HomePictureClip>
						{sectionsData.homePictureClip}
					</HomePictureClip>
					<HomeSubtitle $theme={theme}>
						{sectionsData.homeSubtitle}
					</HomeSubtitle>
					<StyledParagraph>
						{sectionsData.styledParagraph}
					</StyledParagraph>
				</HomeSubsection>
			))}
		</HomeSectionMultipleItems>
	)
}

export default ThreeColumnsSubsection
