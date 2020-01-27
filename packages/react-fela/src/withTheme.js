/* @flow */
import { createElement } from 'react'
import { withThemeFactory } from '@fela-next/fela-bindings'

import FelaTheme from './FelaTheme'

export default withThemeFactory(createElement, FelaTheme)
