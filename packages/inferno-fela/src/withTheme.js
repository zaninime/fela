/* @flow */
import { createElement } from 'inferno-create-element'
import { withThemeFactory } from '@zaninime/fela-bindings'

import FelaTheme from './FelaTheme'

export default withThemeFactory(createElement, FelaTheme)
