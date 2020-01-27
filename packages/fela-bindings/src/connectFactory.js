/* @flow */
import objectReduce from 'fast-loops/lib/objectReduce'
import objectEach from 'fast-loops/lib/objectEach'
import { combineMultiRules } from '@fela-next/fela-tools'
import shallowCompare from 'react-addons-shallow-compare'

import generateDisplayName from './generateDisplayName'
import generateSelectorPrefix from './generateSelectorPrefix'
import hoistStatics from './hoistStatics'

export type ConnectConfig = {
  pure?: boolean,
}

const defaultConfig: ConnectConfig = {
  pure: true,
}

export default function connectFactory(
  BaseComponent: any,
  createElement: Function,
  RendererContext: any,
  ThemeContext: any
): Function {
  return function connect(
    rules: Object | Function,
    config: ConnectConfig = {}
  ): Function {
    const connectConfig = {
      ...defaultConfig,
      ...config,
    }

    return (component: any): any => {
      class EnhancedComponent extends BaseComponent {
        static displayName = generateDisplayName(component)

        static _isFelaComponent = true

        shouldComponentUpdate(nextProps, nextState) {
          if (connectConfig.pure) {
            return shallowCompare(this, nextProps, nextState)
          }
          return true
        }

        render() {
          const { extend, _felaRules, ...otherProps } = this.props

          const allRules = [rules]
          if (_felaRules) {
            allRules.push(_felaRules)
          }
          if (extend) {
            allRules.push(extend)
          }

          const combinedRules = combineMultiRules(...allRules)

          return createElement(RendererContext.Consumer, undefined, renderer =>
            createElement(ThemeContext.Consumer, undefined, theme => {
              const preparedRules = combinedRules(
                {
                  ...otherProps,
                  theme,
                },
                renderer
              )

              // improve developer experience with monolithic renderer
              if (
                process.env.NODE_ENV !== 'production' &&
                renderer.prettySelectors
              ) {
                const componentName =
                  component.displayName || component.name || ''

                objectEach(preparedRules, (rule, name) => {
                  rule.selectorPrefix = generateSelectorPrefix(
                    componentName,
                    name
                  )
                })
              }

              if (component._isFelaComponent) {
                return createElement(component, {
                  _felaRules: combinedRules,
                  ...otherProps,
                })
              }

              const styles = objectReduce(
                preparedRules,
                (styleMap, rule, name) => {
                  styleMap[name] = renderer.renderRule(rule, {
                    ...otherProps,
                    theme,
                  })

                  return styleMap
                },
                {}
              )

              const boundRules = objectReduce(
                preparedRules,
                (ruleMap, rule, name) => {
                  ruleMap[name] = props =>
                    rule(
                      {
                        theme,
                        ...props,
                      },
                      renderer
                    )

                  return ruleMap
                },
                {}
              )

              return createElement(component, {
                ...otherProps,
                styles,
                theme,
                rules: boundRules,
              })
            })
          )
        }
      }

      return hoistStatics(EnhancedComponent, component)
    }
  }
}
