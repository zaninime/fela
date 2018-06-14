/* @flow */
export default function ThemeFactory(createElement: Function, Consumer: any) {
  return function Theme({ render, children }) {
    return createElement(Consumer, null, children || render)
  }
}
