/* @flow */
import extend from '@fela-next/fela-plugin-extend'
import embedded from '@fela-next/fela-plugin-embedded'
import prefixer from '@fela-next/fela-plugin-prefixer'
import fallbackValue from '@fela-next/fela-plugin-fallback-value'
import unit from '@fela-next/fela-plugin-unit'

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
