import React from 'react'
import { render } from '@testing-library/react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { DarkTheme } from 'themes'

type RenderFunction = typeof render

const renderWithTheme = (
	ui: Parameters<RenderFunction>[0],
	options?: Parameters<RenderFunction>[1] & { theme?: DefaultTheme }
): ReturnType<RenderFunction> =>
	render(
		<ThemeProvider theme={options?.theme ?? DarkTheme}>{ui}</ThemeProvider>
	)

export default renderWithTheme
