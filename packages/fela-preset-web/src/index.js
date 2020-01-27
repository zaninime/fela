/* @flow */
import extend from '@zaninime/fela-plugin-extend'
import embedded from '@zaninime/fela-plugin-embedded'
import prefixer from '@zaninime/fela-plugin-prefixer'
import fallbackValue from '@zaninime/fela-plugin-fallback-value'
import unit from '@zaninime/fela-plugin-unit'

type Config = {
  extend?: Array<any>,
  unit?: Array<any>,
}

export const createWebPreset = ({
  extend: extendConfig = [],
  unit: unitConfig = [],
}: Config = {}) => [
  extend(...extendConfig),
  embedded(),
  prefixer(),
  fallbackValue(),
  unit(...unitConfig),
]

export default createWebPreset()
