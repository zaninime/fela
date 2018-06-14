/* @flow */
import resolveRule from './resolveRule'

export default function ComponentFactory(
  createElement: Function,
  Consumer: any,
  Theme: any
): Function {
  return function FelaComponent({
    children,
    customClass,
    render = 'div',
    rule,
    style,
    ...restProps
  }) {
    return createElement(Consumer, null, renderer =>
      createElement(Theme, null, theme => {
        const props = rule ? { theme, ...restProps } : theme

        const generatedClassName = renderer._renderStyle(
          resolveRule(rule || style, props, renderer),
          props
        )

        const className =
          (customClass ? customClass + ' ' : '') + generatedClassName

        // prefered render method is the render prop
        if (render instanceof Function) {
          return render({
            className,
            theme,
          })
        }

        // also supports render method as a child to be
        // compatible with most render-props APIs
        if (children instanceof Function) {
          return children({ className, theme })
        }

        // a plain string is just rendered
        // with children being passed down as well
        return createElement(render, { className }, children)
      })
    )
  }
}
