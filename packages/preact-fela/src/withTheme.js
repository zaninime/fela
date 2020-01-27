/* @flow */
// $FlowFixMe
import { h as createElement } from 'preact'
import { withThemeFactory } from '@fela-next/fela-bindings'

import FelaTheme from './FelaTheme'

export default withThemeFactory(createElement, FelaTheme)
