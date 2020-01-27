/* @flow */
import { createElement } from 'react'
import { FelaThemeFactory } from '@zaninime/fela-bindings'

import { ThemeContext } from './context'

export default FelaThemeFactory(createElement, ThemeContext)
