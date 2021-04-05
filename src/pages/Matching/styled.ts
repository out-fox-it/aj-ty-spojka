import styled, { css } from 'styled-components'
import Button from '../../components/Button'

export const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const TitleTabs = styled.div`
	display: flex;
	width: 100%;

	& a {
		flex-grow: 1;
	}
`

export const ContentTabs = styled.div`
	box-sizing: border-box;
	width: 100%;
	padding: 1em;
	border-bottom-left-radius: 0.8em;
	border-bottom-right-radius: 0.8em;
	background-color: ${({ theme }) => theme.text.link};
`

const ActiveStyle = css`
	background-color: ${({ theme }) => theme.text.link};
	border: none;
`

export const StyledButton = styled(Button)<{ active: boolean }>`
	width: 100%;
	height: 100%;
	padding: 1.5em 0;
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
	border: 0.25em solid ${({ theme }) => theme.bg.primary};

	${({ active }) => active && ActiveStyle}
`
