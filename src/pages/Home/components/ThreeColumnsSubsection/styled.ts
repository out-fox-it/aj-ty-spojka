import styled from 'styled-components'
import { FontSizes, MediaQueries } from '../../../../themes'
import { HomeSection } from '../../styled'
import { Theme } from '../../../../components/Theme'

import czechtech20191 from '../../../../assets/Home/czechtech2019-1.jpg'

export const HomeSectionMultipleItems = styled(HomeSection)`
	background-color: ${({ theme }) => theme.bg.secondary};
	padding: 2em;

	@media (max-width: ${MediaQueries.DesktopLarge}) {
		flex-wrap: wrap;
	}

	@media (max-width: ${MediaQueries.Mobile}) {
		padding: 1em;
		margin: 0 auto;
	}
`

export const HomeSubsection = styled.div``

export const HomeSubtitle = styled.p<{ $theme: Theme }>`
	color: ${({ $theme, theme }) =>
		$theme === Theme.Dark ? theme.text.secondary : theme.bg.primary};
	text-align: center;
	font-size: ${FontSizes.SizeSmall};
	margin: 0;
	font-weight: bold;
`

export const HomePictureClip = styled.div`
	font-size: ${FontSizes.SizeClip};
	font-weight: bold;
	text-align: center;
	text-transform: uppercase;

	background-image: url(${czechtech20191});
	background-repeat: no-repeat;
	background-position: center;
	background-size: 200% auto;

	@include background-clip(text);
	-webkit-background-clip: text;
	-moz-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: #7184c7b5;
`
