/* @flow */
// $FlowFixMe
import { h as createElement } from 'preact'
import { ThemeProviderFactory } from '@zaninime/fela-bindings'

import { ThemeContext } from './context'

export default ThemeProviderFactory(
  ThemeContext,
  createElement,
  ([children]) => children
)
