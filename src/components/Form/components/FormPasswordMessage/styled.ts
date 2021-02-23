import styled from 'styled-components'

export const PasswordMessage = styled.div`
	grid-column: 2 / 4;
	display: ${(props) => (props?.hidden ? 'none' : 'grid')};
	grid: repeat(2, 1fr) / repeat(2, 1fr);
	justify-items: center;
	gap: 1em;
	margin: 1em;
`

export const ValidPassword = styled.p<{ validPassword?: boolean }>`
	margin: 0;
	color: ${(props) =>
		props?.validPassword
			? props.theme.text.link
			: props.theme.text.secondary};

	&:before {
		position: relative;
		left: -0.5em;
		content: '${(props) => (props?.validPassword ? '✔' : '✖')}';
	}
`
