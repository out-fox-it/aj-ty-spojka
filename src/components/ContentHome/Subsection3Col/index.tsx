import React from 'react'
import { StyledParagraph } from '../../StyledText/StyledParagraph'
import { useThemeControl } from '../../Theme'
import {
	HomePictureClip,
	HomeSectionMultipleItems,
	HomeSubsection,
	HomeSubtitle,
} from './styled'
import { sectionsData } from './data'

const Subsection3Col: React.FC = () => {
	const [theme] = useThemeControl()

	return (
		<HomeSectionMultipleItems>
			{sectionsData.map((sectionsData, index) => (
				<HomeSubsection key={index}>
					<HomePictureClip>
						{sectionsData.homePictureClip}
					</HomePictureClip>
					<HomeSubtitle setColor={theme}>
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

export default Subsection3Col
