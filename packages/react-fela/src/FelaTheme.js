/* @flow */
import { createElement } from 'react'
import { FelaThemeFactory } from '@fela-next/fela-bindings'

import { ThemeContext } from './context'

export default FelaThemeFactory(createElement, ThemeContext)
