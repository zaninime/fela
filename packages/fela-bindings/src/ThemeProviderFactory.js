/* @flow */
export default function ThemeProviderFactory(
  createElement: Function,
  Consumer: any,
  Provider: any
) {
  return function ThemeProvider({ theme, replace, children }) {
    return createElement(Consumer, null, previousTheme =>
      createElement(
        Provider,
        {
          value: replace
            ? theme
            : {
                ...previousTheme,
                ...theme,
              },
        },
        children
      )
    )
  }
}
