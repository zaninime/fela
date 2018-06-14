/* @flow */
import objectReduce from 'fast-loops/lib/objectReduce'

import resolveRule from './resolveRule'

export default function ConnectFactory(
  createElement: Function,
  Consumer: any,
  Theme: any
): Function {
  return function FelaComponent({ children, render, styles, ...restProps }) {
    return createElement(Consumer, null, renderer =>
      createElement(Theme, null, theme => {
        const props = theme

        const classes = objectReduce(
          resolveRule(styles, props, renderer),
          (classes, style, name) => {
            classes[name] = renderer._renderStyle(style, props)
            return classes
          },
          {}
        )

        const renderMethod = render || children

        // prefered render method is the render prop
        if (renderMethod instanceof Function) {
          return renderMethod({
            classes,
            theme,
          })
        }

        // TODO: throw
      })
    )
  }
}
