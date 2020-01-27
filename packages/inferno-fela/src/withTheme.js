/* @flow */
import { createElement } from 'inferno-create-element'
import { withThemeFactory } from '@fela-next/fela-bindings'

import FelaTheme from './FelaTheme'

export default withThemeFactory(createElement, FelaTheme)
