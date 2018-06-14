/* @flow */
import ThemeFactory from './ThemeFactory'
import ThemeProviderFactory from './ThemeProviderFactory'

const defaultTheme = {}

export default function themeFactory(
  createElement: Function,
  createContext: Function
) {
  const { Provider, Consumer } = createContext(defaultTheme)

  return {
    ThemeProvider: ThemeProviderFactory(createElement, Consumer, Provider),
    Theme: ThemeFactory(createElement, Consumer),
  }
}
