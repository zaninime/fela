/* @flow */
// $FlowFixMe
import { h as createElement } from 'preact'
import { withThemeFactory } from '@zaninime/fela-bindings'

import FelaTheme from './FelaTheme'

export default withThemeFactory(createElement, FelaTheme)
