import React from 'react'
import { withTheme } from 'styled-components'
import { act, cleanup, render } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import { DarkTheme } from '../../themes'
import ThemeProvider, { Theme, toTheme, useThemeControl } from '.'

test('transforms a string to theme', () => {
	expect(toTheme('Dark')).toBe(Theme.Dark)
	expect(toTheme('Light')).toBe(Theme.Light)

	expect(toTheme('')).toBeNull()
	expect(toTheme('light')).toBeNull()
	expect(toTheme('dark')).toBeNull()
	expect(toTheme(null)).toBeNull()
	expect(toTheme('test')).toBeNull()
})

describe('Theme component', () => {
	afterEach(() => cleanup())

	test('provides default theme', () => {
		const ThemeContainer: React.FC = withTheme(({ theme }) => (
			<span>{JSON.stringify(theme)}</span>
		))

		const { container } = render(
			<ThemeProvider>
				<ThemeContainer />
			</ThemeProvider>
		)

		expect(container).toHaveTextContent(JSON.stringify(DarkTheme))
	})

	test('provides the theme control hook', () => {
		const { result } = renderHook(useThemeControl)

		const [theme] = result.current

		expect(theme).toBe(Theme.Dark)
	})

	test('changes a theme', () => {
		const Wrapper: React.FC = ({ children }) => (
			<ThemeProvider>{children}</ThemeProvider>
		)

		const { result } = renderHook(useThemeControl, { wrapper: Wrapper })

		const [defaultTheme, setTheme] = result.current

		expect(defaultTheme).toBe(Theme.Dark)

		act(() => {
			setTheme(Theme.Light)
		})

		const [theme] = result.current

		expect(theme).toBe(Theme.Light)
	})
})
