import React, { createContext, useContext, useEffect, useState } from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { DarkTheme, LightTheme } from 'themes'

export enum Theme {
	Dark = 'Dark',
	Light = 'Light',
}

type ThemeControl = [Theme, (theme: Theme) => void]

const selectTheme = {
	[Theme.Dark]: DarkTheme,
	[Theme.Light]: LightTheme,
}

const defaultTheme = Theme.Dark

const isValidTheme = (theme: string): theme is keyof typeof Theme =>
	Object.keys(selectTheme).includes(theme)

export const toTheme = (theme: string | null): Theme | null =>
	theme && isValidTheme(theme) ? Theme[theme] : null

const getUserPreferredTheme = (): Theme | null => {
	if (!window.matchMedia) return null

	const userPrefersDark = matchMedia('(prefers-color-scheme: dark)').matches

	if (userPrefersDark) return Theme.Dark

	const userPrefersLight = matchMedia('(prefers-color-scheme: light)').matches

	if (userPrefersLight) return Theme.Light

	return null
}

const themeStorageKey = 'theme'

const getInitialTheme = (): Theme => {
	const storedTheme = toTheme(localStorage?.getItem(themeStorageKey))
	if (storedTheme) return storedTheme

	const preferredTheme = getUserPreferredTheme()
	if (preferredTheme) return preferredTheme

	return defaultTheme
}

const saveSelectedTheme = (theme: Theme): void =>
	localStorage.setItem(themeStorageKey, theme)

const ThemeControlContext = createContext<ThemeControl>([
	defaultTheme,
	() => {
		return
	},
])

const ThemeProvider: React.FC = ({ children }) => {
	const themeControl = useState<Theme>(getInitialTheme)
	const [theme] = themeControl

	useEffect(() => saveSelectedTheme(theme), [theme])

	return (
		<ThemeControlContext.Provider value={themeControl}>
			<StyledComponentsThemeProvider theme={selectTheme[theme]}>
				{children}
			</StyledComponentsThemeProvider>
		</ThemeControlContext.Provider>
	)
}

export const useThemeControl = (): ThemeControl =>
	useContext(ThemeControlContext)

export default ThemeProvider
