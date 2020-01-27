/* @flow */
import { createElement } from 'inferno-create-element'
import { FelaThemeFactory } from '@fela-next/fela-bindings'

import { ThemeContext } from './context'

export default FelaThemeFactory(createElement, ThemeContext)
