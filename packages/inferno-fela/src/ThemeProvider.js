/* @flow */
import { createElement } from 'inferno-create-element'
import { ThemeProviderFactory } from '@zaninime/fela-bindings'

import { ThemeContext } from './context'

export default ThemeProviderFactory(
  ThemeContext,
  createElement,
  children => children
)
