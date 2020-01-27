/* @flow */
import { prefix } from 'inline-style-prefixer'
import cssifyObject from 'css-in-js-utils/lib/cssifyObject'
import objectReduce from 'fast-loops/lib/objectReduce'

import fallbackValue from '@zaninime/fela-plugin-fallback-value'
import isPlainObject from 'isobject'

const resolveFallbackValues = fallbackValue()

function addVendorPrefixes(style: Object): Object {
  return objectReduce(
    style,
    (prefixedStyle, value, property) => {
      if (isPlainObject(value)) {
        prefixedStyle[property] = addVendorPrefixes(value)
      } else {
        const prefixedDeclaration = prefix({
          [property]: style[property],
        })
        const styleKeys = Object.keys(prefixedDeclaration)

        const referenceProperty = styleKeys[0]
        const referenceValue = prefixedDeclaration[referenceProperty]

        if (styleKeys.length === 1) {
          prefixedStyle[referenceProperty] = referenceValue
        } else {
          delete prefixedDeclaration[referenceProperty]
          const inlinedProperties = cssifyObject(
            resolveFallbackValues(prefixedDeclaration)
          )

          prefixedStyle[
            referenceProperty
          ] = `${referenceValue};${inlinedProperties}`
        }
      }

      return prefixedStyle
    },
    {}
  )
}

export default () => addVendorPrefixes
