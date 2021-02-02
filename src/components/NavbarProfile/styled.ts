import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const Wrapper = styled.nav`
	box-sizing: border-box;
	height: 10em;
	max-width: 75em;
	width: 100%;
	margin: auto;
	padding: 0 2em;
`

export const WrapperContent = styled.section`
	display: grid;
	grid-template-columns: 1fr 3fr;
	position: relative;
	border-bottom: 1px solid ${({ theme }) => theme.text.secondary};

	@media (max-width: 50em) {
		grid-template-columns: 1fr;
		grid-template-rows: auto auto;
	}
`

export const WrapperData = styled.article`
	position: relative;
	width: 100%;
	min-width: 15em;
	height: 5em;

	@media (max-width: 50em) {
		height: 12em;
		min-width: 15em;
	}
`

export const BasicDataProfile = styled.div`
	display: grid;
	justify-items: center;
	align-items: center;
	width: 100%;
	position: absolute;
	top: -9em;
`

const size = css`
	box-sizing: border-box;
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

export const WrapperNavigation = styled.article`
	display: grid;
	justify-items: center;
	align-items: center;
	grid-template-columns: 3fr 1fr;

	@media (max-width: 62.5em) {
		grid-template-columns: 1fr;
		grid-template-rows: 60px 100px;
	}
`

export const StyledLink = styled(Link)`
	text-decoration: none;
`
