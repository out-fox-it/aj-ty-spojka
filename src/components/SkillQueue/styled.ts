import styled from 'styled-components'
import { FontSizes } from 'themes'

export const Row = styled.div`
	display: flex;
	flex-flow: row;
	gap: 1em;
	margin-top: 1em;
	margin-bottom: 1em;
`

export const MySkills = styled.div`
	margin-top: -1.5em;
`

export const Label = styled.div`
	font-size: ${FontSizes.SizeDefault};
	font-weight: bold;
	color: ${({ theme }) => theme.text.secondary};
	margin-top: auto;
	margin-bottom: auto;
`

export const ChosenSkills = styled.div``

export const AllSkillsBox = styled.div`
	height: 16em;
	background-color: ${({ theme }) => theme.bg.secondary};
	border-radius: 0.8em;
	text-align: center;
	overflow: auto;
	border: 1.7em solid ${({ theme }) => theme.bg.secondary};
	padding-left: 1em;
	padding-right: 1em;

	// Scrollbar styles
	&::-webkit-scrollbar {
		width: 0.5em;
	}

	/* Track */
	&::-webkit-scrollbar-track {
		background: ${({ theme }) => theme.bg.secondary};
	}

	/* Handle */
	&::-webkit-scrollbar-thumb {
		background: ${({ theme }) => theme.text.secondary};
		border-radius: 0.8em;
	}

	/* Handle on hover */
	&::-webkit-scrollbar-thumb:hover {
		cursor: pointer;
	}
`

export const Skill = styled.button`
	font-size: ${FontSizes.SizeDefault};
	padding: 0.5em;
	margin: 0.3em;
	background-color: ${({ theme }) => theme.bg.primary};
	color: ${({ theme }) => theme.text.primary};
	border: 1px solid ${({ theme }) => theme.text.link};
	border-radius: 0.8em;
	outline: none;
	cursor: pointer;
`

export const SearchBoxContainer = styled.div`
	padding-bottom: 1em;
	position: sticky;
	top: 0;
	background-color: ${({ theme }) => theme.bg.secondary};
`
