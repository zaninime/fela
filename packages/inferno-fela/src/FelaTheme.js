/* @flow */
import { createElement } from 'inferno-create-element'
import { FelaThemeFactory } from '@zaninime/fela-bindings'

import { ThemeContext } from './context'

export default FelaThemeFactory(createElement, ThemeContext)
