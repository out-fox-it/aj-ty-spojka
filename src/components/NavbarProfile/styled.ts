import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 3fr 1fr;
	margin-bottom: 6em;

	@media (max-width: 50em) {
		grid-template-columns: 1fr;
		grid-template-rows: auto auto auto;
		margin-bottom: 1em;
	}
`

export const WrapperData = styled.section`
	grid-column: 2;
	position: relative;
	width: 100%;
	min-width: 15em;
	height: 5em;

	@media (max-width: 50em) {
		grid-column: 1;
		height: 12em;
		min-width: 15em;
	}
`

export const BasicDataProfile = styled.article`
	display: grid;
	justify-items: center;
	align-items: center;
	width: 100%;
	position: absolute;
	top: -9em;
`

const size = css`
	max-width: 15em;
	width: 100%;
	height: 15em;
`

export const StyledAvatar = styled.div`
	${size}

	& img {
		${size}
	}
`

export const Name = styled.h2`
	margin: 0;
	padding: 0.2em;
	text-align: center;
	color: ${({ theme }) => theme.text.primary};
`

export const Profession = styled.span`
	padding: 0 0 0.7em 0;
	color: ${({ theme }) => theme.text.link};
`

export const WrapperNavigation = styled.section`
	display: grid;
	justify-items: center;
	align-items: center;
	grid-template-columns: 3fr 1fr;

	@media (max-width: 62.5em) {
		grid-template-columns: 1fr;
		grid-template-rows: 3.8em 6.3em;
	}
`

export const StyledLink = styled(Link)`
	text-decoration: none;
`
