/* @flow */
import objectReduce from 'fast-loops/lib/objectReduce'
import arrayReduce from 'fast-loops/lib/arrayReduce'

import { combineRules } from '@zaninime/fela'

function safeRule(ruleOrObject: Function | Object): Function {
  return typeof ruleOrObject === 'function' ? ruleOrObject : () => ruleOrObject
}

export default function combineMultiRules(
  ...multiRules: Array<Function | Object>
): Function {
  return (props, renderer) =>
    arrayReduce(
      multiRules,
      (resultStyleMap, multiRule) => ({
        ...resultStyleMap,
        ...objectReduce(
          safeRule(multiRule)(props, renderer),
          (styleMap, rule, name) => ({
            ...styleMap,
            [name]: resultStyleMap[name]
              ? combineRules(resultStyleMap[name], safeRule(rule))
              : safeRule(rule),
          }),
          {}
        ),
      }),
      {}
    )
}
