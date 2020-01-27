/* @flow */
// $FlowFixMe
import { h as createElement } from 'preact'
import { createComponentFactory } from '@fela-next/fela-bindings'

import { RendererContext } from './context'
import FelaTheme from './FelaTheme'

export default createComponentFactory(createElement, RendererContext, FelaTheme)
